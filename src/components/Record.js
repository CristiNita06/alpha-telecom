// import { useParams } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { fetchRecord } from "./Utils";
import { useEffect } from "react";

export default function Record() {
  const location = useLocation();
  const { state } = location;
  console.log(state);

  useEffect(() => {
    fetchRecord(state[1]);
  }, []);

  const id = useParams();
  return (
    <div>
      record {id.id} {state[0]}
    </div>
  );
}
