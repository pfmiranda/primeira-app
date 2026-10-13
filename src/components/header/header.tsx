import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


type HeaderProps = {
  title: string;
  subtitle?: string;
}



export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#908f94',
    fontSize: 18,
    textAlign: 'center',
  },
})
