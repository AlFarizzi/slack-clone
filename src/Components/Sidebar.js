// Hooks
import {Link} from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
// Hooks

// Utility
import db from './util/firebase'
import {DataContainer} from './util/DataLayer'
import './Sidebar.css'
// Utility

// Icons
import {AiOutlineInbox,AiOutlineAppstore} from 'react-icons/ai'
import {BiEnvelopeOpen,BiMessageDetail, BiBookmark, BiPlus} from 'react-icons/bi'
import {HiUsers,HiOutlineHashtag} from 'react-icons/hi'
import {ImFilesEmpty} from 'react-icons/im'
import {IoIosArrowDown} from 'react-icons/io'
import {RiRadioButtonLine} from 'react-icons/ri'
// Icons

function Sidebar(props) {
    const [channels ,setChannels] = useState([])
    const contextt = useContext(DataContainer)
    const addChannel = (e) => {
        e.preventDefault()
        let channel = prompt("Masukan Nama Channerl")
        if(channel) {
            db.collection("rooms").add({
                name : channel
            })
        } else {
            alert("Masukan Nama Channel Kamu")
        }
    }
    useEffect(() => {
        db.collection("rooms").onSnapshot(snapshot => {
            setChannels(
                snapshot.docs.map(doc => {
                    return(
                        {
                            id : doc.id,
                            name : doc.data().name
                        }
                    )
                })
            )
        })
    }, []);
    return (
        <div className="sidebar__container">
            <div className="sidebar__user-info">
    <span className="user__name">{contextt.state.name}</span>
                <span className="user__status"> <RiRadioButtonLine color={"#008000"} className="online__icon"/>Online</span>
            </div>
            <div className="menu__container">
                <ul className="menu__lists">
                    <li className="menu__item"><BiMessageDetail className="menu__icon"/> Threads</li>
                    <li className="menu__item"><AiOutlineInbox className="menu__icon"/> Mentions & Reactions</li>
                    <li className="menu__item"><BiEnvelopeOpen className="menu__icon"/> Saved Items</li>
                    <li className="menu__item"><BiBookmark className="menu__icon"/> Channel Browser</li>
                    <li className="menu__item"><HiUsers className="menu__icon"/> People & User Group</li>
                    <li className="menu__item"><AiOutlineAppstore className="menu__icon"/> Apps</li>
                    <li className="menu__item"><ImFilesEmpty className="menu__icon"/> File Browser </li>
                </ul>
                <div className="channels__container">
                        <span className="channel"><IoIosArrowDown className="menu__icon"/>Channels</span>
                    <ul className="menu__lists">
                        {
                            channels.map((channel, key) => (
                            <li key={key} className="menu__item channel__list"><Link to={`/room/${channel.id}`}className="channel__link"><HiOutlineHashtag className="menu__icon"/> {channel.name}</Link></li>
                            ))
                        }
                    </ul>
                    <span onClick={addChannel} className="channel add__channel"><BiPlus className="menu__icon"/>Add Channel</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;