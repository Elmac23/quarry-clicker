"use client";

import Button from "@/components/Button";
import Modal, { ModalProps } from "@/components/modal";

type SmeltingModalProps = Pick<ModalProps, "isOpen" | "onClose">;

function Smelting({ isOpen, onClose }: SmeltingModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className="bg-secondary-800/70 p-8 pixelated border-16 rounded-4xl"
        style={{
          borderImage: "url('/sprites/ui/frame.png') 7",
          borderImageRepeat: "round",
        }}
      >
        <h2 className="jersey10 text-3xl text-primary-500 mb-2">Smelting</h2>

        <Button onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
}

export default Smelting;
