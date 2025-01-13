import whiteUserLogo from "../assets/whiteUserLogo.png";
import helpWhiteLogo from "../assets/helpWhiteLogo.png";
import aboutWhiteLogo from "../assets/aboutWhiteLogo.png";
import creditWhiteLogo from "../assets/creditWhiteLogo.png";

function Menu() {
    return (
        <div className="menuContainer active">
          <div className="menuHeader">
            <div className="menuHeaderTitle">
              <img src={whiteUserLogo} alt="" />
              <h1>Guest</h1>
            </div>
          </div>
          <div className="menuBody">
            <div className="menuBodyItems">
              <img src={aboutWhiteLogo} alt="" className="menuBodyItemsIcons active" />
              <p>About</p>
            </div>
            <div className="menuBodyItems">
              <img src={helpWhiteLogo} alt="" className="menuBodyItemsIcons active" />
              <p>Help</p>
            </div>
            <div className="menuBodyItems">
              <img src={creditWhiteLogo} alt="" className="menuBodyItemsIcons active" />
              <p>Credits</p>
            </div>
          </div>
        </div>
    );
}

export default Menu;