// import React, { useState } from 'react';
// import axios from 'axios';

// const Chatbox = () => {
//     const [userInput, setUserInput] = useState('');
//     const [chatMessages, setChatMessages] = useState([]);

//     const handleUserInput = (event) => {
//         setUserInput(event.target.value);
//     };

//     const handleSendMessage = async () => {
//         if (userInput.trim() !== '') {
//             addUserMessage(userInput);
//             try {
//                 const response = await axios.post(
//                     'https://api.openai.com/v1/engines/davinci-codex/completions',
//                     {
//                         prompt: userInput,
//                         max_tokens: 150,
//                     },
//                     {
//                         headers: {
//                             'Content-Type': 'application/json',
//                             Authorization: 'Bearer YOUR_OPENAI_API_KEY',
//                         },
//                     }
//                 );
//                 addBotMessage(response.data.choices[0].text.trim());
//             } catch (error) {
//                 console.error('Error fetching response from OpenAI:', error);
//             }
//             setUserInput('');
//         }
//     };

//     const handleKeyPress = (event) => {
//         if (event.key === 'Enter') {
//             handleSendMessage();
//         }
//     };

//     const addUserMessage = (message) => {
//         setChatMessages([...chatMessages, { text: message, isUser: true }]);
//     };

//     const addBotMessage = (message) => {
//         setChatMessages([...chatMessages, { text: message, isUser: false }]);
//     };

//     return (
//         <div>
//             {/* Render chat messages */}
//             <div>
//                 {chatMessages.map((message, index) => (
//                     <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
//                         {message.text}
//                     </div>
//                 ))}
//             </div>
//             {/* Input field and send button */}
//             <div>
//                 <input type="text" value={userInput} onChange={handleUserInput} onKeyPress={handleKeyPress} />
//                 <button onClick={handleSendMessage}>Send</button>
//             </div>
//         </div>
//     );
// };

// export default Chatbox;

import React, { useState } from 'react';

const Chatbox = () => {
    const [isChatboxOpen, setIsChatboxOpen] = useState(true);
    const [userInput, setUserInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    const toggleChatbox = () => {
        setIsChatboxOpen(!isChatboxOpen);
    };

    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };

    const handleSendMessage = () => {
        if (userInput.trim() !== '') {
            addUserMessage(userInput);
            respondToUser(userInput);
            setUserInput('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    const addUserMessage = (message) => {
        setChatMessages([...chatMessages, { text: message, isUser: true }]);
    };

    const addBotMessage = (message) => {
        setChatMessages([...chatMessages, { text: message, isUser: false }]);
    };

    const respondToUser = (userMessage) => {
        // Replace this with your chatbot logic
        setTimeout(() => {
            addBotMessage('This is a response from the chatbot.');
        }, 500);
    };

    return (
        <div>
            {isChatboxOpen && (
                <div className="fixed bottom-16 right-4 w-96">
                    {/* Chatbox HTML structure */}
                </div>
            )}
            <button
                id="open-chat"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
                onClick={toggleChatbox}
            >
                {/* Button content */}
            </button>
        </div>
    );
};

export default Chatbox;



