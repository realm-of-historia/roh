import { create } from 'zustand'

const useAuthStore = create((set) => ({
  isSignedIn: false,
  userRoute: 'personal',
  isBuy: true,
  isAllChecked: false,
  signIn: () => set((state) => ({ isSignedIn: !state.isSignedIn })),
  logIn: () => set((state) => ({ isSignedIn: !state.isSignedIn })),
  changeRoute: (route) => ((state) => ({userRoute: route}))
}))

export {useAuthStore}