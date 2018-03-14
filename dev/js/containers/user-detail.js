import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Select an item...</div>);
        }
        return (
            <div><h1>Name: {this.props.user.name}</h1>
                <img src={this.props.user.image} />
                <h2>Description :  {this.props.user.description}</h2>
                <h3>Nonveg :  {this.props.user.nonVeg?"YES":"NO"}</h3>
                <h3>Spicy: {this.props.user.spicy?"YES":"NO"}</h3>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
