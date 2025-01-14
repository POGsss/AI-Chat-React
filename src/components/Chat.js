import { HiMenuAlt3 } from "react-icons/hi";
import BotIcon from "./BotIcon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";

function Chat({ chatBodyRef, chatHistory, setChatHistory, generateBotResponse }) {
    const sideToggle = () => {
        const menu = document.querySelector('.menuContainer');
        const icons = document.querySelectorAll('.menuBodyItemsIcons');
        menu.classList.toggle('active');
        icons.forEach(icon => {
          icon.classList.toggle('active');
        });
    }

    return (
        <div className="chatContainer">
          <div className="chatHeader">
            <div className="chatHeaderTitle">
              <BotIcon />
              <h1>ChatBot</h1>
            </div>
            <div className="chatHeaderActions">
              <button onClick={sideToggle} id="actionBtn" className="actionButton">
                <HiMenuAlt3 />
              </button>
            </div>
          </div>
          <div ref={chatBodyRef} className="chatBody">
            <div className="chatBodyMessage bot">
              <BotIcon />
              <p>Hi! I'm ChatBot. How can I help you today?</p>
            </div>
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>
          <div className="chatFooter">
            <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
          </div>
        </div>
    );
}

export default Chat;