import React from 'react';
import animation from '../../assets/images/index';
import BaseListState from '../base-list-state/BaseListState.component';
import styles from './ListEmpty.styles';

export default function ListEmpty(): React.JSX.Element {
  return (
    <BaseListState
      text={'noItems'}
      animationSource={animation.empty}
      containerStyle={styles.container}
      animationStyle={styles.animation}
    />
  );
}
