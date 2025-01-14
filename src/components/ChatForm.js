import { HiPaperAirplane } from 'react-icons/hi';
import { useRef } from 'react';

function ChatForm( { setChatHistory, chatHistory, generateBotResponse } ) {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = '';

        setChatHistory((history) => [...history, { role: 'user', text: userMessage }]);

        setTimeout(() => {
            setChatHistory((history) => [...history, { role: 'bot', text: 'Thinking...' }]);

            generateBotResponse([...chatHistory, { role: "user", text: `Using the details provided above, please address this query: ${userMessage}` }]);
        }, 500);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" placeholder="Ask ChatBot..." />
            <button id="sendBtn" className="sendButton">
                <HiPaperAirplane />
            </button>
        </form>
    );
}

export default ChatForm;