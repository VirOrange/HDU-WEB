import {create} from 'zustand';

export const useStore = create((set) => ({
  cart: [],
  addToCart: (book) => set((state) => ({ cart: [...state.cart, book] })),
  removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  clearCart: () => set({ cart: [] })
}));
