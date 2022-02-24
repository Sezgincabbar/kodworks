import {Alert} from 'react-native';
export default function (state, action) {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      const {favouriteJob} = action.payload;
      const filtered = state.favouriteJob.find(
        item => item.id === favouriteJob.id,
      );

      if (filtered) {
        Alert.alert('Uyarı', 'Favorilerinde hali hazırda ekli');

        return state;
      } else {
        return {
          ...state,
          favouriteJob: [...state.favouriteJob, favouriteJob],
        };
      }
    case 'REMOVE_FAVOURITE':
      return {
        favouriteJob: [
          ...state.favouriteJob.filter(job => job !== action.payload.job),
        ],
      };
    case 'CLEAR_ALL':
      return {...state, favouriteJob: []};
    default: {
      return state;
    }
  }
}
