import { useEffect } from "react";
import axios from "axios";

export default function FetchData() {
  const fetchData = () => {
    const qs = require("qs");
    let data = qs.stringify({});

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://dev193198.service-now.com/api/x_934462_alpha_tel/alpha_telecom",
      headers: {
        Authorization:
          "Bearer yYHf60E4l2ExCS6g8Lky6OvFAXbtxwihAO2FsQDiE1R1A2WwK4shbL_18aJzeVQGn1Co18j7Bstd4xw6Fnr3aA",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
}
