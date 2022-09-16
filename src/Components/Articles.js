import React, { useState } from 'react'
import Category from './src/Components/Category'
import ShowArticle from './src/Screens/ShowArticle';
import Home from './src/Screens/Home'

function Articles(props) {
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


    const fetchNews = (props) => {
        const url = `https://newsapi.org/v2/top-headlines?category=${props.route.params.category}&country=za&apiKey=03f7d8c881314fef9e42867b5062785a`
       

        useEffect(() => {
            fetchNews(url).then((response) => response.json())
            .then((json) => setNews(json.articles))
            .catch((error) => alert('failed to get news'))
            .finally(setIsLoading(false))
        }, [])
  return (
      <SafeAreaView>
        {news.length === 0 ? (
          <ActivityIndicator color="black" size="large" />
        ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {news.map((news, index) => (
                <TouchableOpacity key={index} onPress={() => props.navigation.navigate('ShowArticle', {
                    url: news.url
                })}>
              <SafeAreaView style={{margin: 10}}>
                <Image
                  source={{uri: `${news.urlToImage}`}}
                  style={{height: 200, width: 200, borderRadius: 10}}
                />
                <Text style={{width: 200, textAlign: 'justify'}}>
                  {news.title}
                </Text>
                <Text
                     style={{width: 200, textAlign: 'justify'}}  >
                        {news.publishedAt}
                      </Text>
              </SafeAreaView>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </SafeAreaView>
  )
}
}

export default Articles
  
