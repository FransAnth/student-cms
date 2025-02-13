import { useState } from "react";
import ChatBox from "./components/chat-box";
import UserMessageContainer from "./components/user-message-container";

const ChatbotContainer = () => {
  const [conversation, setConversation] = useState<any>([]);

  const sendMessage = (message: string) => {
    const currConvo = [...conversation];

    // currConvo.push({
    //   userId: userId,
    //   question: message,
    //   answer: null,
    //   timestamp: "",
    // });

    setConversation(currConvo);

    // Send Message to chatbot
    // chatbotQueryFn({
    //   userId: userId,
    //   question: message,
    // });
  };

  return (
    <>
      <ChatBox conversations={conversation} />
      <UserMessageContainer
        callback={sendMessage}
        // isDisabled={isChatbotThinking}
        isDisabled={false}
      />
    </>
  );
};

export default ChatbotContainer;
