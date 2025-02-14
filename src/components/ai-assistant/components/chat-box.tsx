import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { IChatConversations } from "../../../interface/ai-assistant/chat-conversation";
import ChatbotGreeting from "./chatbot-greeting";

interface IChatbox {
  conversations: IChatConversations[];
}
const Chatbox = ({ conversations }: IChatbox) => {
  const convoRef = useRef<any>(null);

  useEffect(() => {
    console.log("conv", conversations);
    convoRef.current?.lastElementChild?.scrollIntoView();
  }, [conversations]);

  return (
    <div id="chatConfigCss" className="h-[80vh] p-10 overflow-auto ">
      {conversations.length ? (
        conversations?.map?.((conv: IChatConversations, index: number) => (
          <>
            <div key={index} ref={convoRef}>
              <div className="flex justify-end mb-4 gap-4">
                <div className="bg-primary px-4 py-2 rounded-lg text-white flex gap-2 max-w-[60%]">
                  <div>{conv.question}</div>
                </div>
                <div className="w-5 h-5">
                  <img src="src\assets\images\user-icon.png" />
                </div>
              </div>
              <div className="flex mb-4">
                {conv.answer ? (
                  <div className="flex gap-4">
                    <div className="w-5 h-5">
                      <img src="src\assets\images\chatbot-icon.png" />
                    </div>
                    <div className="flex-col justify-center text-black flex gap-2 max-w-[60%] bg-secondaryBg px-4 py-2 rounded-lg">
                      <ReactMarkdown>{conv.answer}</ReactMarkdown>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4">
                    <div className="w-5 h-5">
                      <img src="src\assets\images\chatbot-icon.png" />
                    </div>
                    <div className="flex flex-col justify-center text-black gap-2 max-w-[60%]">
                      <div id="chatLoader"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        ))
      ) : (
        <ChatbotGreeting />
      )}
    </div>
  );
};

export default Chatbox;
