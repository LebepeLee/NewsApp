import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Articles from './src/Components/Articles'
import Category from './src/Components/Category'
import ShowArticle from './src/Screens/ShowArticle';


function Home(props) {
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
 

    const fetchNews = () => {
        const url = `https://newsapi.org/v2/top-headlines?country=za&category=${props.route.params.category}business&apiKey=03f7d8c881314fef9e42867b5062785a`
      

        useEffect(() => {
            fetchNews(url).then((response) => response.json())
            .then((json) => setNews(json.articles))
            .catch((error) => alert('failed to get news'))
          
        }, [])
        return (
            <SafeAreaView>
        <Categories navigation={props.navigation} />
        <TrendingNews navigation={props.navigation} />
        <SafeAreaView style={{alignItems: 'center'}}>
          {news.length === 0 ? (
            <SafeAreaView
            style={{
              width: deviceWidth,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator color="black" size="large" />
          </SafeAreaView>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              {news.map((news, index) =>
                news.urlToImage ? (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      props.navigation.navigate('Articles', {
                        url: news.url,
                      })
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
                    </SafeAreaView>
                  </TouchableOpacity>
                ) : null,
              )}
            </ScrollView>
          )}
        </SafeAreaView>
      </SafeAreaView>
        )
    }
}

    export default Home