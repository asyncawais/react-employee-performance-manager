import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getUserSummary } from '../../data/userSummary/actions'
import UserDetailsCard from '../../components/UserDetailsCard'
import UserReviewCard from '../../components/UserReviewCard'
import './style.css'

const mapStateToProps = (state) => {
    return {
        userSummary: state.userSummary.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserSummary: (userId) => dispatch(getUserSummary(userId))
    }
}


class MyTeamDetail extends React.Component {

    componentDidMount() {
        this.props.getUserSummary('123')
    }

    renderUserDetailsCard() {
        return this.props.userSummary ? <UserDetailsCard user={ this.props.userSummary } /> : null
    }

    renderUserReviewCard() {
        return this.props.userSummary ? <UserReviewCard user={ this.props.userSummary } /> : null
    }

    render() {
        return (
            <div className="main-container main-container--user-detail user-detail-view">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2 className="main-heading d-none">{"My Team."}</h2>        
                        </div>
                        <div className="col-sm-6">
                            <a className="btn btn--black float-sm-right" href="/my-team/">Back to team.</a>       
                        </div>
                    </div>    
                    <div class="row">
                        <div className="col-sm-6">
                            { this.renderUserDetailsCard() }
                        </div>
                        <div className="col-sm-6">
                            { this.renderUserReviewCard() }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyTeamDetail))