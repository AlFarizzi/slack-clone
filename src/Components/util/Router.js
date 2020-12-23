import Chat from '../Chat'
import Login from '../Login'
import {useContext} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'
import {DataContainer} from './DataLayer'

function Router(props) {
    const contextt = useContext(DataContainer)
    const history = useHistory()
    return (
            <Switch>
                {
                    contextt.state.name ? (
                        <>
                            <Route exact path="/">
                                Ini Home
                            </Route>
                            <Route path="/room/:roomId">
                                <Chat />
                            </Route>
                        </>
                    ) : (
                        <>
                            {history.push("/")}
                            <Route exact path="/">
                                <Login />
                            </Route>
                        </>
                    )
                }
                
            </Switch>
    );
 }
export default Router