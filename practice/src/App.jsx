import './App.css'
import ChatMessage from "./ChatMessage.jsx";
import ChatIcon from './assets/icon.png'

function App() {
    return (
        <div className='chatbot-container'>
            <div className='chatbot-header'>
                <div className='chatbot-header-title'>Chatbot</div>
                <div className='hamburg'>
                    <div className='hamburg-line'></div>
                    <div className='hamburg-line'></div>
                    <div className='hamburg-line'></div>
                </div>
            </div>
            <div className='chatbot-messages-container'>
                <div className='message bot-message'>
                    {/*<ChatIcon />*/}
                    <p className='message-text'>Hi there. How can I help you today?</p>
                </div>
                <div className='message user-message'>
                    {/*<ChatIcon />*/}
                    <p className='message-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie.</p>
                </div>
            </div>
            <div className='chatbot-input-container'>
                <div className='chatbot-input-box'>
                    <input type='text' className='chatbot-input' placeholder='Ask anything...'/>
                    {/*lucide react*/}
                </div>
            </div>
        </div>
    )
}

export default App
