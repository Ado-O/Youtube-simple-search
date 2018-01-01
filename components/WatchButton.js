import React from 'react'
import { Button } from  'react-native-elements'
import { WebBrowser } from  'expo'

const WatchButton = ({ videId }) => (
    <Button 
    raised
    title="Watch on Youtube"
    icon={{ name: 'play-arrow' }}
    containerViewStyle={{ marginTop: 10 }}
    backgroundColor="#E62117"
    onPress={() => {
        WebBrowser.openBrowserAsync(
            'https://m.youtube.com/watch?v=${videoId}'
        )
    }}
    />
)

export default WatchButton