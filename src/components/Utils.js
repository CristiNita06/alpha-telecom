import axios from "axios";

// Internals
const tokenPopupVisibility = (setExpiredToken, value) => {
  setExpiredToken(value);
};

// Externals

export const fetchRecord = () => {
  console.log("fetchRecord");
};
export const fetchAllRecords = () => {
  console.log("fetchAllRecords");
};
export const createRecord = (token, setExpiredToken) => {
  console.log(token);
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://dev193198.service-now.com/api/x_934462_alpha_tel/alpha_telecom",
    headers: {
      Authorization: "Bearer " + token,
      Cookie:
        "BIGipServerpool_dev193198=1031839498.46654.0000; JSESSIONID=E864B461D09A5774E54B92F60D6AAFED; glide_node_id_for_js=b8d81d7ffbc0004170612d76a9bca5ba0d7ecb90c270b99833633d407af7d3e4; glide_session_store=CB8C6E6C935942108B9930018BBA1046; glide_user_activity=U0N2M18xOlJsREF5SVpNOUFqSDEzY21wQTYvcVpwTTJrV1FFc3dkdVpjeUhhU1czSFk9OmRoRzlqUlR3M3h1ZEkwVUR6Z2w0UXlEa25Ibk0rVVhQa1pOOVdDRXZNOVU9; glide_user_route=glide.742b070584f469987eaa11af47d82c70",
    },
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      tokenPopupVisibility(setExpiredToken, false);
    })
    .catch((error) => {
      console.log(error);
      tokenPopupVisibility(setExpiredToken, true);
    });
};
