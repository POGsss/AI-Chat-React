import whiteBotLogo from "./assets/whiteBotLogo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="chatContainer">
          <div className="chatHeader">
            <div className="chatHeaderTitle">
              <img src={whiteBotLogo} alt="" />
              <h1>Chat Bot</h1>
            </div>
            <div className="chatHeaderActions">
              
            </div>
          </div>
          <div className="chatBody">
            
          </div>
          <div className="chatFooter">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
