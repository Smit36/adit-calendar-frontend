import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import NewEvent from './components/NewEvent/NewEvent';



class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path='/' render={() => (
                            <Fragment>
                                <NewEvent />
                            </Fragment>
                        )}
                            exact={true}
                        />
                        
                                             
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App