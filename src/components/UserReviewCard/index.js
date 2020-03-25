import React from 'react'
import './style.css'

const UserReviewCard = (props) =>
    <div className="user-review-card">
        <div className="user-review-card__heading">
            {props.user.firstname}{'\'s objectives.'}
        </div>   
        <div className="user-review-card__sub-heading">
            End of year review.
        </div>   
        <div className="user-review-card__summary">
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th className="user-review-card__count-heading" scope="row">Drafts.</th>
                        <td className="user-review-card__count user-review-card__count--drafts">{props.user.draftCount || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th className="user-review-card__count-heading" scope="row">In progress.</th>
                        <td className="user-review-card__count user-review-card__count--inProgress">{props.user.inProgressCount || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th className="user-review-card__count-heading" scope="row">Completed.</th>
                        <td className="user-review-card__count user-review-card__count--completed">{props.user.completedCount || 'N/A'}</td>
                    </tr>
                        <tr>
                        <th className="user-review-card__count-heading" scope="row">Due next month.</th>
                        <td className="user-review-card__count user-review-card__count--due">{props.user.dueCount || 'N/A'}</td>
                    </tr>
                        <tr>
                        <th className="user-review-card__count-heading" scope="row">Overdue.</th>
                        <td className="user-review-card__count user-review-card__count--overdue">{props.user.overdueCount || 'N/A'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

export default UserReviewCard