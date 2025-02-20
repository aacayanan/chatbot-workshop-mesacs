import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Label.css';

Label.propTypes = {

};

function Label(props) {
    return (
        <div>
            <div className='label-text'>
                AI Chat Bot
            </div>
        </div>
    );
}

export default Label;