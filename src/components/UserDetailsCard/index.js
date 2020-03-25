import React from 'react'
import './style.css'

const UserDetailsCard = (props) =>
    props.user ? (
        <div className="user-details-card">
        <div className="user-details-card__avatar">

        </div>
        <div className="user-details-card__rating">
            {props.user.averageRating}
        </div> 
        <div className="user-details-card__name">
            {props.user.firstname} {props.user.surname}.
        </div>

        <div className="user-details-card__role">
            {props.user.jobTitle}.
        </div>

        <div className="user-details-card__email">
            <strong>Email:&nbsp;</strong>{props.user.email || 'N/A'}
        </div>

        <div className="user-details-card__mobile">
            <strong>Mobile:&nbsp;</strong>{props.user.phoneNumber || 'N/A'}
        </div>

        <div className="user-details-card__manager">
            <strong>Manager:&nbsp;</strong>{props.user.manager || 'N/A'}  
        </div>

        <div className="user-details-card__direct-reports-count">
            <strong>Direct reports:&nbsp;</strong>{props.user.directReportsCount || 'N/A'}
        </div>

    </div>) : (null)
    
export default UserDetailsCard