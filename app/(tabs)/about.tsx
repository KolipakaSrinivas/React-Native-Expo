import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to StickerSmash!</Text>
      <Text style={styles.paragraph}>
        StickerSmash is a creative photo editing app built with React Native and Expo. 
        Add, move, and customize stickers on your favorite photos with ease!
      </Text>
      <Text style={styles.paragraph}>
        🚀 Enjoy a fast and smooth experience on both iOS and Android devices.  
        ✨ Share your sticker-enhanced photos instantly on social media.
      </Text>
      <Text style={styles.paragraph}>
        Whether you're creating memes or adding a fun twist to your pictures, 
        StickerSmash makes it simple and fun!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#25292e",
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff',
  },
});

export default AboutApp;
