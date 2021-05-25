import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Message.css'


const Message = forwardRef(({id , contents : {
    timestamp,displayName,email,photo,uid,message
},},ref) => {
    const user = useSelector(selectUser)
    return ( 
        <div ref={ref} className={`message ${user.email === email && 'message__sender'}`}>
            <Avatar />
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleDateString()}</small>
        </div>
     );
})
 
export default Message;