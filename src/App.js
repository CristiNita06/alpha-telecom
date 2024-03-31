import "./App.css";
import { createRecord } from "./components/Utils";
import { useState, useRef } from "react";
import RefreshToken from "./components/RefreshToken";

function App() {
  const [token, setToken] = useState("");
  const [expiredToken, setExpiredToken] = useState(false);
  const inputToken = useRef();

  return (
    <div className="App">
      {expiredToken && (
        <div>
          <input type="text" ref={inputToken}></input>
          <button
            onClick={() => {
              setToken(inputToken.current.value);
              setExpiredToken(false);
            }}
          >
            Refresh token
          </button>
        </div>
      )}
      <button
        onClick={() => {
          createRecord(token, setExpiredToken);
        }}
      >
        Create Record
      </button>
    </div>
  );
}

export default App;
