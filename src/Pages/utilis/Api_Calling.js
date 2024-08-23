import axios from "axios";
// const Api_Url = 'https://gethire-backend.onrender.com/'
// const Api_Url = "http://localhost:5000/";
const Api_Url = "https://gethire-backend.onrender.com/";

const GetApi = async (apiEndpoint) => {
  try {
    const authToken = localStorage.getItem("StudentToken");
    const response = await axios.get(`${Api_Url}${apiEndpoint}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const PutApi = async (apiEndpoint, data) => {
  try {
    const authToken = localStorage.getItem("StudentToken");
    const jsonData = JSON.stringify(data);
    const response = await axios.put(`${Api_Url}${apiEndpoint}`, jsonData, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const GetApiwithouttoken = async (apiEndpoint) => {
  try {
    const response = await axios.get(`${Api_Url}${apiEndpoint}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const DeleteApi = async (apiEndpoint, id) => {
  const authToken = localStorage.getItem("StudentToken");
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };
    const response = await axios.delete(
      `${Api_Url}${apiEndpoint}/${id}`,
      config
    );
    return response;
  } catch (error) {
    console.error("Error deleting priest:", error);
    throw error;
  }
};

const PostApi = async (apiEndpoint, postData) => {
  const authToken = localStorage.getItem("StudentToken");
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };
    const postDataCopy = JSON.parse(JSON.stringify(postData));
    const response = await axios.post(
      `${Api_Url}${apiEndpoint}`,
      postDataCopy,
      config
    );
    return response;
  } catch (error) {
    console.error("Error creating:", error);
    throw error;
  }
};

const updateApi = async (apiEndpoint, updatedDetail) => {
  const authToken = localStorage.getItem("StudentToken");
  try {
    const formData = new FormData();

    Object.entries(updatedDetail).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await axios.put(`${Api_Url}${apiEndpoint}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${authToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating personal detail:", error);
    throw error;
  }
};

const postformdataApi = async (apiEndpoint, postData) => {
  const authToken = localStorage.getItem("StudentToken");
  try {
    const formData = new FormData();

    Object.entries(postData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await axios.post(`${Api_Url}${apiEndpoint}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${authToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error creating:", error);
    throw error;
  }
};

export {
  GetApi,
  PutApi,
  GetApiwithouttoken,
  DeleteApi,
  PostApi,
  Api_Url,
  updateApi,
  postformdataApi,
};
