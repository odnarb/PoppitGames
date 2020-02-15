import React from 'react'

import MapView from 'react-native-maps'
import isEqual from 'lodash.isequal'

export default class MarkerWithView extends React.Component {
  state = {
    tracksViewChanges: true
  }

  shouldComponentUpdate(nextProps: any) {
    console.log("CHECK MARKER PROPS: ", nextProps);
    if (!isEqual(this.props, nextProps)) {
      this.setState({
        tracksViewChanges: true,
      }, () => {
        this.setState({tracksViewChanges: false})
      })
    }
  }

  componentDidUpdate() {
    if (this.state.tracksViewChanges) {
      this.setState({
        tracksViewChanges: false,
      })
    }
  }

  render() {
    return (
      <MapView.Marker
        tracksViewChanges={this.state.tracksViewChanges}
        {...this.props}>{this.props.children}</MapView.Marker>
    )
  }
};