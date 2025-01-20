import { useMutation } from "@tanstack/react-query";
import Modal from ".";
import { IAddDataModal } from "../../interface/modals/modal-model";
import ActionButton from "../buttons/action-button";
import InputField from "../form-fields/input-field";
import { useForm } from "react-hook-form";
import Loader from "../global/loader";
import { addCourse } from "../../services/course-services";

const AddCourseModal = (props: IAddDataModal) => {
  const { register, handleSubmit } = useForm();

  const { isPending: addingCourse, mutate: addNewCourse } = useMutation({
    mutationFn: addCourse,
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
        title="Add Course"
        isOpen={props.isOpen}
        closeModalAction={props.closeModalAction}
        children={
          <div className="px-12 py-4">
            <form onSubmit={handleSubmit((data) => addNewCourse(data))}>
              <div className="flex flex-col justify-between gap-12">
                <div className="flex justify-between gap-8">
                  <InputField
                    name="name"
                    label="Course Name"
                    register={register}
                    type="text"
                  />
                  <InputField
                    name="code"
                    label="Code"
                    register={register}
                    type="text"
                  />
                  <InputField
                    name="description"
                    label="Description"
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
      {addingCourse && <Loader />}
    </>
  );
};

export default AddCourseModal;
