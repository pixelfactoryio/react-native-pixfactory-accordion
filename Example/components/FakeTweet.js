import React from 'react';
import { Image } from 'react-native';

const FakeTweet = (props) => {
  const { image } = props;
  return (
    /* Cheating here :) using images as placeholders for demo purpose */
    <Image source={image} />
  );
};

export default FakeTweet;
