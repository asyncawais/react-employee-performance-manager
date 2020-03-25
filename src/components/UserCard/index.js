import React from 'react'

import './style.css' 

const UserCard = (props) => 

    <div className="user-card" onClick={ () => props.onUserClick(props.data) }>
        <div className="user-card__avatar"></div>
        <div className="user-card__details">
            <span className="user-card__name">{ props.data.firstname } { props.data.surname }</span><br />
            <span>{ props.data.role }.</span>
        </div>
    </div>
    
export default UserCard