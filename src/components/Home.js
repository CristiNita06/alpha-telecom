import "./styles/Home.css";

import { createRecord, updateToken, fetchAllRecords } from "./Utils";
import { useState, useEffect } from "react";
import RefreshToken from "./RefreshToken";
import Records from "./Records";
import Button from "react-bootstrap/Button";

export default function Home() {
  const [token, setToken] = useState("");
  const [records, setRecords] = useState("");
  const [activeToken, setActiveToken] = useState(false);

  useEffect(() => {
    fetchAllRecords(token, setActiveToken, setRecords);
  }, [token]);
  return (
    <div className="AppWrapper">
      {activeToken && (
        <RefreshToken
          updateToken={updateToken}
          setToken={setToken}
          setActiveToken={setActiveToken}
        />
      )}
      <Button
        size="sm"
        onClick={() => {
          createRecord(token, setActiveToken, setRecords);
        }}
      >
        Create Record
      </Button>
      {records && <Records records={records} token={token} />}
    </div>
  );
}
