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
    database: "base.sqlite",
    namingStrategy: new SnakeNamingStrategy(),
    synchronize: true,
    logging: true,
};

export const authOptions: any = {
    providers: [
      DiscordProvider({
        clientId: process.env.DISCORD_ID ?? "",
        clientSecret: process.env.DISCORD_SECRET ?? "",
        // authorization:{
        //     url
        // }
      }),
      GoogleProvider({
          clientId: process.env.GOOGLE_ID ?? "",
          clientSecret: process.env.GOOGLE_SECRET ?? "",
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
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM
      }),
    ],
    adapter: TypeORMAdapter("sqlite:base.sqlite"),
    session: {
      jwt: true,
    },
    callbacks: {
    async redirect({ url, baseUrl }: {url: any, baseUrl: any}) { return baseUrl },
    async signIn({ user, isNewUser }: { user: any, isNewUser: any }) {
      if (isNewUser) {
        console.info(`NextAuth: created user ${user.id}`);
        await WalletService.createWallets(user.id);
        console.info(`NextAuth: initialized wallet for user ${user.id}`);
      }
      console.info(`NextAuth: fetching wallets for user ${user.id}`);
      user.wallets = await WalletService.fetchWallets(user.id);
      if(user.wallets) {
        return true;
      } else {
        await WalletService.createWallets(user.id)
      }
      user.wallets = await WalletService.fetchWallets(user.id);
      return true
    },
    async jwt({ token, user, account, profile, isNewUser }: { token: any, user: any, account: any, profile: any, isNewUser: any }) {
      if (user) {
        token.wallets = user.wallets;
      }
      return token;
    },
    async session({ session, token }: { session: any, token: any }) {
      session.wallets = token.wallets;
      return session;
    },
  }
  }