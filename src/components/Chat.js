import { HiMenuAlt3, HiPaperAirplane } from "react-icons/hi";
import BotIcon from "./BotIcon";

function Chat() {
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
          <div className="chatBody">
            <div className="chatBodyMessage bot">
              <BotIcon />
              <p>Hi! I'm ChatBot. How can I help you today?</p>
            </div>
            <div className="chatBodyMessage user">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero at aperiam est suscipit perferendis neque atque consequatur obcaecati consectetur, culpa ducimus aliquid, non vel beatae autem assumenda maiores odio dicta?</p>
            </div>
          </div>
          <div className="chatFooter">
            <input type="text" placeholder="Ask ChatBot..." />
            <button id="sendBtn" className="sendButton">
              <HiPaperAirplane />
            </button>
          </div>
        </div>
    );
}

export default Chat;