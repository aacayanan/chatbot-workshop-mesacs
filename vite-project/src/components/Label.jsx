import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Label.css';
import SendButton from '../assets/sendbutton.png';

Label.propTypes = {

};

function Label(props) {
    const handleSendClick = () => {
        const textBox = document.querySelector('.text-box');
        const message = textBox.value;
        if (message !== '') {
            console.log(message);
            textBox.value = '';
        }
    };

    return (
        <div>
            <div className='label-container'>
                <div className='label-text'>
                    AI Chat Bot
                </div>
                <div className='info-button-container'>
                    <a className='info-button'>i</a>
                </div>
            </div>
            <div>
                <div className='text-box-container'>
                    <input type='text' className='text-box' placeholder='Type a message...' />
                </div>
                <div className='send-button-container'>
                    <img src={SendButton} alt='Send' className='send-button' onClick={handleSendClick}/>
                </div>
            </div>
        </div>
    );
}

export default Label;