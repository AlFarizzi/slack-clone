// Hooks
import { useParams } from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
// Hooks

// Icon
import {DataContainer} from './util/DataLayer'
import {HiOutlineHashtag} from 'react-icons/hi'
// Icon

// Util
import db from './util/firebase'
import firebase from 'firebase'
// Util

// Style
import './Chat.css'
// Style

function Chat(props) {
    const contextt = useContext(DataContainer)
    const {roomId} = useParams()
    const [chats, setChats] = useState([])
    const [message, setMessage] = useState("")
    const [roomDetails, setRoomDetails] = useState([])

    const sendHandler = (e) => {
        e.preventDefault();
        if(message) {
            db.collection("rooms").doc(roomId).collection("chats").add({
                message : message,
                picture : contextt.state.picture,
                sender : contextt.state.name,
                timestamp : firebase.firestore.FieldValue.serverTimestamp()
            })
            setMessage("")
        } else {
            alert("Masukan Pesan Anda");
        }
    }
    useEffect(() => {
        db.collection("rooms").doc(roomId).collection("chats").orderBy("timestamp").onSnapshot(snapshot => (
            setChats(
                snapshot.docs.map(doc => (doc.data()))
            )
        ))
        db.collection("rooms").doc(roomId).onSnapshot(snapshot => {
            setRoomDetails(snapshot.data())
        })
    }, [roomId]);
    return (
        <div className="chat__container">
            <h2 className="room__name"><HiOutlineHashtag/>{`${roomDetails?.name}`}</h2>
            <hr/>
            <br/>
            {
                chats.map((chat,key) => {
                    return(
                        <div key={key} className="chat__box">
                            <img src={chat.picture} alt="profile" className="sender__picture" />
                            <span className="sender__name">{chat.sender}</span>
                            <p className="message">{chat.message}</p>
                        </div>
                    )
                })
            }
            <div className="send__message">
                <input type="text" className="chat__input" value={message} onChange={(e) => {setMessage(e.target.value)}}/>
                <button className="send__button" onClick={sendHandler}>Send</button>
            </div>
        </div>
    );
}

export default Chat;