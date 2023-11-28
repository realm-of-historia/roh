import { create } from 'zustand'

const useAuthStore = create((set) => ({
  isSignedIn: false,
  isMint: false,
  userRoute: 'myRealm',
  isBuy: true,
  isAllChecked: false,
  isLenis: true,
  isBurger: false,
  aboutTheProject: [],
  carahunges: [],
  joinUses: [],
  signIn: () => set((state) => ({ isSignedIn: !state.isSignedIn })),
  logIn: () => set((state) => ({ isSignedIn: !state.isSignedIn })),
  changeRoute: (route) => ((state) => ({userRoute: route}))
}))
  
export {useAuthStore}