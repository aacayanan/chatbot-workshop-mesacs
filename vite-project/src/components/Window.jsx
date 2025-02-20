import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Window.css';

function Window(props) {
    return (
        <div className='window-container'>
            <div className='window'>
                meow
            </div>
        </div>
    );
}

Window.propTypes = {};

export default Window;