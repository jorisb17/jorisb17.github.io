import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable'
import LoadingComponent from "./Loading/LoadingComponent";

const AsyncNavBar = Loadable({
    loader: () => import('./nav/NavBar'),
    loading: LoadingComponent
});

const AsyncHomePage = Loadable({
    loader: () => import('./home/HomePage'),
    loading: LoadingComponent
});

const AsyncNieuwsPage = Loadable({
    loader: () => import('./nieuws/NieuwsPage'),
    loading: LoadingComponent
});

class App extends Component {
    render() {
        return (
            <div>
                <Route
                    render={() => (
                        <div>
                            <AsyncNavBar />
                            <div className="main">
                                <Switch>
                                    <Route exact path="/" component={AsyncHomePage} />
                                    <Route exact path="/nieuws" component={AsyncNieuwsPage}/>
                                    <Route exact path={"/test"} component={LoadingComponent}/>
                                </Switch>
                            </div>
                        </div>
                    )}
                />
            </div>
        );
    }
}

export default App;
