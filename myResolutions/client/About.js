import React from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class About extends React.Component {

    setVar() {
        Session.set('Meteor.loginButtons.dropdownVisible', true);
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="route"
                transitionEnterTimeout={600}
                transitionAppearTimeout={600}
                transitionLeaveTimeout={400}
                transitionAppear={true}>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque earum laborum laudantium velit vitae. At cupiditate, deserunt eligendi error esse facere fugit laudantium necessitatibus quis?</p>
                <button onClick={this.setVar}>Sign up</button>
            </ReactCSSTransitionGroup>
        )
    }
}