import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Text from '../elements/Text';
import GradientNavigationBar from '../elements/GradientNavigationBar';

import CommonStyles from '../styles/CommonStyles';

export default class DoctorWorkingAddressScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workingAddrList: [
        {
          id: 0,
          hospitalName: 'Healer Hospital #1',
          address: '242 Gleichner Valleys, Robertview, Micronesia',
        },
        {
          id: 1,
          hospitalName: 'Healer Hospital #2',
          address: '242 Gleichner Valleys, Robertview, Micronesia',
        },
        {
          id: 2,
          hospitalName: 'Healer Hospital #3',
          address: '242 Gleichner Valleys, Robertview, Micronesia',
        },
        {
          id: 3,
          hospitalName: 'Healer Hospital #4',
          address: '242 Gleichner Valleys, Robertview, Micronesia',
        },
      ]
    }
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigation={this.props.navigation}
          back
          titleText='Working Address'
          rightButtons={
            [
              {
                key: 1,
                buttonIcon: require('../../img/healer/whiteHeart.png'),
                buttonAction: this._handleClickHeartButton.bind(this),
                buttonWidth: 26,
                buttonHeight: 23,
              },
            ]
          }
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            {
              this.state.workingAddrList.map((item, index) => (
                <Item
                  key={item.id}
                  hospitalName={item.hospitalName}
                  address={item.address}
                />
              ))
            }
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleClickHeartButton() {
    // TODO: Click heart button
  }
}

// Private component
class Item extends React.Component {
  render() {
    const {
      hospitalName,
      address, 
    } = this.props;

    return (
      <View style={[
        CommonStyles.itemWhiteBox,
        {
          paddingHorizontal: 20,
          paddingVertical: 16,
        }
      ]}>
        <Text header black semiBold style={{marginBottom: 6}}>
          {hospitalName} 
        </Text>
        <Text normal grey regular style={{marginBottom: 3}}>
          {address}
        </Text>
        <View style={styles.directMap}>
          <Icon
            name="location-pin"
            size={17}
            color="rgb(75,102,234)"
          />
          <Text normal periBlue regular style={{marginLeft: 4}}>
            Direct Maps
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  directMap: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 22.5
  },
});
