import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import {routes, onAuthChange} from './../imports/routes/routes';
import './../imports/startup/simple-schema-configuration';

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated);
});

// stateless functional components
// import React from 'react';
// const MyComponent = (props) => {
//     return <h1>Halo {props.name}</h1>;
// };
// Session.set('name', 'Lukas');
// Tracker.autorun(() => {
//     const name = Session.get('name');
//     console.log(name);
// });

Meteor.startup(() => {
    Session.set('showVisible', true);
    ReactDOM.render(routes, document.getElementById('app'));
});
