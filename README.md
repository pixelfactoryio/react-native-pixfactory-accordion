# react-native-pixfactory-accordion

*Animated Accordion component for React Native using react-native-collapsible* [https://github.com/oblador/react-native-collapsible](https://github.com/oblador/react-native-collapsible)

This component is heavily inspired by the `<Accordion />` component shiped with [react-native-collapsible](https://github.com/oblador/react-native-collapsible). The inspiration to make this component came from this one [https://github.com/naoufal/react-native-accordion](https://github.com/naoufal/react-native-accordion), but as react-native-collapsible is using `Animated`, I decided to write my own component based on `<Collapsible />`.

## Installation

```
npm install --save react-native-pixfactory-accordion
```

## PixAccordion Usage

```js
import PixAccordion from 'react-native-pixfactory-accordion';
...
<PixAccordion
	renderHeader={() => <Header />}
	easing="bounce"
>
	<Content />
</PixAccordion>
```

## Properties

| Prop | Description |
|---|---|---|
|**`renderHeader()`**|A function that should return a renderable representing the header|
|**`renderContent(content, index, isActive)`**|A function that should return a renderable representing the content|
|**`onChange()`**|An optional function that is called a change occurs|
|**`underlayColor`**|The color of the underlay that will show through when tapping on headers. Defaults to transparent. |

Since this `<PixAccordion />` is based on `react-native-collapsible` you can use any of `<Collapsible />` props, like `easing`, `duration` ... The list can be found here :  
[https://github.com/oblador/react-native-collapsible/blob/master/README.md](https://github.com/oblador/react-native-collapsible/blob/master/README.md)

## Demo

TweetBot like menu with `bounce` effect. Check `Example` folder for more details. (please not that the example is using placeholder images instead of full TweetBot implementation)

![PixAccordionDemo](https://dl.dropboxusercontent.com/u/2257959/PixAccordion.gif "PixAccordion Demo")


## Example

Check `Example` folder for more details :

```js
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import PixAccordion from 'react-native-pixfactory-accordion';
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

```



# CHANGELOG
- 0.1.0 : Initial start
- 0.2.0 : First Release


## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Amine Benseddik (pixelfactory.io) 2016
