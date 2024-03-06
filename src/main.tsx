import { WebView } from 'react-native-webview';
import { SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export const MainView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: 'https://bothellmosque.org/new2024/' }} />
    </SafeAreaView>
  );
};
