import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';


import Flat from './flat';

class FlatList extends Component {

  componentWillMount() {
    // dispatch on action to update the Redux State tree (flats)
    this.props.setFlats();
  }

  render () {
    return (
      <div className="col-sm-7 flat-list">
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name} />)}
      </div>
    );
  }
}

// keep this two functions at the bottom

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    flats: state.flats
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
