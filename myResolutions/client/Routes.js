import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from './Layouts/MainLayout';
import App from './Resolutions/App';
import About from './About';
import ResolutionDetail from "./Resolutions/ResolutionDetail";


FlowRouter.route("/", {
    action() {
        mount(MainLayout, {
            content: (<App />)
        });
    }
});

FlowRouter.route("/about", {
    action() {
        mount(MainLayout, {
            content: (<About />)
        });
    }
});

FlowRouter.route("/resolutions/:id", {
    action(params) {
        mount(MainLayout, {
            content: (<ResolutionDetail id={params.id}/>)
        });
    }
});