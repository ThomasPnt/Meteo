import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from './Layouts/MainLayout';
import App from './Resolutions/App';

FlowRouter.route("/", {
    action() {
        mount(MainLayout, {
            content: (<App />)
        });
    }
});