import React, { useState, useRef } from 'react'
import { firebaseService } from '../services/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { ChatMessage } from '../components/chat-room/ChatMessage'

import { RiLogoutCircleLine, RiMessage3Line } from "react-icons/ri";



export const ChatRoom = () => {

    const messagesRef = firebaseService.firestore.collection('messages')

    const query = messagesRef.orderBy('createdAt').limit(25)

    const [messages] = useCollectionData(query, { idField: 'id' })

    const [formValue, setFormValue] = useState('')
    const scrollDownRef = useRef()

    const sendMessage = async (e) => {

        e.preventDefault()
        const { displayName, uid, photoURL } = firebaseService.auth.currentUser

        if (formValue.length > 0) {

            await messagesRef.add({
                text: formValue,
                createdAt: firebaseService.firebase.firestore.FieldValue.serverTimestamp(),
                displayName,
                uid,
                photoURL
            })
            setFormValue('')

            scrollDownRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }


    return (
        <main className="chat-room-page">

            <div className="chat-room">

                <div className="side-nav-container">
                    <div className="chat-room-side-nav">
                        <div className="logo-dot"></div>
                        <button className="logout-btn" onClick={() => firebaseService.auth.signOut()}>
                            <RiLogoutCircleLine />
                        </button>
                    </div>
                    <div className="chat-room-side-rooms">
                        <h2>Chat Rooms</h2>
                    </div>
                </div>

                <div className="chat-content-container">

                    <div className="chat-room-top">
                        <h2>Your Room</h2>
                    </div>
                    <div className="chat-messages-container">
                        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

                        <div ref={scrollDownRef}></div>
                    </div>
                    <form className="message-form-container" onSubmit={sendMessage}>
                        <input placeholder='Write a reply' value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                        <button type='submit'> <RiMessage3Line /> Send</button>
                    </form>
                </div>
            </div>
        </main>
    )
}
