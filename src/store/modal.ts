import { useAppSelector } from "@/hooks/redux";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InventoryState {
  modalId: number;
}

const initialState: InventoryState = {
  modalId: -1,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal(state, action: PayloadAction<number>) {
      state.modalId = action.payload;
    },

    close(state) {
      state.modalId = -1;
    },
  },
});

export const { setModal, close } = modalSlice.actions;

export const useModal = () => useAppSelector((state) => state.modal);

export default modalSlice.reducer;
