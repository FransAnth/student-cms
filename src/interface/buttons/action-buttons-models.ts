export interface IActionButton {
  label: string;
  type?: "add" | "delete" | "edit" | "submit";
  additionalStyle?: string;
  callback?: () => void;
}
