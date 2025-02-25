import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Label.css';
import SendButton from '../assets/sendbutton.png';

Label.propTypes = {

};

function Label(props) {
    const [message, setMessage] = useState('');
    const textAreaRef = useRef(null);

    useEffect(() => {
        adjustTextAreaHeight();
    }, [message]); // Adjust height every time message updates

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    }

    const adjustTextAreaHeight = () => {
        const textArea = textAreaRef.current;
        if (textArea) {
            textArea.style.height = 'auto'; // Reset height to recalculate
            textArea.style.height = `${textArea.scrollHeight}px`; // Adjust height based on content
        }
    }

    const handleSendClick = () => {
        console.log(message);
        setMessage('');
        adjustTextAreaHeight(); // Reset height after sending message
    };

    return (
        <div className='main-container'>
            <div className='label-container'>
                <div className='label-text'>
                    AI Chat Bot
                </div>
                <div className='info-button-container'>
                    <a className='info-button' href='https://github.com/aacayanan/chatbot-workshop-mesacs'>i</a>
                </div>
            </div>
            <div className='text-box-area-container'>
                <div className='text-box-container'>
                    {/*<input type='text' className='text-box' placeholder='Type a message...' />*/}
                    <textarea
                        ref={textAreaRef}
                        className='text-box'
                        placeholder='Type a message...'
                        value={message}
                        onChange={handleInputChange}
                        rows={1} // Start with a single row
                    />
                </div>
                <div className='send-button-container'>
                    <img src={SendButton} alt='Send' className='send-button' onClick={handleSendClick}/>
                </div>
            </div>
        </div>
    );
}

export default Label;