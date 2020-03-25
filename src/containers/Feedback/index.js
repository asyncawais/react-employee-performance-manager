import './style.css'
import React from 'react'
import StarRating from '../../components/StarRating'
import UserSelectForFeedback from '../../components/UserSelectForFeedback'
import { connect } from 'react-redux'
import { createFeedback } from '../../data/generalFeedback/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        createFeedback: (data) => dispatch(createFeedback(data))
    };
};

class Feedback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showMainFeedbackSection: true,
            showFeedbackForm: true,
            showThankYou: false,
            showUserSelect: false,
            user: null,
            comments: '',
            rating: null,
        };

        this.onStarRatingClick = this.onStarRatingClick.bind(this)
        this.onCommentsChange = this.onCommentsChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onUserClick = this.onUserClick.bind(this)
    }

    onStarRatingClick(rating) {
        this.setState({ ...this.state, rating: rating })
    }

    onUserClick(user) {
        this.setState({ ...this.state, user: user, showFeedbackForm: true, showUserSelect: false })
    }

    onCommentsChange(e) {
        console.log(e.target.value);
        this.setState({...this.state, comments: e.target.value})
    }

    onCloseThankYou() {

        this.setState({
            ...this.state, 
            showMainFeedbackSection: true, 
            showThankYou: false,
            comments: '',
            rating: null,
            user: null,
        })
    }

    onShowUserSelect() {

        this.setState({
            ...this.state, 
            showFeedbackForm: false, 
            showUserSelect: true,
        })
    }

    onSubmit(e) {
        
        e.preventDefault()

        let data = {
            user: this.state.user,
            comments: this.state.comments,
            rating: this.state.rating,
        }

        //this.props.createFeedback(data)

        if (this.state.user === null) {
            return;
        }

        this.setState({
            ...this.state,
            showMainFeedbackSection: false,
            showThankYou: true,
        })
    }

    renderSelectedUserDetails() {

        if (this.state.user === null) {
            return (
                <div className="feedback-form-selected-user-details">
                    <span className="feedback-form-selected-user-details__heading">Please select someone to give feedback on.</span>
                </div>
            )
        }

        return (
            <div className="feedback-form-selected-user-details">
                <span className="feedback-form-selected-user-details__heading">You are providing feedback on...</span><br />
                <span className="feedback-form-selected-user-details__name">{ this.state.user.firstname } { this.state.user.surname }</span><br />
                <span className="feedback-form-selected-user-details__role">{ this.state.user.role }.</span>
            </div>
        )
    }

    renderFeedbackForm() {
        return (
            <div>
                { this.renderSelectedUserDetails() }
                <div className="feedback-form">
                    <div className="feedback-form__user-avatar-large feedback-form__user-select-icon" onClick={ () => this.onShowUserSelect() }></div>
                    <form onSubmit={this.onSubmit}>
                        <span className="feedback-form__heading">Your feedback.</span>
                        <p>Let them know what they should stop/start/continue to do.</p>
                        <textarea className="feedback-form__textbox" placeholder="Comments..." value={ this.state.comments } onChange={ this.onCommentsChange } />
                        <p>How likely are you to recommend to rate { this.state.user ? this.state.user.firstname : 'them' } out of 5.</p>
                        <div className="mb-4">
                            <StarRating onClick={ this.onStarRatingClick } />
                        </div>
                        <input className="btn btn--black" type="submit" value="Send" />
                    </form>
                </div>
            </div>
        )
    }

    renderThankYou() {
        return (
            <div className="feedback-thank-you">
                <div className="container">
                    <div className="feedback-thank-you__inner">
                        <div className="row">
                            <div className="col-sm-6">
                                <span className="feedback-thank-you__heading">Thank you, your feedback has been sent to...</span><br />
                                <span className="feedback-thank-you__user-name">{ this.state.user.firstname } { this.state.user.surname }</span><br />
                                <span className="feedback-thank-you__user-role">{ this.state.user.role }.</span>
                            </div>
                            <div className="col-sm-6">
                                <div className="feedback-form__user-avatar-large"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div class="row">
                                    <div className="col-lg-6">
                                        <button className="feedback-thank-you__btn btn btn--black" onClick={() => this.onCloseThankYou()}>More feedback.</button>
                                    </div>
                                    <div className="col-lg-6">
                                        <button className="feedback-thank-you__btn btn btn--black" onClick={() => this.onCloseThankYou()}>Close.</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderMainFeedbackSection() {
        return (
            <div className="container">
                
                <div className="row">
                    <div className="col-sm-12">
                        <div className="feedback-form-background">
                            { this.state.showUserSelect === true ? <UserSelectForFeedback onUserClick={ this.onUserClick } /> : null }
                            { this.state.showFeedbackForm === true ? this.renderFeedbackForm() : null }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="main-container main-container--feedback">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="main-heading">{"General Feedback."}</h2>
                        </div>
                    </div>   
                </div>
                { this.state.showMainFeedbackSection ? this.renderMainFeedbackSection() : null }
                { this.state.showThankYou ? this.renderThankYou() :  null }
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Feedback)