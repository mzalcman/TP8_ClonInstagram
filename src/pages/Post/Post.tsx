import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { Heart, MessageCircle, Send, ChevronLeft } from "lucide-react-native";

import { HomeStackParamList } from "../../navigation/types";
import { styles } from "./Styles";

type PostScreenRouteProp = RouteProp<HomeStackParamList, "Post">;

const STATIC_COMMENTS = [
  { id: "1", user: "cat_lover99", text: "Qué michi tan hermoso! 😍" },
  { id: "2", user: "garfield_real", text: "Tiene cara de querer lasaña..." },
  { id: "3", user: "pawsome_cat", text: "Excelente foto, qué camarita usaron?" }
];

export default function Post() {
  const route = useRoute<PostScreenRouteProp>();
  const navigation = useNavigation();
  const { id } = route.params;

  const [liked, setLiked] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(342); 
  const [comments, setComments] = useState(STATIC_COMMENTS);
  const [newComment, setNewComment] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      setImageUrl(`https://api.thecatapi.com/v1/images/${id}`);
      setImageUrl(`https://cdn2.thecatapi.com/images/${id}.jpg`);
      setLoading(false);
    }
  }, [id]);

  const handleLikeToggle = () => {
    if (liked) {
      setLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikesCount((prev) => prev + 1);
    }
  };

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    const freshComment = {
      id: Date.now().toString(),
      user: "tu_usuario",
      text: newComment.trim()
    };
    setComments((prev) => [...prev, freshComment]);
    setNewComment("");
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000000" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>

      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ChevronLeft size={28} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Explorar publicaciones</Text>
        <View style={{ width: 28 }} /> 
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.authorContainer}>
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150" }} 
            style={styles.avatar} 
          />
          <Text style={styles.usernameText}>Detalle del Post (#{id})</Text>
        </View>

        {imageUrl && <Image source={{ uri: imageUrl }} style={styles.postImage} />}

        <View style={styles.actionsContainer}>
          <View style={styles.leftActions}>
            <TouchableOpacity onPress={handleLikeToggle} style={styles.actionButton}>
              <Heart size={24} color={liked ? "#FF3040" : "#000000"} fill={liked ? "#FF3040" : "none"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <MessageCircle size={24} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Send size={24} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.likesText}>{likesCount} Me gusta</Text>
          <Text style={styles.captionText}>
            <Text style={styles.usernameBold}>michi_user </Text>
            Miren este increíble gatito que encontré en la API externa de este gran TP! 🚀 #CatAPI
          </Text>
        </View>

        <View style={styles.commentsSection}>
          <Text style={styles.commentsTitle}>Comentarios</Text>
          {comments.map((comment) => (
            <View key={comment.id} style={styles.commentItem}>
              <Text style={styles.commentText}>
                <Text style={styles.usernameBold}>{comment.user} </Text>
                {comment.text}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Agrega un comentario..."
          placeholderTextColor="#999"
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity onPress={handleAddComment} disabled={!newComment.trim()}>
          <Text style={[styles.postCommentButtonText, !newComment.trim() && { opacity: 0.4 }]}>
            Publicar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}