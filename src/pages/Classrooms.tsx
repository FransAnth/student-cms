import { useEffect, useState } from "react";
import DataTable from "../components/table/table";
import { useQuery } from "@tanstack/react-query";
import { getClassroomList } from "../services/classroom-services";
import ActionButton from "../components/buttons/action-button";
import AddRoomModal from "../components/modals/add-room/add-room-modal";

const ClassroomPage = () => {
  const [queryParams, setQueryParams] = useState<any>({
    pageNumber: 1,
    pageSize: 10,
  });
  const [classroomList, setClassroomList] = useState([]);
  const [isAddRoomModalOpen, setAddRoomModalOpen] = useState(false);

  const columnHeaders = [
    { title: "Building Name", id: "building_name", type: "text" },
    { title: "Room Name", id: "name", type: "text" },
    { title: "Status", id: "status", type: "text" },
    { title: "", id: "kebab", type: "kebab", options: [] },
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

  const addRooms = () => {
    setAddRoomModalOpen(true);
  };

  useEffect(() => {
    if (queryStatus === "success") {
      setClassroomList(queryResponse.data.results);
    }
  }, [queryStatus]);

  return (
    <>
      <div className="flex flex-col pt-12 px-8 gap-6">
        <div className="flex flex-row text-4xl">Classrooms</div>
        <div className="flex flex-row justify-end">
          <ActionButton label="Add Room" type="add" callback={addRooms} />
        </div>
        <DataTable
          headers={columnHeaders}
          rowData={classroomList}
          isFetching={isFetchingClassrooms}
        />
      </div>
      <AddRoomModal
        isOpen={isAddRoomModalOpen}
        closeModalAction={() => setAddRoomModalOpen(false)}
      />
    </>
  );
};

export default ClassroomPage;
