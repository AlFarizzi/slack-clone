import {auth, provider} from './util/firebase'
import {DataContainer} from './util/DataLayer'
import { useContext } from 'react'

// Styles
import './Login.css';
// Styles

function Login(props) {
    const contextt = useContext(DataContainer)
    const loginHandler = (e) => {
        e.preventDefault()
        auth.signInWithPopup(provider)
        .then(result => {
            contextt.setData(result.additionalUserInfo.profile)
        })
        .catch(error => {console.log(error.message)})
    }
    return (
        <div className="login__container">
            <div className="login__box">
                <img className="slack__logo" src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""/>
                <button className="login__button" onClick={loginHandler}>Sign In With Google</button>
            </div>
        </div>
    );
}

export default Login;