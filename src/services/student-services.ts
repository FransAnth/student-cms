import AxiosInstance from "../helpers/axios-instance";

const { StudentCms } = AxiosInstance();

export const getStudentList = async (params: any) => {
  const response = await StudentCms.get("students/", { params });

  return response;
};

export const addStudent = async (payload: any) => {
  const response = await StudentCms.post("students/", payload);

  return response.data;
};

export const deleteStudent = async (id: number) => {
  const response = await StudentCms.delete(`students/${id}/`);

  return response.data;
};
