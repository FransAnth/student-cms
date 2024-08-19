import { useEffect, useState } from "react";
import DataTable from "../components/table/table";
import { useQuery } from "@tanstack/react-query";
import { getClassroomList } from "../services/classroom-services";

const ClassroomPage = () => {
  const [queryParams, setQueryParams] = useState<any>({
    pageNumber: 1,
    pageSize: 10,
  });
  const [classroomList, setClassroomList] = useState([]);

  const columnHeaders = [
    { title: "Building Name", id: "building_name" },
    { title: "Room Name", id: "name" },
    { title: "Status", id: "status" },
  ];

  const {
    isLoading: isFetchingClassrooms,
    data: queryResponse,
    status: queryStatus,
  } = useQuery({
    queryKey: ["ClassroomList", queryParams],
    queryFn: async () => {
      return await getClassroomList(queryParams);
    },
  });

  useEffect(() => {
    if (queryStatus === "success") {
      setClassroomList(queryResponse.data.results);
    }
  }, [queryStatus]);

  return (
    <div className="flex flex-col pt-12 px-8 gap-10">
      <div className="flex flex-row text-4xl">Classrooms</div>
      <DataTable
        headers={columnHeaders}
        rowData={classroomList}
        isFetching={isFetchingClassrooms}
      />
    </div>
  );
};

export default ClassroomPage;
