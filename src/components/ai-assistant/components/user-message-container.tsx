import { useRef } from "react";
import { SendIcon } from "lucide-react";

interface IUserMessageContainer {
  isDisabled?: boolean;
  callback: (message: string) => any;
}

const UserMessageContainer = ({
  isDisabled,
  callback,
}: IUserMessageContainer) => {
  const messageRef = useRef<any>(null);

  const sendMessageAction = (event: any) => {
    if (
      ((event.key === "Enter" && !event.shiftKey) || event.type === "click") &&
      !isDisabled
    ) {
      callback(messageRef.current.value);
      event.preventDefault();
      messageRef.current.value = "";
    }
  };

  return (
    <>
      <div className="flex w-full">
        <textarea
          ref={messageRef}
          className="w-full rounded-s-lg border-primary px-4 py-2 resize-none h-12 bg-secondaryBg"
          onKeyDown={sendMessageAction}
        />
        <button
          onClick={sendMessageAction}
          className="px-2 bg-primaryBg rounded-e-lg text-secondary"
        >
          <SendIcon />
        </button>
      </div>
    </>
  );
};

export default UserMessageContainer;
