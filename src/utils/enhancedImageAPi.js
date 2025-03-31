import axios from "axios";

const BASE_URL = "https://techhk.aoscdn.com/";

export const enhancedImageAPI = async (file) => {
  try {
    const taskID = await uploadImage(file);
    console.log("Image Uploaded Successfully, Task ID: ", taskID);

    const enhancedImageData = await PollForEnhancedImage(taskID);
    console.log("Enhanced Image Data: ", enhancedImageData);

    console.log(enhancedImageData);
    return enhancedImageData;
  } catch (err) {
    console.log(err);
  }
};

const uploadImage = async (file) => {
  //""
  const formData = new formData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": process.env.REACT_APP_API_KEY,
      },
    }
  );

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image, Task ID not found");
  }
  return data.data.task_id;
};

const fetchEnhancedImage = async (taskID) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskID}`,
    {
      headers: {
        "X-API-KEY": process.env.REACT_APP_API_KEY,
      },
    }
  );

  if (!data?.data) {
    throw new Error("Failed to fetch image");
  }
  return data.data;
};

const PollForEnhancedImage = async (taskID, retries = 0) => {
  const result = await fetchEnhancedImage(taskID);

  if (result.state === 4) {
    console.log("Processing....");

    if (retries >= 20) {
      throw new Error("Max retries reached. Please try again later.");
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return PollForEnhancedImage(taskID, retries + 1);
  }
  console.log("Enhanced Image URL:", result);
  return result;
};
