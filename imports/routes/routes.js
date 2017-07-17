import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Login from './../ui/Login';
import Signup from './../ui/Signup';
import Link from './../ui/Link';
import NotFound from './../ui/NotFound';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

const onEnterPuplicPage = () => {
    if (Meteor.userId()) {
        browserHistory.replace('/links');
    }
};

const onEnterPrivatePage = () => {
    if (!Meteor.userId()) {
        browserHistory.replace('/');
    }
};

export const onAuthChange = (isAuthenticated) => {
    const pathname = browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);

    if (isUnauthenticatedPage && isAuthenticated) {
        browserHistory.replace('/links');
    }
    if (isAuthenticatedPage && !isAuthenticated) {
        browserHistory.replace('/');
    }
};

export const routes = (
    <Router history={browserHistory} >
        <Route path="/" component={Login} onEnter={onEnterPuplicPage}/>
        <Route path="/signup" component={Signup} onEnter={onEnterPuplicPage}/>
        <Route path="/links" component={Link} onEnter={onEnterPrivatePage}/>
        <Route path="*" component={NotFound}/>
    </Router>
);
