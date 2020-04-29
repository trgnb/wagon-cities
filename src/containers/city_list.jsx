import React, { Component } from 'react';
import City from './city';

class CityList extends Component {
  static defaultProps = {
    cities: [
      { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
      { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
      { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' }
    ]
  }


  componentWillMount() {
    // TODO: dispatch an action to load flats!
  }

  render() {
    return (
      <div className="city-list col-sm-5">
        Hello
        {this.props.cities.map((city) => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

export default CityList;
