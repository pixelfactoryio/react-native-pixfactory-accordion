import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import PixAccordion from 'react-native-pixaccordion';
import StatusBarBackground from './components/StatusBarBackground';
import SubMenu from './components/SubMenu';
import FakeTweet from './components/FakeTweet';

const fake_tweets = [
  { id: 0, easing: 'bounce', collapsed: false, img: require('./fake_tweets/tweetbot0.png') },
  { id: 1, easing: 'easeOutSin', collapsed: true, img: require('./fake_tweets/tweetbot1.png') },
  { id: 2, easing: 'cubic', collapsed: true, img: require('./fake_tweets/tweetbot2.png') },
];

class Example extends Component {

  _handleChange(id) {
    console.log('Changed happened on Item:', id);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBarBackground />
        <ScrollView>
          {fake_tweets.map((tweet) =>
            <PixAccordion
              key={tweet.id}
              renderHeader={() => <FakeTweet image={tweet.img} />}
              easing={tweet.easing}
              onChange={() => this._handleChange(tweet.id)}
              collapsed={tweet.collapsed}
            >
              <SubMenu />
            </PixAccordion>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

export default Example;
