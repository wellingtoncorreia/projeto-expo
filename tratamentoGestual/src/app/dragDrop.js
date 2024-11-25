import React, { useState } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';

const App = () => {
  const [pan, setPan] = useState({ x: 0, y: 0 });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      setPan({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: () => {
      setPan({ x: 0, y: 0 });
    },
  });

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
          },
        ]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default App;