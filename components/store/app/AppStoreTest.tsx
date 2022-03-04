import React from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store';
import {decrement, increment} from './appSlice';

export function AppStoreTest() {
  const testCount = useSelector((state: RootState) => state.app.test);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>{testCount}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
}
