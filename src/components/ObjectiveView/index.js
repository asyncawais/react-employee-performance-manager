
import React from 'react'
import SearchUsers from '../SearchUsers'
import UserChip from '../../components/UserChip'
import { changeObjectiveStatus } from '../../data/objectives/actions'
import { connect } from 'react-redux'

import './style.css'

const mapDispatchToProps = (dispatch) => {
    return {
        changeObjectiveStatus: (value) => dispatch(changeObjectiveStatus(value))
    };
};

const ObjectiveViewMyComments = (props) => {
    return (
        <div className="objective-view__my-comments">
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="objective-view__heading">Objective complete.</h3>
                    <h4 className="objective-view__sub-heading">So how do you think you did?</h4>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-sm-12">
                    <textarea className="form-control" defaultValue={ props.data.feedback } placeholder="Comments..." onChange={ (e) => props.data.feedback = e.target.value }></textarea>
                </div>
            </div>
        </div>
    )
}

const ObjectiveViewEditText = (props) =>
    <div className={ !props.showEditFields ? "d-none" : null }>

        <div className="row mb-4">
            <div className="col-sm-3">
                <label className="objective-view__form-label" for="objDueDate">Due date.</label>
                <input className="form-control" defaultValue={ props.data.dueDate } id="objDueDate" onChange={ (e) => props.data.dueDate = e.target.value } type="date" />
            </div>
        </div>

        <div className="row mb-4">
            <div className="col-sm-12">
                <label className="objective-view__form-label" for="objTitle">Title.</label>
                <span className="objective-view__form-note">Your objective title will be visible to those who provide feedback.</span>
                <input className="form-control" id="objTitle" type="text" defaultValue={ props.data.title } onChange={ (e) => props.data.title = e.target.value } />
            </div>
        </div>
        <div className="row mb-4">
            <div className="col-sm-12">
                <label className="objective-view__form-label" for="objDescription">Description.</label>
                <span className="objective-view__form-note">{"This isn't visible to anyone other than your manager"}.</span>
                <textarea className="form-control" id="objDescription" defaultValue={ props.data.description } onChange={ (e) => props.data.description = e.target.value } />
            </div>
        </div>
    </div>

const ObjectViewSavedText = (props) =>
    <div className={ props.showEditFields ? "d-none" : null }>
        <button className="objective-view__toggle-button objective-view__toggle-button--edit" onClick={ () => props.showEditFieldsHandle() }>edit.</button>
        <div className="row mb-1">
            <div className="col-sm-12">
                <span class="objective-view__due-date">Due date: { props.data.dueDate }</span>
            </div>
        </div> 
        <div className="row">
            <div className="col-sm-12">
                <h2 className="objective-view__title">
                    {props.data.title}
                </h2>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <p className="objective-view__description">
                    { props.data.description }
                </p>
            </div>
        </div>
        <div className="row mb-4">
            <div className="col-sm-12">
                
            </div>
        </div>
    </div>

class ObjectiveView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditFields: false,
            showSharedWithEditview: false,
            showFeedbackForm: false
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }  

    addToSharedWith(user) {
        this.props.addToSharedWith(user.id)
        this.setState({ ...this.state, showSharedWithEditview: false })
    }

    changeStatus(value) {
        this.props.changeObjectiveStatus(value)

        if (value === 'complete') {
            this.setState({ ...this.state, showFeedbackForm: true })
        }
    }

    showEditFieldsHandle() {
        this.setState({ ...this.state, showEditFields: true })
    }

    showSharedWithEditviewHandle() {
        this.setState({ ...this.state, showSharedWithEditview: true })
    }

    renderStatusHeader() {
        return (
            <div className="row mb-4">
                <div className="col-sm-12">
                    
                    { this.props.data.isNewlyCreated 
                    ? <div><span className="objective-view__status-label">Create objective: </span><span className="objective-view__status-text">{ this.props.data.status }</span></div> 
                    : <div><span className="objective-view__status-label">Objective status: </span><span className="objective-view__status-text">{ this.props.data.status }</span></div> }
                </div>
            </div>
        )
    }

    renderStatusDropdown() {
        return (
            <select className={`objective-view__status-select ${this.props.data.status}`} onChange={(e) => this.changeStatus(e.target.value)}>
                <option value="draft" selected={this.props.data.status === 'draft'}>Change status: Draft</option>
                <option value="inProgress" selected={this.props.data.status === 'inProgress'}>Change status: In progress</option>
                <option value="complete" selected={this.props.data.status === 'complete'}>Change status: Completed.</option>
            </select>
        )
    }

    renderTitleAndDescription() {
        return (
            <div className="objective-view__section">
                <ObjectiveViewEditText data={ this.props.data } showEditFields={ this.props.data.isNewlyCreated || this.state.showEditFields } />
                <ObjectViewSavedText data={ this.props.data } showEditFields={ this.props.data.isNewlyCreated || this.state.showEditFields } showEditFieldsHandle={ this.showEditFieldsHandle.bind(this) } />
            </div>
        )
    }

    renderCallToAction() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <button className="objective-view__btn objective-view__btn--save" onClick={ () => this.props.save(this.props.data) }>Save Objective.</button>
                </div>
            </div>
        )
    }

    renderAddedUsers() {
        return (
            <div className={`objective-view__shared-with-list ${( this.state.showSharedWithEditview === true || this.props.data.sharedwith.length === 0 ) ? "d-none" : "d-block"}`}>
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="objective-view__heading">Working on the objective with...</h3>
                    </div>
                </div>
                <div className="row">  
                    { this.props.data.sharedwith.map( (userId) => <div className="col-md-3" key={ userId }><UserChip actionId={ userId } userId={ userId } /></div> ) }
                </div>
            </div>
        )
    }

    renderSharedWithEditView() {
        return (
            <div className={ ( this.state.showSharedWithEditview === true || this.props.data.sharedwith.length === 0 ) ? "d-block" : "d-none" }>
                <div className="row">
                    <div className="col-sm-12">
                        <span className="objective-view__form-label">Share objective.</span>
                        <span className="objective-view__form-note">If your objective is shared with someone else, select who it is.</span>
                    </div>
                </div>
                { this.renderAddUserToObjective() }
            </div>
        )
    }

    renderSharedWith() {
        return (
            <div className="objective-view__section">
                { this.props.data.sharedwith.length > 0 ? <button className="objective-view__toggle-button objective-view__toggle-button--edit" onClick={ () => this.showSharedWithEditviewHandle() }>edit.</button> : null } 
                { this.renderSharedWithEditView() }
                { this.renderAddedUsers() }
            </div>
        )
    }

    renderAddUserToObjective() {
        return (
            <div className="objective-view__users-to-add">
                <div className="row">
                    <div className="col-sm-12">
                        <SearchUsers onUserClick={this.addToSharedWith.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }

    renderMainView() {
        return (
            <div className={ this.state.showFeedbackForm === false ? 'd-block'  : 'd-none' }>
                { this.renderStatusHeader() }
                { this.renderStatusDropdown() }
                <div className="objective-view__hr"></div>
                { this.renderTitleAndDescription() }
                <div className="objective-view__hr"></div>
                { this.renderSharedWith() }
                <div className="objective-view__hr"></div>
                
            </div>
        )
    }

    renderMyCommentsView() {
        return (
            <div className={ this.state.showFeedbackForm === true ? 'd-block' : 'd-none' }>
                <ObjectiveViewMyComments data={ this.props.data } />
            </div>
        )
    }
    
    render() {
        return (
            <div className="objective-view">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="objective-view__inner">
                                <button className="objective-view__close" onClick={ () => this.props.close() }>close</button>
                                { this.renderMainView() }
                                { this.renderMyCommentsView() }
                                { this.renderCallToAction() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(ObjectiveView)