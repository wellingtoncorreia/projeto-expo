import * as React from 'react';
import { Appbar, Avatar, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function App() {
  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.navigate('/')} />
        <Appbar.Content title="menu" />
        <Appbar.Action icon="calendar" onPress={() => { }} />
        <Appbar.Action icon="table" onPress={() => router.navigate('tables')} />
      </Appbar.Header>
    </SafeAreaView>
  );
}

