export interface IOpenAiPayload {
  model: string;
  messages: any;
  functions?: any | null;
  tool_choice?: any | null;
}
