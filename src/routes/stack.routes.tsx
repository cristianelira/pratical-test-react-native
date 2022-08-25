import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
const { Navigator, Screen } = createStackNavigator()
import { Home } from '../screens/Home'
import { Category } from '../screens/Category'
import { Book } from '../screens/Book'


export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Category" component={Category} />
      <Screen name="Book" component={Book} />
    </Navigator>
  )
}