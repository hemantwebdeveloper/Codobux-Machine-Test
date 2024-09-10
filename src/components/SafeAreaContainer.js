import React from 'react'
import { SafeAreaView } from 'react-native'
import { COLORS } from '../theme/colors'

function SafeAreaContainer({children}) {
  return (
    <SafeAreaView style={{backgroundColor:`${COLORS.lightGray}40`,flex:1}}>
        {children}
    </SafeAreaView>
  )
}

export default SafeAreaContainer;