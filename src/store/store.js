import { create } from 'zustand'

const useAuthStore = create((set) => ({
  isSignedIn: false,
  signIn: () => set((state) => ({ isSignedIn: !state.isSignedIn })),
  logIn: () => set((state) => ({ isSignedIn: !state.isSignedIn })),
}))

export {useAuthStore}