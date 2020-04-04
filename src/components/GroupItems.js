import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Constants, images} from '../const';
import {Color} from '../utils';
import {TextCmp} from '.';
function GroupsItem({item, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.container2}>
        <Image source={images.logo} style={styles.Image} />
        <View style={styles.conatainer1}>
          <TextCmp style={styles.groupTitle}>{item.groupName}</TextCmp>
          <TextCmp style={styles.groupMembers}>{item.groupMembers}</TextCmp>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    width: Constants.screenWidth,
    backgroundColor: '#fff',
    padding: 10,
  },
  descriptionContainer: {
    margin: 5,
  },
  Image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    shadowColor: Color.gray,
    shadowOffset: {height: 1, width: 1},
    shadowRadius: 2,
    backgroundColor: Color.theme,
  },
  groupTitle: {
    color: Color.black,
    fontSize: 14,
    fontWeight: '400',
    marginHorizontal: 10,
  },
  groupMembers: {
    color: Color.smoke,
    fontSize: 14,
  },
  separator: {
    height: 0.5,
    width: Constants.width,
    backgroundColor: Color.theme,
  },
  container1: {justifyContent: 'center'},
  container2: {
    flexDirection: 'row',
    flex: 1,
  },
});

export default GroupsItem;
