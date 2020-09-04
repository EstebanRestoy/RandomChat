import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [tag, setTag] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="JoinPage">
      <h1>JOIN</h1>
      <div>
        <input
          placeholder=""
          className="joinInput"
          type="text"
          onChange={(event) => setTag(event.target.value)}
        ></input>
      </div>
      <div>
        <input
          placeholder=""
          className="joinInput"
          type="text"
          onChange={(event) => setRoom(event.target.value)}
        ></input>
      </div>
      <Link
        onClick={(event) => (!tag || !room ? event.preventDefault() : null)}
        to={`/room?tag=${tag}&room=${room}`}
      >
        <button className="submit mt-20" type="submit">
          Find a room
        </button>
      </Link>
    </div>
  );
};

export default Join;
