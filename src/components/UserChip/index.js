import React from 'react'
import { getUser } from '../../data/user/actions'
import { connect } from 'react-redux';

import './style.css'

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user[ownProps.actionId]
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getUser: (userId) => dispatch(getUser(ownProps.actionId, userId))
    };
};

class UserChip extends React.Component {

    componentWillMount() {
        this.props.getUser(this.props.userId)
    }

    renderUserChip() {
        if (this.props.user) {
            return (
                <div className="user-chip">
                    <div className="user-chip__avatar"></div>
                    <div className="user-chip__details">
                        <span className="user-chip__name">{`${this.props.user.firstname} ${this.props.user.surname}`}</span>
                        <span className="user-chip__role">job role.</span>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                { this.renderUserChip() }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserChip)