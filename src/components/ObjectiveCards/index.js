import React from 'react'
import ObjectiveCardsFilter from '../ObjectiveCardsFilter'
import { ObjectiveCardsByDraft, ObjectiveCardsByInProgress, ObjectiveCardsByComplete } from '../ObjectiveCardsByType'

class ObjectiveCards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            objectiveType: null
        };
    }

    setObjectiveType(type) {
        this.setState({objectiveType: type})
    }

    isVisible(type) {
        return (this.state.objectiveType === type || this.state.objectiveType === null ? true : false)
    }
    
    render() {
        return (    
            <div>
                <ObjectiveCardsFilter setType={ this.setObjectiveType.bind(this) } status={this.state.objectiveType} />
                <ObjectiveCardsByDraft data={ this.props.data.objectives.filter(item => item.status === 'draft') } create={ this.props.create } isVisible={ this.isVisible('draft') } />
                <ObjectiveCardsByInProgress data={ this.props.data.objectives.filter(item => item.status === 'inProgress') } isVisible={ this.isVisible('inProgress') } />
                <ObjectiveCardsByComplete data={ this.props.data.objectives.filter(item => item.status === 'complete') } isVisible={ this.isVisible('complete') } />
            </div>
        )
    }
}

export default ObjectiveCards