import { useState } from "react";
import ChatBox from "./components/chat-box";
import UserMessageContainer from "./components/user-message-container";
import { sendMessageToChatGPT } from "../../services/openai-services";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { IOpenAiPayload } from "../../interface/ai-assistant/openai-interface";
import { NavigationToolDescription } from "../../tools/navigation-tool";

const ChatbotContainer = () => {
  const [conversation, setConversation] = useState<any>([]);
  const navigate = useNavigate();

  const { mutate: sendToChatGPTFn, isPending: isChatbotThinking } = useMutation(
    {
      mutationFn: sendMessageToChatGPT,
      onSuccess: (res: any) => {
        const { response, payload } = res;

        if (response.status == 200) {
          const finishReason = response?.data?.choices[0]?.finish_reason;

          if (finishReason === "stop") {
            const botMessage = response?.data?.choices[0]?.message?.content;
            const currConvo = [...conversation];
            const lastConvo = currConvo.pop();

            currConvo.push({
              question: lastConvo.question,
              answer: botMessage,
            });

            console.log("CONVO", currConvo);
            setConversation(currConvo);
          }

          const functionDetails =
            response?.data?.choices[0]?.message?.function_call;

          const args = JSON.parse(functionDetails.arguments);

          switch (functionDetails.name) {
            case "navigateToPage":
              payload.messages.push({
                role: "function",
                name: functionDetails.name,
                content:
                  "Successfully navigated to the desired page. Function is now finished.",
              });

              console.log(args.path);
              navigate(args.path);
              sendToChatGPTFn(payload);
              break;
          }
        }
      },
    }
  );

  const sendMessage = (message: string) => {
    let userMessages = [
      {
        role: "system",
        content:
          "Don't make assumptions about what values to plug into functions. Ask for clarification if a user request is ambiguous. Be honest if the action is not possible to execute. When the function is finished do not try to make another tool call again stop the conversation",
      },
    ];

    if (message.trim() !== "") {
      userMessages.push({
        role: "user",
        content: message,
      });

      setConversation([...conversation, { question: message, amswer: null }]);

      const allTools = [...NavigationToolDescription];

      const payload: IOpenAiPayload = {
        messages: userMessages,
        model: "gpt-4o",
        functions: allTools,
      };

      sendToChatGPTFn(payload);
    }
  };

  return (
    <>
      <ChatBox conversations={conversation} />
      <UserMessageContainer
        callback={sendMessage}
        isDisabled={isChatbotThinking}
      />
    </>
  );
};

export default ChatbotContainer;
