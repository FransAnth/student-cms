import { createPortal } from "react-dom";
import { IModal } from "../../interface/modals/modal-model";
import { CircleXIcon } from "lucide-react";
import { useEffect } from "react";

const Modal = (props: IModal) => {
  function escHandler({ key }: any) {
    if (key === "Escape") {
      props.closeModalAction();
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", escHandler);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", escHandler);
      }
    };
  }, []);

  return createPortal(
    <div
      className={`${
        props.isOpen ? "flex" : "hidden"
      } pt-24 justify-center inset-0 fixed z-50 bg-gray-500 bg-opacity-50`}
    >
      <div className="flex flex-col bg-white w-1/2 h-fit min-h-56 rounded-lg">
        <div className="flex flex-row justify-between p-2 bg-primary rounded-t-lg text-white">
          <span>{props.title}</span>
          <button onClick={props.closeModalAction}>
            <CircleXIcon />
          </button>
        </div>
        <div className="p-2">{props.children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
