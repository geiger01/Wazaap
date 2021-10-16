import React from 'react'
import { firebaseService } from '../../services/firebase'
import { EpochToDate } from '../../services/utils'

export const ChatMessage = (props) => {

    const { text, uid, photoURL, createdAt, displayName } = props.message
    const messageClass = uid === firebaseService.auth.currentUser.uid ? 'sent' : 'received'

    return (

        <div className={`message ${messageClass}`}>

            <div className="message-content">
                <p>{text}</p>
            </div>
            <div className="message-details">
                <img src={photoURL} alt="" />
                <p>{messageClass === 'sent' ? 'You' : displayName}</p>
                <p className="time-sent">{EpochToDate(createdAt?.seconds)}</p>
            </div>
        </div>
    )
}
