import React from "react";
import Viewbook from './Viewbook/index';
import Background from './background/index';
import Homepage from './homepage/index';
import Login from './login/index';
import Register from './register/index';


import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'





class App extends React.Component{
    state = {
        tableValues : []
    }

    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <Router>
                <Switch>
                
                <Route exact path="/login" component={Login}/>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/viewbook" component={Viewbook}/>
                
                <Route exact path="/register" component={Register}/>
                <Route exact path="/background" component={Background}/>
                    <Redirect to="/" component={Homepage}/>
                </Switch>
              
              
             </Router>

        );

    }
} 




export default App;   