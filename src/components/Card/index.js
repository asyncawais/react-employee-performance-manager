import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadObjective } from '../../data/objectives/actions'
import './style.css'

const mapDispatchToProps = (dispatch) => {
    return {
        loadObjective: (data) => dispatch(loadObjective(data))
    };
};

class CardFront extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showCardFront: true
        };
    }

    render() {
        return (
            <Link to={`/objectives/${this.props.data.id}`}>
                <div className="card__front card__clickable">
                    <div className={`card__status card__status--${this.props.data.status}`}></div>
                    <div className="date"></div>
                    <div className="card__title">{this.props.data.title}</div>
                    <div className="card__main-text">{this.props.data.description}</div>
                </div>
            </Link>
        )
    }
}

class CardBack extends React.Component {

    render() {
        return (
            <div className="card__back">
                <button>Show card front.</button>
            </div>
        )
    }
}

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showCardFront: true
        };
    }

    showCardFront() {
        this.setState({showCardFront: true})
    }

    showCardBack() {
        this.setState({showCardFront: false})
    }

    loadObjective(data) {
        this.props.loadObjective(data)
    }

    render() {
        return (
            <div className="card mb-4">
                {this.state.showCardFront ? <CardFront handleCardView={this.showCardBack} data={this.props.data} loadObjective={this.loadObjective.bind(this)} /> : <CardBack handleCardView={this.showCardFront} />}
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Card)