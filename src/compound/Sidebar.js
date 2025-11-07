import React from "react";

export default function Sidebar() {
  const contacts = ["John", "Emma", "David", "Sarah"];

  return (
    <div className="sidebar">
      <h2>Chats</h2>
      <ul>
        {contacts.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
