import { Loader } from "lucide-react";
import { useState } from "react";
import ActionButton from "../components/buttons/action-button";
import Pagination from "../components/pagination/pagination";
import DataTable from "../components/table/table";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getStudentList, deleteStudent } from "../services/student-services";
import AddStudentModal from "../components/modals/add-student-modal";

const StudentsPage = () => {
  const [queryParams, setQueryParams] = useState<any>({
    pageNumber: 1,
    pageSize: 5,
  });
  const [studentList, setStudentList] = useState([]);
  const [isAddStudentModalOpen, setAddStudentModalOpen] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const columnHeaders = [
    { title: "First Name", id: "firstName", type: "text" },
    { title: "Middle Initial", id: "middleInitial", type: "text" },
    { title: "Last Name", id: "lastName", type: "text" },
    { title: "Address", id: "address", type: "text" },
    {
      title: "",
      id: "kebab",
      type: "kebab",
      options: [
        // { type: "view", name: "View", action: viewRoom },
        {
          type: "delete",
          name: "Delete",
          action: (data: any) => deleteStudentData(data.id),
        },
      ],
    },
  ];

  const { isLoading: isFetchingStudentList } = useQuery({
    queryKey: ["StudentList", queryParams],
    queryFn: async () => {
      const { data: classroomList } = await getStudentList(queryParams);
      setStudentList(classroomList.results);
      setTotalCount(classroomList.count);
    },
  });

  const { isPending: isDeletingStudent, mutate: deleteStudentData } =
    useMutation({
      mutationFn: deleteStudent,
      onSuccess: (response: any) => {
        console.log(response);
        location.reload();
      },
      onError: (error: any) => {
        console.log(error);
      },
    });

  const onPageChange = (page: number) => {
    setQueryParams({
      ...queryParams,
      pageNumber: page,
    });
  };

  const onSizeChange = (size: number) => {
    setQueryParams({
      ...queryParams,
      pageNumber: 1,
      pageSize: size,
    });
  };

  return (
    <>
      <div className="flex flex-col pt-12 px-8 gap-6">
        <div className="flex flex-row text-4xl">Students</div>
        <div className="flex flex-row justify-end">
          <ActionButton
            label="Add Student"
            type="add"
            callback={(data: any) => setAddStudentModalOpen(data)}
          />
        </div>
        <DataTable
          headers={columnHeaders}
          rowData={studentList}
          isFetching={isFetchingStudentList}
        />
        <Pagination
          className="pagination-bar"
          currentPage={queryParams.pageNumber}
          totalCount={totalCount}
          pageSize={queryParams.pageSize}
          onPageChange={onPageChange}
          onSizeChange={onSizeChange}
        />
      </div>
      <AddStudentModal
        isOpen={isAddStudentModalOpen}
        closeModalAction={() => setAddStudentModalOpen(false)}
      />
      {isDeletingStudent && <Loader />}
    </>
  );
};

export default StudentsPage;
