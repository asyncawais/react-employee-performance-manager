import React from 'react'

import './style.css' 

const ObjectiveCardsFilter = (props) => 

    <div className="objectives-status-filter">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="objectives-filter__inner">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <button className={`objectives-status-filter__btn objectives-status-filter__btn--showAll ${props.status === null ? 'active' : '' }`} onClick={ () => props.setType(null) }>
                                    {"Show all."}
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={`objectives-status-filter__btn objectives-status-filter__btn--draft ${props.status === 'draft' ? 'active' : '' }`} onClick={ () => props.setType('draft') }>
                                    {"Drafts."}
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={`objectives-status-filter__btn objectives-status-filter__btn--inProgress ${props.status === 'inProgress' ? 'active' : '' }`} onClick={ () => props.setType('inProgress') }>
                                    {"In Progress."}
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={`objectives-status-filter__btn objectives-status-filter__btn--complete ${props.status === 'complete' ? 'active' : '' }`} onClick={ () => props.setType('complete') }>
                                    {"Completed."}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="clearfix"></div>
    </div>

    
    

export default ObjectiveCardsFilter