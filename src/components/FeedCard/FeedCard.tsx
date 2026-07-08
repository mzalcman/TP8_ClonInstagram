import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react-native";
import { styles } from "./Styles";

interface FeedCardProps {
  userId: string;
  avatarUrl: string;
  location?: string;
  imageUrl: string;
  caption: string;
  initialLikes: number;
  onPressPost: () => void; 
}

export default function FeedCard({
  userId,
  avatarUrl,
  location = "Catland",
  imageUrl,
  caption,
  initialLikes,
  onPressPost,
}: FeedCardProps) {
  
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikes);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikesCount((prev) => prev + 1);
    }
  };

  return (
    <View style={styles.cardContainer}>

      <View style={styles.userInfoContainer}>
        <TouchableOpacity 
          style={styles.avatarNameWrapper} 
          activeOpacity={0.7} 
          onPress={onPressPost}
        >
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />
          <View>
            <Text style={styles.usernameText}>{userId}</Text>
            <Text style={styles.locationText}>{location}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.moreOptions}>•••</Text>
      </View>

      <TouchableOpacity activeOpacity={0.9} onPress={onPressPost}>
        <Image source={{ uri: imageUrl }} style={styles.postImage} />
      </TouchableOpacity>

      <View style={styles.actionsContainer}>
        <View style={styles.leftActions}>
          <TouchableOpacity onPress={handleLike} activeOpacity={0.7} style={styles.actionButton}>
            <Heart
              size={24}
              color={liked ? "#FF3040" : "#000000"}
              fill={liked ? "#FF3040" : "none"}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.actionButton} onPress={onPressPost}>
            <MessageCircle size={24} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.actionButton}>
            <Send size={24} color="#000000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Bookmark size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.likesText}>
          {likesCount.toLocaleString()} Me gusta
        </Text>
        <Text style={styles.captionText}>
          <Text style={styles.usernameBold} onPress={onPressPost}>{userId} </Text>
          {caption}
        </Text>
      </View>
    </View>
  );
}