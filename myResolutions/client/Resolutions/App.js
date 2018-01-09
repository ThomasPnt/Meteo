import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ResolutionForm from "./ResolutionForm";
import ResolutionSingle from "./ResolutionSingle";

Resolutions = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(React.Component) {

    constructor() {
        super();
        this.state = {
            subscription: {
                resolutions: Meteor.subscribe('userResolutions')
            }
        }
    }

    componentWillUnmount(){
        this.state.subscription.resolutions.stop();
    }

    resolutions() {
        return Resolutions.find().fetch();
    }

    render() {
        return (
            <div>
                <h1>My Resolutions - {Session.get('test')}</h1>
                <ResolutionForm/>
                <ul className="resolutions">
                    {this.resolutions().map((resolution) => {
                        return <ResolutionSingle key={resolution._id} resolution={resolution}/>
                    })}
                </ul>
            </div>
        )
    }
}


