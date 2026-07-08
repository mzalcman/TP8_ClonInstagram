import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./Styles";

interface ProfileHeaderProps {
  username: string;
  avatarUrl: string;
  bio: string;
  postsCount: number;
}

export default function ProfileHeader({ username, avatarUrl, bio, postsCount }: ProfileHeaderProps) {
  return (
    <View style={styles.container}>

      <View style={styles.topRow}>
        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM5Q7GZAf_khCWkXmI9617p06a_w5QFLZiGWAyUPI5-Q&s=10" }} style={styles.avatar} />

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{postsCount}</Text>
            <Text style={styles.statLabel}>Publicaciones</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>1.250</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>348</Text>
            <Text style={styles.statLabel}>Seguidos</Text>
          </View>
        </View>
      </View>

      <View style={styles.bioContainer}>
        <Text style={styles.nameText}>{username}</Text>
        <Text style={styles.bioText}>{bio}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.editButton} activeOpacity={0.7}>
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.editButton} activeOpacity={0.7}>
          <Text style={styles.editButtonText}>Compartir Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}