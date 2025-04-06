import shortid from "shortid";
import strContains from '../utils/strContains'


//selectrors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getFavoriteCards = state => state.cards.filter(card => card.isFavorite);

//actions
const createActionName = actionName => `app/card/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');

//action creator
export const addCard = payload => ({ type: ADD_CARD, payload });
export const toggleCardFavorite = payload =>  ({ type: 'TOGGLE_CARD_FAVORITE', payload });


const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_CARD:
        return [...statePart, { ...action.payload, id: shortid(), isFavorite: false
    }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ?
  { ...card, isFavorite: !card.isFavorite } : card);
    default:
    return statePart;
  }
  }
  

export default cardsReducer;