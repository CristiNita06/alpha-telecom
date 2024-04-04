import "./styles/Home.css";

import { createRecord, updateToken, fetchAllRecords } from "./Utils";
import { useState, useEffect } from "react";
import RefreshToken from "./RefreshToken";
import Records from "./Records";
import Button from "react-bootstrap/Button";

export default function Home() {
  //storing token
  const [token, setToken] = useState("");

  //storing list of records received from DB
  const [records, setRecords] = useState("");

  //boolean to check if there is active token
  const [activeToken, setActiveToken] = useState(false);

  useEffect(() => {
    fetchAllRecords(token, setActiveToken, setRecords);
  }, [token]);
  return (
    <div className="AppWrapper">
      {/* {activeToken && (
        <RefreshToken
          updateToken={updateToken}
          setToken={setToken}
          setActiveToken={setActiveToken}
        />
      )} */}
      {/* <Button
        size="sm"
        onClick={() => {
          createRecord(token, setActiveToken, setRecords);
        }}
      >
        Create Record
      </Button> */}
      <header className="header">
        <button
          onClick={() => {
            console.log(localStorage.test);
            localStorage.setItem("test", 1);
            console.log(localStorage.test);
          }}
        >
          check
        </button>
      </header>
      {records && <Records records={records} token={token} />}
    </div>
  );
}
