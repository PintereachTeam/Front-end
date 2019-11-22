import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    "Content-Type": "application/json",

    headers: {
      Authorization: token
    }
  });
<<<<<<< HEAD:src/utils/axiosWithAuth.js
};
=======
};
export default axiosWithAuth;
>>>>>>> adcc16db0dd16fb20a5c6aca201bae42856fd860:pintereach/src/utils/axiosWithAuth.js
