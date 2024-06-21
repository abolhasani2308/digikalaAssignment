import React from 'react';
import animation from '../../assets/images/index';
import BaseListState from '../base-list-state/BaseListState.component';

export default function ListLoading(): React.JSX.Element {
  return <BaseListState text={'loading'} animationSource={animation.loading} />;
}
