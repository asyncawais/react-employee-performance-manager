import React from 'react'
import './style.css'

class StarRating extends React.Component {

    onClick(rating) {
        this.props.onClick(rating)
    }

    render() {
        return (
            <div className="star-rating">
                
                <button className="star-rating__icon" onClick={() => this.onClick(1)} type="button">
                    <i class="fa fa-star" aria-hidden="true"></i>
                </button>

                <button className="star-rating__icon" onClick={() => this.onClick(2)} type="button">
                    <i class="fa fa-star" aria-hidden="true"></i>
                </button>
                
                <button className="star-rating__icon" onClick={() => this.onClick(3)} type="button">
                    <i class="fa fa-star" aria-hidden="true"></i>
                </button>

                <button className="star-rating__icon" onClick={() => this.onClick(4)} type="button">
                    <i class="fa fa-star" aria-hidden="true"></i>
                </button>

                <button className="star-rating__icon" onClick={() => this.onClick(5)} type="button">
                    <i class="fa fa-star" aria-hidden="true"></i>
                </button>

            </div>
        )
    }
}

export default StarRating