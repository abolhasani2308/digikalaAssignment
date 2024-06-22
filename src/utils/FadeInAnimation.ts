import {Animated} from 'react-native';

export default function FadeInAnimation(fadeAnim: any): void {
  function fadeIn() {
    return Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    });
  }
  function fadeOut() {
    return Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    });
  }

  fadeOut().start();
  setTimeout(() => {
    fadeIn().start();
  }, 1);
}
