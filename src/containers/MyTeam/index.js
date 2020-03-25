import React from 'react'
import UserCard from '../../components/UserCard'

import './style.css'

class MyTeam extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    onUserClick(user) {
        window.location.href = `/my-team/${user.id}`
    }

    render() {
        return (
            <div className="main-container main-container--my-team my-team-view">
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="main-heading d-none">{"My Team."}</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="main-heading">My manager.</h3>
                        </div>
                    </div>   

                    <div className="row">
                        { [ {id: '246', firstname: 'Matt', surname: 'Goddard', role:'UX Dude' }].map(user => 
                            <div className="col-3" key={ user.id }>
                                <UserCard data={ user }  onUserClick={ this.onUserClick } />
                            </div>
                        ) }
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="main-heading">My direct reports.</h3>
                        </div>
                    </div>   

                    <div className="row">
                        { [{id: '123', firstname: 'Awais', surname: 'Muzaffar', role:'Front-end Developer' }, {id: '246', firstname: 'Matt', surname: 'Goddard', role:'UX Dude' }].map(user => 
                            <div className="col-3" key={ user.id }>
                                <UserCard data={ user }  onUserClick={ this.onUserClick } />
                            </div>
                        ) }
                    </div>

                </div>
            </div>
        )
    }
}

export default MyTeam