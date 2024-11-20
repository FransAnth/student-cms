import { EditIcon, PlusCircleIcon, Trash2Icon } from "lucide-react";
import { IActionButton } from "../../interface/buttons/action-buttons-models";

const ActionButton = (props: IActionButton) => {
  const assignIcon = (iconType: string) => {
    switch (iconType) {
      case "add":
        return <PlusCircleIcon />;
      case "delete":
        return <Trash2Icon />;
      case "edit":
        return <EditIcon />;
      default:
        return;
    }
  };

  return (
    <button
      className={`bg-primary text-white rounded-lg p-2 justify-center flex gap-2 ${props.additionalStyle}`}
      onClick={props.callback}
      type={props?.type == "submit" ? "submit" : "button"}
    >
      {props.type && assignIcon(props.type)}
      <span>{props.label}</span>
    </button>
  );
};

export default ActionButton;
