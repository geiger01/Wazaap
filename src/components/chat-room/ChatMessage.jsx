import React from 'react'
import { firebaseService } from '../../services/firebase'

export const ChatMessage = (props) => {

    const { text, uid, photoURL } = props.message

    const messageClass = uid === firebaseService.auth.uid ? 'sent' : 'received'
    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} alt="" />
            <p>{text}</p>
        </div>
    )
}
