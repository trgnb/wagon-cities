import { combineReducers } from 'redux';
import CitiesReducer from '../reducers/cities_reducer';
import ActiveCityReducer from '../reducers/active_city_reducer';

const rootReducer = combineReducers({
  cities: CitiesReducer,
  activeCity: ActiveCityReducer
});

export default rootReducer;
