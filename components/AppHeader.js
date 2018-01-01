import React from  'react'
import { Header } from  'react-native-elements'

const AppHeader = () => (
        <Header
          //header
          centerComponent={{ text: 'Simple Youtube Search', style: { color: 'white' } }}
          outerContainerStyles={{ backgroundColor: '#E62117' }}
        />
    )


export default AppHeader