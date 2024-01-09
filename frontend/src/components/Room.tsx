import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Socket, io } from "socket.io";

const Room = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");

  useEffect(() => {
    // logic to init user to the room
  }, [name]);

  return <div>Hi {name}</div>;
};

export default Room;
