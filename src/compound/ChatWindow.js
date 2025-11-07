import React, { useEffect, useRef } from "react";

export default function ChatWindow({ messages }) {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`message ${msg.sender === "You" ? "sent" : "received"}`}
        >
          <p>{msg.text}</p>
        </div>
      ))}
      <div ref={chatEndRef} />
    </div>
  );
}
