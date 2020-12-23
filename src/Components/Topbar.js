// Hooks
import {useContext} from 'react'
// Hooks

// utility
import './Topbar.css'
import {DataContainer} from './util/DataLayer'
// utility

function Topbar(props) {
    const contextt = useContext(DataContainer)
    return (
        <div className="top__bar">
            <img className="profile__picture" src={`${contextt.state.picture}`} alt="profile"/>
        </div>
    );
}

export default Topbar;