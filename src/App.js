import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createRecord, updateToken, fetchAllRecords } from "./components/Utils";
import { useState, useEffect } from "react";
import RefreshToken from "./components/RefreshToken";
import Records from "./components/Records";

function App() {
  const [token, setToken] = useState("");
  const [records, setRecords] = useState("");
  const [activeToken, setActiveToken] = useState(false);

  useEffect(() => {
    fetchAllRecords(token, setActiveToken, setRecords);
  }, [token]);

  return (
    <div className="App">
      {activeToken && (
        <RefreshToken
          updateToken={updateToken}
          setToken={setToken}
          setActiveToken={setActiveToken}
        />
      )}
      <button
        onClick={() => {
          createRecord(token, setActiveToken, setRecords);
        }}
      >
        Create Record
      </button>
      {records && <Records records={records} />}
    </div>
  );
}

export default App;
