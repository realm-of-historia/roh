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
  signIn: () => set((state) => ({ isSignedIn: !state.isSignedIn })),
  logIn: () => set((state) => ({ isSignedIn: !state.isSignedIn })),
  changeRoute: (route) => ((state) => ({userRoute: route}))
}))
  
export {useAuthStore}