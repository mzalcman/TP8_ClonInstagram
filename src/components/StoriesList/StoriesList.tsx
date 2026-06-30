import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { Plus } from "lucide-react-native";
import { styles } from "./Styles";

// Datos simulados para las historias de otros usuarios (con fotos de gatos)
const DUMMY_STORIES = [
  { id: "1", username: "cat_lover99", avatar: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=150" },
  { id: "2", username: "garfield_real", avatar: "https://images.unsplash.com/photo-1574158622643-69d34d72650a?w=150" },
  { id: "3", username: "pawsome_cat", avatar: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150" },
  { id: "4", username: "salem_magic", avatar: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=150" },
  { id: "5", username: "whiskers_m", avatar: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=150" },
];

export default function StoriesList() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {/* Tu Historia (Botón de agregar con el signo +) */}
      <TouchableOpacity activeOpacity={0.8} style={styles.storyWrapper}>
        <View style={styles.myAvatarContainer}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150" }} // Tu foto de perfil
            style={styles.avatar}
          />
          {/* El circulito azul con el "+" típico de Instagram */}
          <View style={styles.plusButton}>
            <Plus size={12} color="#FFFFFF" strokeWidth={3} />
          </View>
        </View>
        <Text style={styles.usernameText} numberOfLines={1}>Tu historia</Text>
      </TouchableOpacity>

      {/* Historias de los demás usuarios */}
      {DUMMY_STORIES.map((story) => (
        <TouchableOpacity key={story.id} activeOpacity={0.8} style={styles.storyWrapper}>
          {/* Aro con el gradiente/borde característico de historia activa */}
          <View style={styles.activeStoryRing}>
            <Image source={{ uri: story.avatar }} style={styles.avatar} />
          </View>
          <Text style={styles.usernameText} numberOfLines={1}>{story.username}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}