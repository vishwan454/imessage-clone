import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone'
import React from 'react';
import { useState } from 'react';
import './Chat.css'

const Chat = () => {
    const [input,setInput] = useState('')
    const sendMessage = (e) =>{
        e.preventDefault()


        setInput('')
    }
    console.log(input)
    return ( 
        <div className="chat">
            <div className="chat__header">
                <h4>
                   To: <span className='chat__name'> Imessage</span>
                </h4>
                <strong>details</strong>
            </div>
            <div className="chat__messages">
                <h2>im a message</h2>
            </div>
            <div className="chat__input">
                <form >
                    <input placeholder='Message' type="text" value={input} onChange={e=>setInput(e.target.value)}/>
                    <button onClick={sendMessage}>send message</button>
                </form>
                <IconButton>
                    <MicNoneIcon className='chat__mic'/>
                </IconButton>
            </div>
        </div> 
    );
}
 
export default Chat;