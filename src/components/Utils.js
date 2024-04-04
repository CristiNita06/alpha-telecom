import axios from "axios";

// Internals

//Sets the visibility of Token Popup to true / false
const tokenPopupVisibility = (setActiveToken, value) => {
  setActiveToken(value);
};

// Externals

//Update the token
export const updateToken = (setToken, value) => {
  setToken(value);
};
export const fetchRecord = (token, recordNumber, setRecordData) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url:
      "https://dev193198.service-now.com/api/x_934462_alpha_tel/alpha_telecom/" +
      recordNumber,
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data.result));
      setRecordData(response.data.result[0]);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const fetchAllRecords = (token, setActiveToken, setRecords) => {
  const qs = require("qs");
  let data = qs.stringify({});

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://dev193198.service-now.com/api/x_934462_alpha_tel/alpha_telecom",
    headers: {
      Authorization: "Bearer " + token,
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setRecords(response.data.result);
    })
    .catch((error) => {
      console.log(error);
      tokenPopupVisibility(setActiveToken, true);
    });
};
export const createRecord = (token, setActiveToken, setRecords) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://dev193198.service-now.com/api/x_934462_alpha_tel/alpha_telecom",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      tokenPopupVisibility(setActiveToken, false);
      fetchAllRecords(token, setActiveToken, setRecords);
    })
    .catch((error) => {
      console.log(error);
      tokenPopupVisibility(setActiveToken, true);
    });
};
