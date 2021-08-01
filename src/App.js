import { connect } from 'react-redux';
import { setCard } from './actions/card';
import PropTypes from 'prop-types';
import { useState, Fragment } from 'react';
import './App.css';

function App({ setCard, cards }) {
    const [cardRandomNum, setCardRandomNum] = useState(1);
    const [card] = useState(['spade', 'heart', 'diamond', 'club']);
    const [cardTypeOutput, setCardTypeOutput] = useState('spade');

    const btnHandleClick = () => {
        // Change the code below to Math.floor(Math.random() * 13 + 1) if you want to get cards from 1 - 13 which is the full deck. 52 cards in total.
        setCardRandomNum(Math.floor(Math.random() * 3 + 1));
        console.log(cardRandomNum);

        const cardType = [Math.floor(Math.random() * card.length)];

        setCardTypeOutput(card[cardType]);
        console.log(cardTypeOutput);

        setCard(cardRandomNum, cardTypeOutput);
        console.log(cards);
    };
    return (
        <Fragment>
            <main>
                <section className="container">
                    <div>
                        <h1 className="heading-text">{cards[0].text}</h1>
                    </div>
                    <div>
                        <button className="btn-place-card" onClick={btnHandleClick}>
                            Place Cards
                        </button>
                    </div>

                    <div className="card-board-container">
                        {(cards !== null) & (cards.length > 0) &&
                            cards.map((card) => <div key={card.id} className={`card card-${card.cardType}-${card.msg}`}></div>)}
                    </div>
                </section>
            </main>
        </Fragment>
    );
}

App.propTypes = {
    setCard: PropTypes.func.isRequired,
    cards: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    cards: state.card,
});

export default connect(mapStateToProps, { setCard })(App);