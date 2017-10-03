import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import propTypes from 'prop-types';
import { routeConst, defaultPage } from '../constants/mainConstants';



import PageContainer from './PageContainer';

export default class Main extends Component {
    static propTypes = {
        isReady: propTypes.bool,
        onStartApp: propTypes.func,
    };

    getRoutes = () => {
        const routes = [];
        const DefaultItem = routeConst.find(route => {
            return route.page === defaultPage;
        });

        const DefaultComponent = DefaultItem.component;
        const defaultPageName = DefaultItem.page;

        routes.push(
            <Route
                exact
                key={0}
                path="/"
                render={props =>
                    <PageContainer selectedPage={defaultPageName}>
                        <DefaultComponent {...props} />
                    </PageContainer>}
            />,
        );

        routeConst.forEach((route, index) => {
            const moduleUrlHash = route.defaultUrlHash;

            const Constructor = route.component;
            routes.push(
                <Route
                    key={index + 1}
                    path={moduleUrlHash}
                    render={props =>
                        <PageContainer selectedPage={route.page}>
                            <Constructor {...props} />
                        </PageContainer>}
                />,
            );
        });

        return routes;
    }

    render() {
        const routes = this.getRoutes();

        const content = (
            <Switch>
                {routes}
            </Switch>
        );

        return content;
    }
}