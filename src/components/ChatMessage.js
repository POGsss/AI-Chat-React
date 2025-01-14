import BotIcon from "./BotIcon";

function ChatMessage({ chat }) {
    return (
        !chat.hideInChat && (
            <div className={`chatBodyMessage ${chat.role === "bot" ? "bot" : "user"}`}>
                {chat.role === "bot" && <BotIcon />}
                <p dangerouslySetInnerHTML={{ __html: chat.text }}></p>
            </div>
        )
    );
}

export default ChatMessage;