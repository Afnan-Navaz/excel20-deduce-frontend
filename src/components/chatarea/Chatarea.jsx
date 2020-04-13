import React from 'react';
import './Chatarea.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

function Chatarea(props) {
    return(
        <div id="chat-area">
            <FontAwesomeIcon onClick={() => props.toggle()} className='toggle-3' 
            icon = {faAngleLeft} />
            <h1 className="text-center text-white">chat</h1>
        </div>
    );
}

export default Chatarea;