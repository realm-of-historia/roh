import { create } from 'zustand'

const useAuthStore = create((set) => ({
  isSignedIn: false,
  isMint: false,
  token: null,
  userRoute: 'myRealm',
  isBuy: true,
  profileChange: null,
  isAllChecked: false,
  isLenis: true,
  isBurger: false,
  aboutTheProject: [],
  carahunges: [],
  joinUses: [],
  instagram: {},
  mintModalVisible: false,
  profileWalletAdress: '',
  signedMessage: null,
  profileSigner: null,
  level: 0,
  signIn: () => set((state: any) => ({ isSignedIn: !state.isSignedIn })),
  logIn: () => set((state: any) => ({ isSignedIn: !state.isSignedIn })),
  changeRoute: (route: any) => ((state: any) => ({userRoute: route}))
}))
  
export {useAuthStore}