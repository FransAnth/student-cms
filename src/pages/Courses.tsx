import { useQuery, useMutation } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useState } from "react";
import ActionButton from "../components/buttons/action-button";
import Pagination from "../components/pagination/pagination";
import DataTable from "../components/table/table";
import { getCourseList, deleteCourse } from "../services/course-services";
import AddCourseModal from "../components/modals/add-course-modal";

const CoursesPage = () => {
  const [queryParams, setQueryParams] = useState<any>({
    pageNumber: 1,
    pageSize: 5,
  });
  const [courseList, setCourseList] = useState([]);
  const [isAddCourseModalOpen, setAddCourseModalOpen] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const columnHeaders = [
    { title: "Course Name", id: "name", type: "text" },
    { title: "Code", id: "code", type: "text" },
    { title: "Status", id: "status", type: "text" },
    {
      title: "",
      id: "kebab",
      type: "kebab",
      options: [
        // { type: "view", name: "View", action: viewRoom },
        {
          type: "delete",
          name: "Delete",
          action: (data: any) => deleteCourseData(data.id),
        },
      ],
    },
  ];

  const { isLoading: isFetchingCourseList } = useQuery({
    queryKey: ["CourseList", queryParams],
    queryFn: async () => {
      const { data: classroomList } = await getCourseList(queryParams);
      setCourseList(classroomList.results);
      setTotalCount(classroomList.count);
    },
  });

  const { isPending: isDeletingCourse, mutate: deleteCourseData } = useMutation(
    {
      mutationFn: deleteCourse,
      onSuccess: (response: any) => {
        console.log(response);
        location.reload();
      },
      onError: (error: any) => {
        console.log(error);
      },
    }
  );

  const onPageChange = (page: number) => {
    setQueryParams({
      ...queryParams,
      pageNumber: page,
    });
  };

  const onSizeChange = (size: number) => {
    setQueryParams({
      ...queryParams,
      pageSize: size,
    });
  };

  return (
    <>
      <div className="flex flex-col pt-12 px-8 gap-6">
        <div className="flex flex-row text-4xl">Courses</div>
        <div className="flex flex-row justify-end">
          <ActionButton
            label="Add Course"
            type="add"
            callback={(data: any) => setAddCourseModalOpen(data)}
          />
        </div>
        <DataTable
          headers={columnHeaders}
          rowData={courseList}
          isFetching={isFetchingCourseList}
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
      <AddCourseModal
        isOpen={isAddCourseModalOpen}
        closeModalAction={() => setAddCourseModalOpen(false)}
      />
      {isDeletingCourse && <Loader />}
    </>
  );
};

export default CoursesPage;
