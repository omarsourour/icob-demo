import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { MainView } from 'src/main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={false} hidden={false} />
      <MainView />
    </View>
  );
}
