import React, { FC } from "react";
import { Dialog } from "radix-ui";

interface Section {
  name: string;
  title: string;
  text: string[];
  url: string;
}

interface ModalProps {
  triggerButton?: React.ReactNode;
  ModalTitle: string;
  ModalDescription: string;
  ModalLink: string;
  ModalImage: string;
  section: Section;
}

const Modal: FC<ModalProps> = ({
  triggerButton,
  ModalDescription,
  ModalLink,
  ModalTitle,
  ModalImage,
  section,
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {triggerButton ? triggerButton : <button>Open Modal</button>}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 w-full bg-black/80 data-[state=open]:animate-overlayShow z-10" />
        <Dialog.Content className="text-white  fixed left-1/2 top-1/2 w-[55%] h-[80%] -translate-x-1/2 z-20 -translate-y-1/2 rounded-md bg-slate-900 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow flex flex-col justify-between">
          <Dialog.Title className="text-3xl font-semibold p-3">
            {ModalTitle}
          </Dialog.Title>
          <Dialog.Description className="flex flex-col items-center justify-center h-[80%]">
            <img
              src={ModalImage}
              alt=""
              className="h-2/3 rounded-lg border-indigo-500 border shadow-md shadow-indigo-500"
            />
            <span className="h-1/3 flex flex-col w-full items-start justify-center gap-5 p-5">
              <span className="p-5 text-lg">{ModalDescription}</span>
              <a
                href={ModalLink}
                target="_blank"
                className="text-blue-500 underline text-xl"
              >
                {section.text[1]}
              </a>
            </span>
          </Dialog.Description>
          <div className="w-full flex items-end justify-end">
            <Dialog.Close asChild>
              <button className="px-4 py-2 bg-red-700 rounded-md text-lg font-semibold hover:cursor-pointer ">
                {section.text[0]}
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
