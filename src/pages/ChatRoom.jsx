import React, { useState } from 'react'
import { firebaseService } from '../services/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { ChatMessage } from '../components/chat-room/ChatMessage'

import { RiLogoutCircleLine } from "react-icons/ri";



export const ChatRoom = () => {

    const messagesRef = firebaseService.firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)

    const [messages] = useCollectionData(query, { idField: 'id' })

    const [formValue, setFormValue] = useState('')

    const sendMessage = async (e) => {

        e.preventDefault()
        const { uid, photoURL } = firebaseService.auth.currentUser

        await messagesRef.add({
            text: formValue,
            createdAt: firebaseService.firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('')
    }

    return (
        <main className="chat-room-page">

            <div className="chat-room">
                <div className="chat-room-side-nav">
                    <div className="logo-dot"></div>
                    <button className="logout-btn" onClick={() => firebaseService.auth.signOut()}>
                        <RiLogoutCircleLine />
                    </button>
                </div>
                <div className="chat-room-side-rooms">
                    <h2>Chat Rooms</h2>
                </div>

                <div className="chat-room-top">
                    <h2>Your Room</h2>
                </div>

                {/* <div className="">
                    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                </div>
                <form onSubmit={sendMessage}>
                    <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                    <button type='submit'>Send</button>
                </form> */}
            </div>
        </main>
    )
}
