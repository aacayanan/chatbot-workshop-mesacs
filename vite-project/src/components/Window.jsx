import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Window.css';
import Label from './Label';

function Window(props) {
    return (
        <div className='window-container'>
            <div className='window'>
                <Label />
            </div>
        </div>
    );
}

Window.propTypes = {};

export default Window;