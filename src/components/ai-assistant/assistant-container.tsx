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

  const { mutate: sendToChatGPTFn, isPending: isAssistantThinking } =
    useMutation({
      mutationFn: sendMessageToChatGPT,
      onSuccess: (res: any) => {
        const { response, payload } = res;

        if (response.status == 200) {
          const finishReason = response?.data?.choices[0]?.finish_reason;

          if (finishReason === "stop") {
            const botMessage = response?.data?.choices[0]?.message?.content;
            const messages = [...conversation];

            messages.push({
              role: "assistant",
              content: botMessage,
            });

            setConversation(messages);
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
                  "Navigation to the desired page is complete. No further function calls are required.",
              });

              navigate(args.path);
              sendToChatGPTFn(payload);
              break;
          }
        }
      },
    });

  const sendMessage = (message: string) => {
    const messages = [...conversation];

    if (message.trim() !== "") {
      let systemMessage = {
        role: "system",
        content:
          "Don't make assumptions about what values to plug into functions. Ask for clarification if a user request is ambiguous. Be honest if the action is not possible to execute. When the function is finished do not try to make another tool call again stop the conversation",
      };

      messages.push({
        role: "user",
        content: message,
      });

      setConversation([...messages]);
      messages.unshift(systemMessage);

      const allTools = [...NavigationToolDescription];

      const payload: IOpenAiPayload = {
        messages: messages,
        model: "gpt-4o",
        functions: allTools,
      };

      sendToChatGPTFn(payload);
    }
  };

  return (
    <>
      <ChatBox
        conversations={conversation}
        assistantThinking={isAssistantThinking}
      />
      <UserMessageContainer
        callback={sendMessage}
        isDisabled={isAssistantThinking}
      />
    </>
  );
};

export default ChatbotContainer;
