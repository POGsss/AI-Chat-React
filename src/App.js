import React from "react";
import Chat from "./components/Chat";
import Menu from "./components/Menu";
import BlurBlob from "./components/BlurBLob";
import { botPersonality } from "./botPersonality";
import { useEffect, useRef, useState } from "react";
const { GoogleGenerativeAI } = require("@google/generative-ai");

function App() {
  const chatBodyRef = useRef();
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "bot",
      text: botPersonality,
    },
  ]);

  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [...prev.filter((msg) => msg.text !== "Thinking..."), { role: "bot", text, isError }]);
    };

    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
      const prompt = history.map(({ role, text }) => `${role}: ${text}`).join("\n");
      const result = await model.generateContent(prompt);
      let apiResponseText = result.response.text().replace(/\*\*(.*?)\*\*/g, "$1");
      apiResponseText = apiResponseText.replace(/\n/g, "<br>");

      // Formating Code Responses
      apiResponseText = apiResponseText.replace(/```/g, (match, offset, string) => {
        return (string.lastIndexOf("```", offset - 1) === -1) ? "<pre><code>" : "</code></pre>";
      });

      // Remove Prefix
      if (apiResponseText.startsWith("Bot:")) {
        apiResponseText = apiResponseText.replace("Bot:", "").trim();
      }

      updateHistory(apiResponseText);
      console.log(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });

    const checkScreenSize = () => {
      const menu = document.querySelector('.menuContainer');
      if (window.matchMedia("(max-width: 900px)").matches) {
        if (menu.classList.contains('active')) {
          menu.classList.remove('active');
        }
      } else {
        if (!menu.classList.contains('active')) {
          menu.classList.add('active');
        }
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [chatHistory]);

  return (
    <div className="App">
      <BlurBlob />
      <div className="container">
        <Menu />
        <Chat
          chatBodyRef={chatBodyRef}
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          generateBotResponse={generateBotResponse}
        />
      </div>
    </div>
  );
}

export default App;