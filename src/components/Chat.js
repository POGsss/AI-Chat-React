import whiteBotLogo from "../assets/whiteBotLogo.png";
import { HiMenuAlt3, HiPaperAirplane } from "react-icons/hi";

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
              <img src={whiteBotLogo} alt="" />
              <h1>ChatBot</h1>
            </div>
            <div className="chatHeaderActions">
              <button onClick={sideToggle} id="actionBtn" className="actionButton">
                <HiMenuAlt3 />
              </button>
            </div>
          </div>
          <div className="chatBody">
              
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