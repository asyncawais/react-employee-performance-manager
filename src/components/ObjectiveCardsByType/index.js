import React from 'react'
import Card from '../Card'

import './style.css'

const ObjectiveCardsByDraft = (props) => 
    {if (props.isVisible) {
        return (
            <div className="objective-cards-by-type objective-cards-by-type--draft">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12"> 
                            <div className="objective-cards-by-type__inner">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h3 className="objective-cards-by-type__title">Drafts.</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <button className="card card--create-objective mb-4" onClick={() => props.create()}><span className="card--create-objective__label">Create new objective.</span></button>
                                    </div>
                                    {props.data.map((item) => (
                                        <div className="col-md-3" key={item.id}>
                                            <Card data={item} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }}
    
const ObjectiveCardsByInProgress = (props) => 
    {if (props.isVisible) {
        return (
            <div className="objective-cards-by-type objective-cards-by-type--inProgress">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12"> 
                            <div className="objective-cards-by-type__inner">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h3 className="objective-cards-by-type__title">In Progress.</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    {props.data.map((item) => (
                                        <div className="col-sm-3" key={item.id}>
                                            <Card data={item} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }}

const ObjectiveCardsByComplete = (props) => 
    {if (props.isVisible){
        return (
            <div className="objective-cards-by-type objective-cards-by-type--complete">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12"> 
                            <div className="objective-cards-by-type__inner">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h3 className="objective-cards-by-type__title">Completed.</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    {props.data.map((item) => (
                                        <div className="col-sm-3" key={item.id}>
                                            <Card data={item} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }}

export {
    ObjectiveCardsByDraft,
    ObjectiveCardsByInProgress,
    ObjectiveCardsByComplete,
}