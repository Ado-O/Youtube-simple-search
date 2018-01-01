import React from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search'
import { Header, Button } from 'react-native-elements'
import SearchBar from './components/SearchBar'
import AppHeader from './components/AppHeader'
import VideoList from './components/VideoList'
//key youtube
const API_KEY = 'AIzaSyDBLJTsr0rf8QlK4h36R8rJFDomKMn52Xc'

export default class App extends React.Component {
  state = {
    loading: false,
    videos: []
  }

  //lifecycle event, video koji izadje pod default
  componentWillMount() {
    this.searchYT('violin')
  }

  onPressSearch = term => {
    this.searchYT(term)
  }

  searchYT = term => {
    this.setState({ loading: true })
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({
        loading: false,
        videos
      })
    })
  }

  render() {
    const { loading, videos } = this.state

    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader />
        <SearchBar
          loading={loading}
          onPressSearch={this.onPressSearch}
        />
        <VideoList
          videos={videos}
        />
      </View>
    );
  }
}



