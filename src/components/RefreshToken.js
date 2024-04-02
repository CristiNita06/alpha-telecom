import { useRef } from "react";
import Button from "react-bootstrap/Button";

export default function RefreshToken({
  updateToken,
  setToken,
  setActiveToken,
}) {
  const inputToken = useRef();

  return (
    <div>
      <div>
        <input type="text" ref={inputToken}></input>
        <Button
          size="sm"
          onClick={() => {
            updateToken(setToken, inputToken.current.value);
            setActiveToken(false);
          }}
        >
          Refresh token
        </Button>
      </div>
    </div>
  );
}
