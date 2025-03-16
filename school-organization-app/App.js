import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClassSchedule from './components/ClassSchedule';
import Assignments from './components/Assignments';
import Notifications from './components/Notifications';
import Messaging from './components/Messaging';
import Login from './components/Login';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/schedule" component={ClassSchedule} />
                <Route path="/assignments" component={Assignments} />
                <Route path="/notifications" component={Notifications} />
                <Route path="/messaging" component={Messaging} />
            </Switch>
        </Router>
    );
};

export default App;
