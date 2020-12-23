/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Provider } from 'react-redux';
import TodoApp from './screen/TodoApp';
import { todos } from './redux/store';
export default function App() {
  return (
    <Provider store={todos}>
      <TodoApp />
    </Provider>
  )
}