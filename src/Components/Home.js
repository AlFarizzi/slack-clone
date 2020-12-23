// Components
import Router from './util/Router'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
// Components

// Hooks
import {useContext} from 'react'
import {DataContainer} from './util/DataLayer'
// Hooks

// Style
import './Home.css'
// Style

function Home(props) {
    const contextt = useContext(DataContainer)
    return (
        <div className="home__container">
             {
                    contextt.state.name ? ( <Topbar /> ) : ''
            }
            <div className="content__container">
                {/* Sidebar Hanya Akan Tampil Jika Sudah Login */}
                {
                    contextt.state.name ? ( <Sidebar /> ) : ''
                }
                <Router />
            </div>
        </div>
    );
}

export default Home;