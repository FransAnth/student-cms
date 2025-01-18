import { useMutation } from "@tanstack/react-query";
import Modal from "..";
import { IAddRoomModal } from "../../../interface/modals/modal-model";
import ActionButton from "../../buttons/action-button";
import InputField from "../../form-fields/input-field";
import { useForm } from "react-hook-form";
import { addClassroom } from "../../../services/classroom-services";
import Loader from "../../global/loader";

const AddRoomModal = (props: IAddRoomModal) => {
  const { register, handleSubmit } = useForm();

  const { isPending: addingClassroom, mutate: AddNewClassroom } = useMutation({
    mutationFn: addClassroom,
    onSuccess: (response: any) => {
      console.log(response);
      location.reload();
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  return (
    <>
      <Modal
        title="Add Room"
        isOpen={props.isOpen}
        closeModalAction={props.closeModalAction}
        children={
          <div className="px-12 py-4">
            <form onSubmit={handleSubmit((data) => AddNewClassroom(data))}>
              <div className="flex flex-col justify-between gap-12">
                <div className="flex justify-between gap-8">
                  <InputField
                    name="buildingName"
                    label="Building Name"
                    register={register}
                    type="text"
                  />
                  <InputField
                    name="name"
                    label="Room Name"
                    register={register}
                    type="text"
                  />
                  <InputField
                    name="code"
                    label="Room Code"
                    register={register}
                    type="text"
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <ActionButton
                    label="Add Room"
                    type="submit"
                    additionalStyle="w-24"
                  />
                  <ActionButton
                    label="Cancel"
                    additionalStyle="w-24 bg-warning"
                    callback={props.closeModalAction}
                  />
                </div>
              </div>
            </form>
          </div>
        }
      />
      {addingClassroom && <Loader />}
    </>
  );
};

export default AddRoomModal;
