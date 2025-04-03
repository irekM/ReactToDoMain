import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
// import shortid from 'shortid';
import strContains from '../utils/strContains';
import listReducer from './listsRedux';
import columnsReducer from './columnsReducer';
import cardsReducer from './cardsReducer';
import searchStringReducer from './searchStringReducer';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = state => state.columns;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsByList = ({ columns }, listId) => 
  columns.filter(column => column.listId === listId);

export const getAllLists = state => state.lists;
export const getFavoriteCards = state => state.cards.filter(card => card.isFavorite);

  // action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRIG', payload});
export const toggleCardFavorite = payload =>  ({ type: 'TOGGLE_CARD_FAVORITE', payload });
export const addList = payload => ({type: 'ADD_List', payload});

//zmiana reducera na subreducery

  const subreducers = {
    lists: listReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    searchStrich: searchStringReducer
  }

  const reducer = combineReducers(subreducers);

  // const reducer = (state, action) => {
  //   const newState = {
  //     lists:listReducer(state.lists, action),
  //     columns: columnsReducer(state.columns, action),
  //     cards: cardsReducer(state.cards, action),
  //     searchString: searchStringReducer(state.searchString, action)
  //   };
  //   return newState;
  // };

  //[payload zamiast newColumn]
// const reducer = (state, action) => {
//   switch(action.type) {
//     case 'ADD_COLUMN':
//       return { 
//         ...state, 
//         columns: [...state.columns, { 
//         ...action.payload, 
//         id: shortid()
//       }]
//     };

//     case 'ADD_CARD':
//       return{
//         ...state,
//         columns: state.columns.map(column => {
//           if(column.id === action.payload.columnId){
//             return {
//               ...column,
//               cards: [...column.cards, { id: shortid(), title: action.payload.title}]
//             };
//           }
//           return column;
//         })
//       };

//       case 'ADD_LIST':
//         return { ...state, lists: [...state.lists, {
//           ...action.payload, id: shortid() }]};

//       case 'TOGGLE_CARD_FAVORITE':
//       return {
//         ...state,
//         cards: state.cards.map(card =>
//           card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card
//         )
//       };

//     case 'UPDATE_SEARCHSTRING':
//       return {
//         ...state,
//         searchString: action.payload
//       };
    
    

//     default:
//       return state;
//   }
// };

// const initialState = {
//   columns: [],
//   searchString: ''
// };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;