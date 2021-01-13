import React from 'react';
import {Auth} from "./pages/auth";
import {Home} from "./pages/home";
import {Redirect, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAuthStatus} from "./store/ducks/auth/selectors";
import {AuthStatusState} from "./store/ducks/auth/contracts/state";

function App() {
   // let user = undefined;
    const authStatus = useSelector(selectAuthStatus)

    return (
        <div className="App">
            <Switch>
                <Route path='/auth' exact component={Auth}/>
                <Route path='/'>
                 {authStatus === AuthStatusState.TRUE ? <Home/> : <Redirect to='/auth'/>}
                </Route>
            </Switch>
        </div>


    )
}

export default App;
