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
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        
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

      <TouchableOpacity activeOpacity={0.7} style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar perfil</Text>
      </TouchableOpacity>
    </View>
  );
}