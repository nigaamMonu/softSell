

import React, { useState } from "react";
import { FaRobot } from "react-icons/fa"; 

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", message: "Hello! How can I assist you today?" },
  ]);

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (userMessage.trim() === "") return;

   
    setChatMessages([
      ...chatMessages,
      { sender: "user", message: userMessage },
    ]);


    setTimeout(() => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          message: mockBotResponse(userMessage),
        },
      ]);
    }, 1000);

    setUserMessage(""); 
  };

  
  const mockBotResponse = (userInput) => {
    if (userInput.toLowerCase().includes("license")) {
      return "To sell your license, simply upload it on our platform to get a quote!";
    } else if (userInput.toLowerCase().includes("how")) {
      return "You can upload your license, get a valuation, and receive payment. It's that simple!";
    } else {
      return "I'm here to help! Let me know how I can assist you.";
    }
  };

  return (
    <div
  className={`fixed z-50 bottom-5 right-5 ${
    isChatOpen ? "w-[90%] sm:w-[300px]" : "w-[60px]"
  } transition-all duration-300`}
>
  {/* Chat toggle button */}
  <div
    className="bg-blue-600 text-white p-3 rounded-full cursor-pointer shadow-lg flex items-center justify-center"
    onClick={handleToggleChat}
  >
    <FaRobot className="text-2xl" />
  </div>

  {/* Chatbox */}
  {isChatOpen && (
    <div className="mt-3 bg-white p-4 rounded-lg shadow-xl w-full max-h-[70vh] flex flex-col">
      {/* Messages container */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg text-sm ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              {msg.message}
            </div>
          </div>
        ))}
      </div>

      {/* Input box */}
      <div className="flex mt-3">
        <input
          type="text"
          className="w-full p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type a message"
          value={userMessage}
          onChange={handleMessageChange}
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  )}
</div>

  );
};

export default ChatWidget;
