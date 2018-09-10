import React, { Component } from 'react';
import { View, Platform, AppRegistry } from 'react-native';
import {
  createNavigator,
  createNavigationContainer,
  addNavigationHelpers,
} from 'react-navigation';
import ScalingDrawer from './elements/ScalingDrawer';

import LeftMenu from './components/LeftMenu';
import HealerRouter from './routes/IntroStack';

let defaultScalingDrawerConfig = {
  scalingFactor: 0.8,
  minimizeFactor: 0.7,
  swipeOffset: 0
};

class CustomDrawerView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    /** Active Drawer Swipe **/
    if (nextProps.navigation.state.index === 0)
      this._drawer.blockSwipeAbleDrawer(false);

    if (
      nextProps.navigation.state.index === 0
      && this.props.navigation.state.index === 0
    ) {
      this._drawer.blockSwipeAbleDrawer(false);
      this._drawer.close();
    }

    /** Block Drawer Swipe **/
    if (nextProps.navigation.state.index > 0) {
      this._drawer.blockSwipeAbleDrawer(true);
    }
  }

  render() {
    const {
      routes,
      index
    } = this.props.navigation.state;

    const ActiveScreen = this.props.router.getComponentForState(
      this.props.navigation.state
    );

    return (
      <ScalingDrawer
        ref={ref => this._drawer = ref}
        content={<LeftMenu
          drawer={this._drawer}
          navigation={this.props.navigation}
        />}
        {...defaultScalingDrawerConfig}
      >
        <ActiveScreen
          navigation={addNavigationHelpers({
            ...this.props.navigation,
            state: routes[index],
            openDrawer: () => this._drawer.open(),
            closeDrawer: () => this._drawer.close(),
          })}
        />
      </ScalingDrawer>
    )
  }
}

const CustomDrawer = createNavigationContainer(
  createNavigator(HealerRouter)(CustomDrawerView)
);

export default () => <CustomDrawer />;
