import { create } from 'zustand'

export const cardStore = create((set) => ({
    cards: [],
    addCard: (card) => {
        set((state) => ({
            cards: [...state.cards, card]
        }))
    }
}))
