import AxiosInstance from "../helpers/axios-instance";

const { StudentCms } = AxiosInstance();

export const getClassroomList = async (params: any) => {
  const response = await StudentCms.get("classrooms/", { params });

  return response;
};
