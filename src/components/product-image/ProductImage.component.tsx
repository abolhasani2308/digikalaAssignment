import React from 'react';
import FastImage from 'react-native-fast-image';
import styles from './ProductImage.styles';
import {ProductImageProps} from './ProductImage.types';

export default function ProductImage(
  props: ProductImageProps,
): React.JSX.Element {
  const {uri, containerStyle} = props;

  return (
    <FastImage
      style={[styles.container, containerStyle]}
      source={{
        uri: uri,
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
}
