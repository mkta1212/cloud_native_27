import axios from "axios";
import authHeader from "./authHeader";
import { Navigate } from "react-router-dom";
async function getData(url, page, params) {
  return await axios
    .get(url, {
      headers: authHeader(),
      params: {
        page: page,
        ...(params && { ...params }),
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      const status = error.response.status;
      console.log(error);
      alert(error.response.data);
      window.location.href = "/";
      return undefined;
    });
}
async function postData(url, body) {
  return await axios
    .post(url, body, { headers: authHeader() })
    .then((res) => {
      return res.status;
    })
    .catch((error) => {
      console.log(error);
      alert("not authorized");
      window.location.href = "/";
      return [];
    });
}
async function putData(url, body) {
    return await axios
      .put(url, body, { headers: authHeader() })
      .then((res) => {
        return res.status;
      })
      .catch((error) => {
        console.log(error);
        alert("not authorized");
        window.location.href = "/";
        return [];
      });
  }
async function postDateWithImg(url, data, img) {
  var bodyFormData = new FormData();

  bodyFormData.append("name", data.name);
  bodyFormData.append("court.jpg", img);
  axios({
    method: "post",
    url: url,
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data", ...authHeader() },
  });
}
const FetchData = {
  getData,
  postData,
  postDateWithImg,
  putData
};

export default FetchData;
