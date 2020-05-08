import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import City from './city';

class CityList extends Component {
  renderList() {
    if (!this.props.cities) {
      return 'why isnt it working';
    } else {
      return this.props.cities.map((city) => {
        return (
          <City key={city.name} city={city} />
        );
      });
    }
  }

  render() {
    return (
      <ul className="list-group cities">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps)(CityList);
