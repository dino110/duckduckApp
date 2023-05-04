import axios from "axios";

export const getData = async (query: string): Promise<[]> => {
  try {
    const data = await axios.get(`http://localhost:4000/api?q=${query}`);
    if (data.status === 200) {
      return data.data;
    } else {
      return [];
    }
  } catch (error: any) {
    console.error("Error:", error.message);
    return [];
  }
};

export const getUsedQueries = async (): Promise<[]> => {
  try {
    const data = await axios.get(`http://localhost:4000/api/queries`);
    if (data.status === 200) {
      return data.data.queries;
    } else {
      return [];
    }
  } catch (error: any) {
    console.error("Error:", error.message);
    return [];
  }
};
