import React from 'react';
import animation from '../../assets/images/index';
import BaseListState from '../base-list-state/BaseListState.component';
import styles from './ListLoading.styles';

export default function ListLoading(): React.JSX.Element {
  return (
    <BaseListState
      animationSource={animation.loading}
      animationStyle={styles.animation}
      isLoop
    />
  );
}
