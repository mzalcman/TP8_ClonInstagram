import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Styles";

export default function Post() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Detalle del Post</Text>
    </SafeAreaView>
  );
}