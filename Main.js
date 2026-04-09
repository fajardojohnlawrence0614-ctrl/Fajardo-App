import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Main({ setIsLoggedIn }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Dashboard</Text>
      <Text>You are successfully logged in!</Text>
      <View style={{ marginTop: 20 }}>
        <Button 
          title="Logout" 
          onPress={() => setIsLoggedIn(false)} 
          color="red" 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 10 }
});
