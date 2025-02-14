import AxiosInstance from "../helpers/axios-instance";
import { IOpenAiPayload } from "../interface/ai-assistant/openai-interface";

const { OpenAi } = AxiosInstance();

export const sendMessageToChatGPT = async (payload: IOpenAiPayload) => {
  const header = { "Content-Type": "application/json" };
  const response = await OpenAi.post("/v1/chat/completions", payload, {
    headers: header,
  });

  const data = { response: response, payload: payload };

  return data;
};
