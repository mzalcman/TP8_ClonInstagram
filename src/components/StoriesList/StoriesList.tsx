import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { Plus } from "lucide-react-native";
import { styles } from "./Styles";

interface StoriesListProps {
  storyAvatars: string[];
}

const USERNAMES = ["cat_lover99", "garfield_real", "pawsome_cat", "salem_magic", "whiskers_m", "kitty_cute", "michi_bello"];

export default function StoriesList({ storyAvatars }: StoriesListProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <TouchableOpacity activeOpacity={0.8} style={styles.storyWrapper}>
        <View style={styles.myAvatarContainer}>
          <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM5Q7GZAf_khCWkXmI9617p06a_w5QFLZiGWAyUPI5-Q&s=10" }} 
            style={styles.avatar}
          />
          <View style={styles.plusButton}>
            <Plus size={12} color="#FFFFFF" strokeWidth={3} />
          </View>
        </View>
        <Text style={styles.usernameText} numberOfLines={1}>Tu historia</Text>
      </TouchableOpacity>

      {storyAvatars.map((avatarUrl, index) => {
        const username = USERNAMES[index % USERNAMES.length];
        return (
          <TouchableOpacity key={index} activeOpacity={0.8} style={styles.storyWrapper}>
            <View style={styles.activeStoryRing}>
              <Image source={{ uri: avatarUrl }} style={styles.avatar} />
            </View>
            <Text style={styles.usernameText} numberOfLines={1}>{username}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}