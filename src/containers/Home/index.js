import React from 'react'
import { connect } from 'react-redux'
import { getUserSummary } from '../../data/userSummary/actions'
import UserDetailsCard from '../../components/UserDetailsCard'
import UserReviewCard from '../../components/UserReviewCard'
import './style.css'

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        userSummary: state.userSummary.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserSummary: (userId) => dispatch(getUserSummary(userId))
    }
}

class Home extends React.Component {

    componentDidMount() {
        this.props.getUserSummary(this.props.currentUser.uid)
    }

    renderUserDetailsCard() {
        return this.props.userSummary ? <UserDetailsCard user={ this.props.userSummary } /> : null
    }

    renderUserReviewCard() {
        return this.props.userSummary ? <UserReviewCard user={ this.props.userSummary } /> : null
    }

    render() {
        return (
            <div className="main-container main-container--home">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="main-heading">{"Home."}</h2>
                        </div>
                    </div>   
                    <div className="row mb-4">
                        <div className="col-sm-6">
                            { this.renderUserDetailsCard() }
                        </div>
                        <div className="col-sm-6">
                            { this.renderUserReviewCard() }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="main-heading">{"Notifications."}</h2>
                            <p>There are no notifications.</p>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)