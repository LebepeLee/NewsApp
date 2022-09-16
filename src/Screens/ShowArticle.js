import React, { useState } from 'react'
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Articles from './src/Components/Articles'
import Category from './src/Components/Category'
import Home from './src/Screens/Home'

function ShowArticle(props) {
    props.navigation.setOptions({
        title: props.route.params.category,
      });
      const [news, setNews] = useState([
        {
          title:title,
          name:name,
          description:description,
          content:content,
          published:published,
        }
      ])
  
      const [name, setName] = useState('')
   
  
      fetch(
        `https://newsapi.org/v2/top-headlines?category=${props.route.params.category}&country=za&apiKey=03f7d8c881314fef9e42867b5062785a`,
      )
        .then(res => res.json())
        .then(response => {
          setData({
            news: response.articles,
          });
        })
        .catch(error => {
          console.log(error);
        });
  return (
<SafeAreaView style={{alignItems: 'center'}}>
        {news.length === 0 ? (
          <ActivityIndicator
            style={{
              height: deviceHeight,
              width: deviceWidth,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            size="large"
            color="black"
          />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {news.map((news, index) =>
              news.urlToImage ? (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    props.navigation.navigate('Home')
                  }>
                  <SafeAreaView
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      backgroundColor: 'white',
                      borderRadius: 10,
                      elevation: 4,
                      width: deviceWidth - 30,
                      marginVertical: 7,
                    }}>
                    <Image
                      source={{uri: `${news.urlToImage}`}}
                      style={{height: 100, width: 100, borderRadius: 10}}
                    />
                    <Text
                      style={{
                        width: deviceWidth - 130,
                        paddingLeft: 10,
                        paddingTop: 5,
                      }}>
                      {news.title}
                    </Text>
                    <Text
                      style={{
                        width: deviceWidth - 130,
                        paddingLeft: 10,
                        paddingTop: 5,
                      }}>
                      {news.publishedAt}
                    </Text>
                    <Text
                      style={{
                        width: deviceWidth - 130,
                        paddingLeft: 10,
                        paddingTop: 5,
                      }}>
                      {news.name}
                    </Text>
                    <Text
                      style={{
                        width: deviceWidth - 130,
                        paddingLeft: 10,
                        paddingTop: 5,
                      }}>
                      {news.description}
                    </Text>
                    <Text
                      style={{
                        width: deviceWidth - 130,
                        paddingLeft: 10,
                        paddingTop: 5,
                      }}>
                      {news.content}
                    </Text>

                    <Button 
                      style={{
                        width: deviceWidth - 130,
                        paddingLeft: 10,
                        paddingTop: 5,
                      }}
                    >Visit Site</Button>
                  </SafeAreaView>
                </TouchableOpacity>
              ) : null,
            )}
          </ScrollView>
        )}
      </SafeAreaView>
  )
}

export default ShowArticle