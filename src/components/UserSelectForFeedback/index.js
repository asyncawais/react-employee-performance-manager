import React from 'react'
import UserCard from '../UserCard'

import './style.css' 

class UserSelectForFeedback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="container">
                <div className="user-select-for-feedback">
                    <div className="row">
                        { [{id: '123', firstname: 'Awais', surname: 'Muzaffar', role:'Front-end Developer' }, {id: '246', firstname: 'Matt', surname: 'Goddard', role:'UX Dude' }].map(user => 
                            <div className="col-3" key={ user.id }>
                                <UserCard data={ user }  onUserClick={ this.props.onUserClick } />
                            </div>
                        ) }
                    </div>
                </div>
            </div>
        )
    }

}

export default UserSelectForFeedback