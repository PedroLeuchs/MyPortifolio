import { FC, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

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
  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  console.log(open);

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setOpen(true);
    } else {
      setAnimating(true);
      setTimeout(() => {
        setOpen(false);
        setAnimating(false);
      }, 500); // Duração da animação de fechamento
    }
  };

  useEffect(() => {
    if (open) {
      document.body.removeAttribute("data-scroll-locked");
    }
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        {triggerButton ? triggerButton : <button>Open Modal</button>}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`fixed inset-0 w-full bg-black/80 overflow-y-auto ${
            open ? "overlayShow" : ""
          } ${animating ? "overlayHide" : ""} z-10`}
        />
        <Dialog.Content
          forceMount={true}
          className={`text-white fixed left-1/2 top-1/2 lg:w-[55%] w-[90%] h-[80%] -translate-x-1/2 z-20 -translate-y-1/2 rounded-md bg-slate-900 p-[25px] shadow-[var(--shadow-6)] focus:outline-none ${
            open ? "contentshow" : ""
          } ${animating ? "contentHide" : ""} flex flex-col justify-between`}
        >
          <Dialog.Title className="lg:text-3xl text-2xl font-semibold lg:p-3 p-1">
            {ModalTitle}
          </Dialog.Title>
          <Dialog.Description className="flex flex-col items-center lg:justify-center justify-start h-[80%]">
            <img
              src={ModalImage}
              alt=""
              className="lg:h-2/3 h-2/5 rounded-lg border shadow-md shadow-slate-500 "
            />
            <span className="lg:h-1/3 h-3/5 flex flex-col w-full items-start justify-center gap-5 p-5">
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
