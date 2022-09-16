import React,{useState} from 'react'
import {ScrollView, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import Articles from './src/Components/Articles'
import ShowArticle from './src/Screens/ShowArticle';
import Home from './src/Screens/Home'

function Category(props) {
    const categories = [
        'Entertainment',
        'Business',
        'Politics',
        'Health',
        'Technology',
        'Sports',
      ];
    

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    {categories.map((category, index) => (
      <TouchableOpacity
        key={index}
        onPress={() =>
          props.navigation.navigate('Articles', {
            category,
          })
        }>
        <SafeAreaView>
          <Text
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: 'black',
              fontSize: 19,
              margin: 10,
              borderRadius: 10,
            }}>
            {category}
          </Text>
        </SafeAreaView>
      </TouchableOpacity>
         ))}
         </ScrollView>
  )
}

export default Category