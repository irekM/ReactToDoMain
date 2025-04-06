
// selector
export const getSearchString = state => state.searchString;

//actions
const createActionName = actionName => `app/CARD/${actionName}`;
const UPDATE_SEARCHSTRIG = createActionName('UPDATE_SEARCHSTRIG');


//action creator
export const updateSearchString = payload => ({ type: UPDATE_SEARCHSTRIG, payload});


const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case 'UPDATE_SEARCHSTRING':
      return action.payload
    default:
      return statePart;
  }
  }

  export default searchStringReducer;