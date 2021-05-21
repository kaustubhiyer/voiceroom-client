import React from "react";
import { Container } from "react-bootstrap";
import RoomCard from "./RoomCard";

export default function Dashboard() {
  const rooms = [
    { id: 23284, name: "First Room", description: "lorem ipsum..." },
    { id: 23284, name: "First Room", description: "lorem ipsum..." },
    { id: 23284, name: "First Room", description: "lorem ipsum..." },
  ];
  return (
    <Container className="d-flex flex-column py2">
      <div className="ma2 f2 tl">
        Welcome to VoiceRoom, Kaustubh! See available rooms here:
      </div>
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        {rooms.map((room) => {
          return <RoomCard room={room} />;
        })}
      </div>
    </Container>
  );
}
