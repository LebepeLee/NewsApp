import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Articles from './src/Components/Articles'
import Category from './src/Components/Category'
import ShowArticle from './src/Screens/ShowArticle';
import Home from './src/Screens/Home'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trending" component={Home} />
        <Stack.Screen name="Categories" component={Category} />
        <Stack.Screen name='News' component={Articles} options={title}/>
        <Stack.Screen name='Article' component={ShowArticle} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;