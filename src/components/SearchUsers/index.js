import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../data/users/actions'

import './style.css'

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        usersFilteredByName: state.usersFilteredByName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers()),
        filterUsersByName: () => {} //(data) => dispatch(filterUsersByName(data)),
    };
};

class SearchUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            objectiveType: null
        };
    }

    componentDidMount() {
        this.props.getUsers()
    }

    renderUsersFiltered() {
        if (this.props.users) {
            return (
                <ul className="users-list users-list--cards">
                    { this.props.users.map(user => 
                        <li className="users-list__item" key={user.id} onClick={ () => { this.props.onUserClick(user) } }>
                            <span className="users-list__item"></span>
                            {`${user.firstname} ${user.surname}`}
                        </li>) }
                </ul>
            )
                
        } else {
            return false;
        }
    }

    render() {
        return (
            <div>
                <input className="d-none" type="text" onChange={this.props.filterUsersByName} />
                { this.renderUsersFiltered() }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsers)