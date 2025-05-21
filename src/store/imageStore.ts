
import {create} from 'zustand';


type ImageStore = {
    images : string[];
    setImages: (images: string[]) => void;
    addImage: (image: string) => void;
    removeImage: (image: string) => void;
    clearImages: () => void;
}

export const useImageStore = create<ImageStore>((set) => ({
    images: [],
    setImages: (images: string[]) => set({ images }),
    addImage: (image: string) => set((state) => ({ images: [...state.images, image] })),
    removeImage: (image: string) => set((state) => ({ images: state.images.filter((img) => img !== image) })),
    clearImages: () => set({ images: [] }),
}))