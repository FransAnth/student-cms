import { useMutation } from "@tanstack/react-query";
import Modal from ".";
import { IAddDataModal } from "../../interface/modals/modal-model";
import ActionButton from "../buttons/action-button";
import InputField from "../form-fields/input-field";
import { useForm } from "react-hook-form";
import Loader from "../global/loader";
import { addStudent } from "../../services/student-services";

const AddStudentModal = (props: IAddDataModal) => {
  const { register, handleSubmit } = useForm();

  const { isPending: addingClassroom, mutate: addNewStudent } = useMutation({
    mutationFn: addStudent,
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
        title="Add Student"
        isOpen={props.isOpen}
        closeModalAction={props.closeModalAction}
        children={
          <div className="px-12 py-4">
            <form onSubmit={handleSubmit((data) => addNewStudent(data))}>
              <div className="flex flex-col justify-between gap-12">
                <div className="flex justify-between gap-8">
                  <InputField
                    name="firstName"
                    label="First Name"
                    register={register}
                    type="text"
                  />
                  <InputField
                    name="middleInitial"
                    label="Middle Initial"
                    register={register}
                    type="text"
                  />
                  <InputField
                    name="lastName"
                    label="Last Name"
                    register={register}
                    type="text"
                  />
                </div>
                <div className="flex justify-between gap-8">
                  <InputField
                    name="address"
                    label="Address"
                    register={register}
                    type="text"
                  />
                  <InputField
                    name="birthday"
                    label="Birthday"
                    placeholder="YYYY-MM-DD"
                    register={register}
                    type="text"
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <ActionButton
                    label="Add"
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

export default AddStudentModal;
