import './App.css';
import { useState, useEffect, useRef } from 'react';
import responseJSON from './botAnswer.json';

function ChatMessage({message, isUser}) {
    const messageClass = isUser ? 'user-msg' : 'bot-msg';
    return <div className={`message ${messageClass}`}>{message}</div>;
}

function ChatBot() {
    const [messages, setMessage]= useState([]);
    const endMessage = useRef(null);

    const scrollToBottom = () => {
        endMessage.current?.scrollIntoView({ behavior: "smooth"});
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const searchAnswer = (userInput) => {
        const toLower = userInput.toLowerCase();

        for (let responseObj of responseJSON.responses) {
            if (responseObj.keywords.some(keyword => toLower.includes(keyword))) {
                return responseObj.response;
            }
        }
        return "Sorry, I don't understand that.";
    };

    const sendMessage = (e) => {
        e.preventDefault();
        const userInput = e.target.elements.messageInput.value;
        if (!userInput.trim()) return;

        const userMessage = { text: userInput, isUser: true};
        setMessage(messages => [...messages, userMessage]);

        const botAnswer = searchAnswer(userInput);
        const botMessage = { text: botAnswer, isUser: false};
        setTimeout(() => setMessage(messages => [...messages, botMessage]), 500);

        e.target.elements.messageInput.value = '';
    };

    return (
        <div className='chatbot'><div id='ask'>Ask Me</div>
            <div className='messages'>
                {messages.map((msg, index) => (
                    <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
                ))}
                <div ref={endMessage} />
            </div>
            <form onSubmit={sendMessage}>
                <input name='messageInput' type='text' id='chat' placeholder='Type your query...' autoComplete='off' />
                <button type='submit' id='send'>Send</button>
            </form>
        </div>
    );

}

export default ChatBot;