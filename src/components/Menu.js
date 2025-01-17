import whiteUserLogo from "../assets/whiteUserLogo.png";
import helpWhiteLogo from "../assets/helpWhiteLogo.png";
import aboutWhiteLogo from "../assets/aboutWhiteLogo.png";
import creditWhiteLogo from "../assets/creditWhiteLogo.png";

function Menu({ setOpen, setTitle, setDescription }) {
  const aboutClick = () => {
    setOpen(true);
    setTitle("About");
    setDescription("This AI-powered chatbot assistant, developed by Frankie B. Pinat, is designed to help users with tasks such as programming, creative work, and organization through intuitive and efficient interactions.");
  }
  const helpClick = () => {
    setOpen(true);
    setTitle("Help");
    setDescription("To use the chatbot, simply type your question or task into the chatbox, and it will provide relevant assistance. It can help with programming, creative design, productivity, and general queries.");
  }
  const creditClick = () => {
    setOpen(true);
    setTitle("Credits");
    setDescription("This project was built using Gemini API for AI functionality, React Framework for the user interface, Node.js for server operations, Figma for design, VS Code for development, and GitHub for version control.");
  }

  return (
    <div className="menuContainer active">
      <div className="menuHeader">
        <div className="menuHeaderTitle">
          <img src={whiteUserLogo} alt="" />
          <p>Guest</p>
        </div>
      </div>
      <div className="menuBody">
        <div onClick={aboutClick} className="menuBodyItems">
          <img src={aboutWhiteLogo} alt="" className="menuBodyItemsIcons active" />
          <p>About</p>
        </div>
        <div onClick={helpClick} className="menuBodyItems">
          <img src={helpWhiteLogo} alt="" className="menuBodyItemsIcons active" />
          <p>Help</p>
        </div>
        <div onClick={creditClick} className="menuBodyItems">
          <img src={creditWhiteLogo} alt="" className="menuBodyItemsIcons active" />
          <p>Credits</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;