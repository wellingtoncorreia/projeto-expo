import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Botao({texto}) {
    <TouchableOpacity>
        <Text style={styles.container}>{texto}</Text>
    </TouchableOpacity>
}

export const styles = StyleSheet.create({
    container: {
      fontSize: 14,
      fontWeight: "700",
      color:"#f0f0f0"
    },
  });