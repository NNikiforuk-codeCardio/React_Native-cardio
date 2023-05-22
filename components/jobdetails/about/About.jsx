import React from 'react';
import HTML from 'react-native-render-html';
import { View, Text, useWindowDimensions } from 'react-native'

import styles from './about.style'

const About = ({ info }) => {
  const {width} = useWindowDimensions();
  
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>
      <View style={styles.contextText}>
          <HTML source={{ html: info }} contentWidth={width} />
      </View>
    </View>
  )
}

export default About;
