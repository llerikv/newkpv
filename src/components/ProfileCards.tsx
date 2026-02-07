import { HelloWave } from "@/components/hello-wave";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Text } from "@react-navigation/elements";
import { Image } from "expo-image";
import { Pressable, StyleSheet } from "react-native";
    export default function Greeting() {
    return <Text>Hgggi</Text>;
    }    
    export function ProfileCards() {
      const userName = "Lerik";
      const studentName = "Lerik";
      const courseName = "Mobile Application Development";
    
      const handleStart = () => {
        console.log("Начать нажато");
      };
    
      return (
        <ThemedView style={styles.container}>
          <ThemedText type="title" style={styles.title}>
            Welcome, {userName} 👋
          </ThemedText>
    
          <HelloWave />
    
          <Image
            source={require("../assets/images/ya.jpg")}
            style={styles.photo}
          />
    
          <ThemedText style={styles.description}>
            Это место только для тебя.{"\n"}
            Здесь можно быть честным с собой,{"\n"}
            записывать мысли, чувства и маленькие моменты своей жизни 🤍
          </ThemedText>
    
          {/* карточки */}
          <ThemedView style={styles.card}>
            <ThemedText style={styles.cardTitle}>Имя студента</ThemedText>
            <ThemedText style={styles.cardText}>{studentName}</ThemedText>
          </ThemedView>
    
          <ThemedView style={styles.card}>
            <ThemedText style={styles.cardTitle}>Название курса</ThemedText>
            <ThemedText style={styles.cardText}>{courseName}</ThemedText>
          </ThemedView>
    
          {/* кнопка */}
          <Pressable style={styles.button} onPress={handleStart}>
            <ThemedText style={styles.buttonText}>Продолжить</ThemedText>
          </Pressable>
        </ThemedView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        alignItems: "center",
        padding: 20,
        gap: 16,
      },
      title: {
        textAlign: "center",
      },
      description: {
        textAlign: "center",
        fontSize: 16,
        opacity: 0.8,
      },
      photo: {
        width: 220,
        height: 220,
        borderRadius: 24,
      },
      card: {
        width: "100%",
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "rgba(255, 183, 135, 0.6)",
        backgroundColor: "rgba(255, 213, 181, 0.35)",
        alignItems: "center",
    
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 4,
      },
      cardTitle: {
        fontSize: 14,
        opacity: 0.6,
        marginBottom: 4,
      },
      cardText: {
        fontSize: 18,
        fontWeight: "600",
      },
      button: {
        marginTop: 24,
        backgroundColor: "#4A90E2",
        paddingVertical: 14,
        paddingHorizontal: 36,
        borderRadius: 16,
      },
      buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
      },
    });
    