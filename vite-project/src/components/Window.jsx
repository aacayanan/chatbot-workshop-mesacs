import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Window.css';
import Label from './Label';

function Window(props) {
    return (
        <div className='window-container'>
            <div className='window'>
                <Label/>
                <div className='footer'>
                    <div className='footer-text'>
                        Made with ❤️ by <a href='https://www.linkedin.com/in/aaroncayanan/'>Aaron Cayanan</a> for the SD
                        Mesa Computer Science Club
                    </div>
                </div>
            </div>
            {/*<div className='footer'>*/}
            {/*    <div className='footer-text'>*/}
            {/*        Made with ❤️ by <a href='https://www.linkedin.com/in/aaroncayanan/'>Aaron Cayanan</a> for the SD*/}
            {/*        Mesa Computer Science Club*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

Window.propTypes = {};

export default Window;