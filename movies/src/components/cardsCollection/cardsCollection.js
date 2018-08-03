import React, {Component} from 'react';
import './cardsCollection.css';

import { Card } from '../card/card';
import { Arrow } from '../arrow/arrow';

export class CardsColletion extends Component {
    
    step = 600;

    constructor(props) {
        super(props);
        this.state = {
            step : 400,
        }
    }
    
    render() {
        
        // loop over cards number
        const renderCard = () => {
            let cards = [];
            for (let index = 0; index < this.props.cardNumber; index++) {
                // save all cards in a cards array            
                cards.push(<Card key={index} value={index}/>);
            } 
            return cards;
        }
        const scrollLeft = (e) => {
            console.log(e);
            let elmnt = document.getElementsByClassName("cardsCollection");
            let scrollAmount = 0;
            var slideTimer = setInterval(() => {
                elmnt[0].scrollLeft += -10;
                scrollAmount += 10;
                if(scrollAmount >= this.step){
                    window.clearInterval(slideTimer);
                }
            }, 15);
        }
    
        const scrollRight = (e) => {
            console.log(e);
            let elmnt = document.getElementsByClassName("cardsCollection");
            let scrollAmount = 0;
            var slideTimer = setInterval(() => {
                elmnt[0].scrollLeft += 10;
                scrollAmount += 10;
                if(scrollAmount >= this.step){
                    window.clearInterval(slideTimer);
                }
            }, 15);
        }
        
        return(
            <div className="cardsContainer">
                <Arrow direction='left' onClick={scrollLeft}/>
                    <div className="cardsCollection">
                        {renderCard()}
                    </div>
                <Arrow direction='right' onClick={scrollRight}/>
            </div>
        )
    }
}