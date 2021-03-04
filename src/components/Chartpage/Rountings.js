import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../Home';
import Chart from '../Chartpage/Chart'
import Task from '../pages/Task'
import PageNotFound from '../PageNotFound';
 
 class Rountings extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                 <Route path="/task" component={Task} exact/>
                 <Route path="/chart" component={Chart} exact/>
                 <Route path="*" component={PageNotFound} />
            </Switch>
            </BrowserRouter>
        )
    }
}

export default Rountings
