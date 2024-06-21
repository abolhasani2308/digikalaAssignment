import React from 'react';
import animation from '../../assets/images/index';
import BaseListState from '../base-list-state/BaseListState.component';

export default function ListError(): React.JSX.Element {
  return <BaseListState text={'error'} animationSource={animation.error} />;
}
