/*
 * @Author: wzx 
 * @Date: 2016-12-26 04:09:46 
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-26 05:48:47
 */
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import MovieContainer from './readingContainer';
import TabBar from '../components/tabBar';

const styles = StyleSheet.create({
  /**
   * iOS平台下, react-native-scrollable-tab-view是用ScrollView实现的
   * 当react-native-scrollable-tab-view嵌套react-native-viewpager时, 需要给react-native-scrollable-tab-view的子View设置overflow='hidden',
   * ScrollView的removeClippedSubviews才能起作用, 将不在屏幕可视范围的视图移除掉.
   */
  subView: {
    overflow: 'hidden'
  }
});

//tabbar图片资源
const TAB_BAR_RESOURCES = [
  [require('../image/home.png'), require('../image/home_active.png')],
  [require('../image/reading.png'), require('../image/reading_active.png')],
];

class MainContainer extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <ScrollableTabView
        tabBarPosition="bottom"
        locked={true}
        scrollWithoutAnimation={true}
        prerenderingSiblingsNumber={4}
        renderTabBar={() => {
          /*使用自定义tabbar*/
          return <TabBar tabBarResources={TAB_BAR_RESOURCES}/>
        }}>
        <ReadingContainer style={styles.subView}/>
      </ScrollableTabView>
    );
  }
}

export default MainContainer;
