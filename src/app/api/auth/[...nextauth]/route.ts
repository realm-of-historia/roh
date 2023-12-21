import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import TwitterProvider from 'next-auth/providers/twitter'
import EmailProvider from "next-auth/providers/email"
import { WalletService } from "@/services/WalletService"
import { ConnectionOptions, Entity} from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { TypeORMAdapter} from "@auth/typeorm-adapter"


const connection: ConnectionOptions = {
    type: "sqlite",
    database: "base.sqlite3",
    namingStrategy: new SnakeNamingStrategy(),
    synchronize: true,
    logging: true,
};


const authOptions: any = {
    providers: [
      DiscordProvider({
        clientId: process.env.DISCORD_ID ?? "",
        clientSecret: process.env.DISCORD_SECRET ?? "",
        authorization:{
            url: 'https://roh-self.vercel.app/api/auth/callback/discord'
        },
        // checks: ['none'],
      }),
      GoogleProvider({
          clientId: process.env.GOOGLE_ID ?? "",
          clientSecret: process.env.GOOGLE_SECRET ?? "",
          // checks: ['none'],
      }),
      TwitterProvider({
        clientId: process.env.TWITTER_CLIENT_ID ?? "",
        clientSecret: process.env.TWITTER_CLIENT_SECRET ?? ""
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? ""
      }),
      EmailProvider({
        server: {
            host: process.env.EMAIL_SERVER_HOST,
            port: process.env.EMAIL_SERVER_PORT,
            auth: {
              user: process.env.EMAIL_SERVER_USER,
              pass: process.env.EMAIL_SERVER_PASSWORD
            }
          },
        from: process.env.EMAIL_FROM
      }),
    ],
    // sqlite:base.sqlite
    adapter: TypeORMAdapter(connection),
    secret: process.env.NEXTAUTH_SECRET,
    debug: true,
    session: {
      jwt: true,
    },
    callbacks: {
    async redirect({ url, baseUrl }: {url: any, baseUrl: any}) { return baseUrl },
    async signIn({ user, isNewUser }: { user: any, isNewUser: any }) {
    //   console.log(isNewUser, 'новый ли юзер')
      if (isNewUser) {
        console.info(`NextAuth: created user ${user.id}`);
        await WalletService.createWallets(user.id);
        console.info(`NextAuth: initialized wallet for user ${user.id}`);
      }
      console.info(`NextAuth: fetching wallets for user ${user.id}`);
    //   console.log(user.wallets, 'валеты юзера')
      user.wallets = await WalletService.fetchWallets(user.id);
      if(user.wallets) {
        // console.log('с кошельками всё норм', user.wallets)
        return true;
      } else {
        // console.log('С кошельками лажа', user?.wallets)
        await WalletService.createWallets(user.id)
      }
    //   console.log(user.id, 'для отправки в fetchWallets')
      user.wallets = await WalletService.fetchWallets(user.id);
      console.info(`Ну ${user.id}`)
      return true
    },
    async jwt({ token, user, account, profile, isNewUser }: { token: any, user: any, account: any, profile: any, isNewUser: any }) {
    //   console.log(token, 'tokenik')
      if (user) {
        token.wallets = user.wallets;
      }
      return token;
    },
    async session({ session, token, user}: { session: any, token: any, user: any}) {
      if (user?.wallets) {
          session.wallets = user.wallets;
      } else if (token?.wallets) {
          session.wallets = token.wallets;
      }
      return session;
    },
  }
  }



const handler = NextAuth(authOptions)

export {handler as GET, handler as POST};