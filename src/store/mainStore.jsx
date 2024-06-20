import { create } from "zustand";

const useStore = create((set) => ({
  recipesObject: null,
  setRecipes: (val) => set({ recipesObject: val }),
}));

export default useStore;
