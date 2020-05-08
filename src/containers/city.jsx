import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import setCities from '../actions/index';

const City = (props) => {
  return (
    <li
      className="list-group-item"
      onClick={() => props.setCities(props.city)}
    >{props.city.name}</li>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCities }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
