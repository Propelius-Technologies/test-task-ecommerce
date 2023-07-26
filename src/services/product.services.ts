import axiosInstance from "./axios.instance";

export const getAllProduct = async () => {
  try {
    const response = await axiosInstance.get("/products");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
