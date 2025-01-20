import AxiosInstance from "../helpers/axios-instance";

const { StudentCms } = AxiosInstance();

export const getCourseList = async (params: any) => {
  const response = await StudentCms.get("courses/", { params });

  return response;
};

export const addCourse = async (payload: any) => {
  const response = await StudentCms.post("courses/", payload);

  return response.data;
};

export const deleteCourse = async (id: number) => {
  const response = await StudentCms.delete(`courses/${id}/`);

  return response.data;
};
