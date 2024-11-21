import { IInputField } from "../../interface/form-fields/input-field-model";

const InputField = (props: IInputField) => {
  const renderRegisters = props.register(props.name);

  return (
    <div className={`flex flex-col gap-1 w-full ${props.additionalStyle}`}>
      <label className="text-sm text-textLighter">{props.label}</label>
      <input
        className="border border-1-gray rounded-md p-2 text-sm text-textLighter"
        id={props.name}
        name={props.name}
        type={props.type}
        defaultValue={props.defaultValue}
        {...renderRegisters}
      />
    </div>
  );
};

export default InputField;
