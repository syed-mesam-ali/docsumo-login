//-------------------- used for getting login details from server ----------------
import axios from "axios";

const URL = "https://apptesting.docsumo.com/api/v1/eevee/login/";

const fetchUserDetails = (email, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post(URL, {
        email: email,
        password: password,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};
export default fetchUserDetails;
