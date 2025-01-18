import AxiosInstance from "../helpers/axios-instance";

const { StudentCms } = AxiosInstance();

export const getClassroomList = async (params: any) => {
  const response = await StudentCms.get("classrooms/", { params });

  return response;
};

export const addClassroom = async (payload: any) => {
  const response = await StudentCms.post("classrooms/", payload);

  console.log("CREATED");
  return response.data;
};

export const deleteClassroom = async (id: any) => {
  const response = await StudentCms.delete(`classrooms/${id}/`);

  return response.data;
};
