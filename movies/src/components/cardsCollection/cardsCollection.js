import React, {Component} from 'react';
import './cardsCollection.css';

import { Card } from '../card/card';
import { Arrow } from '../arrow/arrow';

export class CardsColletion extends Component {
    
    
    // loop over cards number
    renderCard = () => {
        let cards = [];
        for (let index = 0; index < this.props.cardNumber; index++) {
            // save all cards in a cards array            
            cards.push(<Card key={index}/>);
        } 
        return cards;
    }
    
    render() {
        
        return(
            <div className="cardsContainer">
                <Arrow direction='left'/>
                    <div className="cardsCollection">
                        {this.renderCard()}
                    </div>
                <Arrow direction='right'/>
            </div>
        )
    }
}