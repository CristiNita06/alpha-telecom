// import { useParams } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { fetchRecord } from "./Utils";
import { useEffect, useRef, useState } from "react";
import "./styles/Record.css";

export default function Record() {
  const location = useLocation();
  const { state } = location;

  //sending in fetchRecord function to have record data
  const [recordData, setRecordData] = useState("");

  //coming from Records component
  const record = useParams();

  //Defining useRefs for handling fields data
  const _recordNumber = useRef();
  const _recordShortDescription = useRef();
  // const _recordNumber = useRef();
  // const _recordNumber = useRef();

  //prop coming from Records Component
  let token = state[1];

  useEffect(() => {
    fetchRecord(token, record.number, setRecordData);
    console.log(recordData);
  }, []);

  return (
    <div className="fieldWrapper">
      <button
        onClick={() => {
          console.log(_recordNumber.current.value);
        }}
      >
        Save
      </button>
      <label>
        Record number: <input ref={_recordNumber}></input>
      </label>
      <label>
        Short Description: <input></input>
      </label>
      <label>
        Record number: <input></input>
      </label>
      <label>
        Record number: <input></input>
      </label>
    </div>
  );
}
