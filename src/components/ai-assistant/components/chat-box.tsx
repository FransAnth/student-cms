import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { IChatConversations } from "../../../interface/ai-assistant/chat-conversation";
import ChatbotGreeting from "./assistant-greeting";

interface IChatbox {
  conversations: IChatConversations[];
  assistantThinking: boolean;
}
const Chatbox = ({ conversations, assistantThinking }: IChatbox) => {
  const convoRef = useRef<any>(null);

  useEffect(() => {
    convoRef.current?.lastElementChild?.scrollIntoView();
  }, [conversations]);

  return (
    <div id="chatConfigCss" className="h-[80vh] p-10 overflow-auto ">
      {conversations.length ? (
        conversations?.map?.((conv: IChatConversations, index: number) => {
          if (conv.role == "user") {
            return (
              <div key={index}>
                <div className="flex justify-end mb-4 gap-4">
                  <div className="bg-primary px-4 py-2 rounded-lg text-white flex gap-2 max-w-[60%]">
                    <div>{conv.content}</div>
                  </div>
                  <div className="w-5 h-5">
                    <img src="src\assets\images\user-icon.png" />
                  </div>
                </div>

                {assistantThinking && index + 1 == conversations.length ? (
                  <div className="flex gap-4">
                    <div className="w-5 h-5">
                      <img src="src\assets\images\chatbot-icon.png" />
                    </div>
                    <div className="flex flex-col justify-center text-black gap-2 max-w-[60%]">
                      <div id="chatLoader"></div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          } else if (conv.role == "assistant") {
            return (
              <div key={index} className="flex gap-4 mb-4">
                <div className="w-5 h-5">
                  <img src="src\assets\images\chatbot-icon.png" />
                </div>
                <div className="flex-col justify-center text-black flex gap-2 max-w-[60%] bg-secondaryBg px-4 py-2 rounded-lg">
                  <ReactMarkdown>{conv.content}</ReactMarkdown>
                </div>
              </div>
            );
          }
        })
      ) : (
        <ChatbotGreeting />
      )}
    </div>
  );
};

export default Chatbox;
