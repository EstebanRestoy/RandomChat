import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
const ENDPOINT = "localhost:5000";
let socket;

const Room = ({ location }) => {
  const [tag, setTag] = useState("");
  const [room, setRoom] = useState("");
  useEffect(() => {
    const { tag, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setTag(tag);
    setRoom(room);

    socket.emit("join", { tag, room });
  }, [ENDPOINT, location.search]);
  return <h1> Room : XX </h1>;
};

export default Room;
