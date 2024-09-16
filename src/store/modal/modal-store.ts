"use client"
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface State {
    errorModal:boolean;
    showModalEdit: boolean;
    showModalNew: boolean;
    showModalNewSuccess: boolean;
    showModalDelete: boolean;
    showModalDeleteSuccess: boolean;
    setErrorModal:(value: boolean) => void;
    setModalEdit: (value: boolean) => void;
    setModalNew: (value: boolean) => void;
    setModalNewSuccess: (value: boolean) => void;
    setModalDelete: (value: boolean) => void;
    setModalDeleteSuccess: (value: boolean) => void;
}

export const useModalStore = create<State>()(
    persist(
        (set) => ({
          errorModal: false,
          showModalEdit: false,
          showModalNew: false,
          showModalNewSuccess: false,
          showModalDelete: false,
          showModalDeleteSuccess: false,
          setErrorModal:(value) => set({ errorModal: value }),
          setModalEdit: (value) => set({ showModalEdit: value }),
          setModalNew: (value) => set({ showModalNew: value }),
          setModalNewSuccess: (value) => set({ showModalNewSuccess: value }),
          setModalDelete: (value) => set({ showModalDelete: value }),
          setModalDeleteSuccess: (value) => set({ showModalDeleteSuccess: value })
        }),
        {
          name: 'modal-storage', // Nombre para el almacenamiento persistente
          storage: createJSONStorage(() => localStorage),
        }
      )
    );
