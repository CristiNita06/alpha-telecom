import { useRef } from "react";

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
        <button
          onClick={() => {
            updateToken(setToken, inputToken.current.value);
            setActiveToken(false);
          }}
        >
          Refresh token
        </button>
      </div>
    </div>
  );
}
