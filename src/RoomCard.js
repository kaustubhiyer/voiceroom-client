import React from "react";

export default function RoomCard({ room }) {
  return (
    <div
      className="w-60 ma2 pa2 d-flex flex-row m-2 align-items-center ba bw1 br-1 b--light-grey"
      style={{ cursor: "pointer" }}
    >
      <div className="mx-3">
        <div>{room.name}</div>
        <div className="text-muted">{room.description}</div>
      </div>
    </div>
  );
}
