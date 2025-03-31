import axios from "axios";

const BASE_URL = "https://techhk.aoscdn.com/";

export const enhancedImageAPI = async (file) => {
  try {
    const taskID = await uploadImage(file);
    console.log("Image Uploaded Successfully, Task ID: ", taskID);

    const enhancedImageData = await fetchEnhancedImage(taskID);
    console.log("Enhanced Image Data: ", enhancedImageData);

    console.log(enhancedImageData);
    // return enhancedImageData;
  } catch (err) {
    console.log(err);
  }
};

const uploadImage = async (file) => {
  //""
  const formData = new formData();
  formData.append("iamge_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": process.env.API_KEY,
      },
    }
  );
  //   return taskID;
};

const fetchImage = async (file) => {
  //"/api/tasks/visual/scale/{task_id}"
};
