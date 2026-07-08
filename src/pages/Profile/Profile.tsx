import React, { useEffect, useState } from "react";
import { View, FlatList, Image, Dimensions, ActivityIndicator, ScrollView, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Grid, Bookmark, UserSquare } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import { catService } from "../../services/catService";
import { Post } from "../../interfaces/Post";
import { styles } from "./Styles";

const { width } = Dimensions.get("window");
const COLUMN_SIZE = width / 3;

const HIGHLIGHTS = [
  { id: "1", title: "Viajes ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyUwFyFHnfKZub_37FECrDWZhzj-0boNRqRHMI8uG50WP2gphBkDOt2IE&s=10" },
  { id: "2", title: "Comidas ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl4jRfQJ0TdK19_ye2vPyScpOBabcKttLEADykzJx4PLmQwUy64lJ7BZM&s=10" },
  { id: "3", title: "Amigos ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNH7N6UN21LjvafWgyvW_2zTj3EZBXIVHnUnEOTOaJEbQq9jg7qRYetNc&s=10" },
  { id: "4", title: "Gym ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHt1-BWBNzKAqKbT6F_oPUwFLJvimdedj2fMwm7yESvYJVoHAeqPGe0cA&s=10" },
];

export default function Profile() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("grid");

  useEffect(() => {
    const fetchProfilePosts = async () => {
      try {
        const data = await catService.getFeedPosts(12);
        setPosts(data);
      } catch (error) {
        console.error("Error cargando fotos de perfil:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfilePosts();
  }, []);

  const renderGridItem = ({ item }: { item: Post }) => (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.gridItemContainer}
      onPress={() => {
      
        navigation.navigate("HomeStack", {
          screen: "Post",
          params: {
            id: item.id,
            postData: item,
            fromProfile: true
          }
        });
      }}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.gridImage} />
    </TouchableOpacity>
  );

  const renderHeaderLayout = () => (
    <View style={styles.headerLayoutWrapper}>
      <ProfileHeader
        username="michi_pro"
        avatarUrl="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&auto=format&fit=crop&q=60"
        bio="Gato influencer de tiempo completo. Amante del atún y de tirar vasos de la mesa. Buenos Aires, Argentina"
        postsCount={posts.length}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.highlightsContainer}
      >
        {HIGHLIGHTS.map((item) => (
          <View key={item.id} style={styles.highlightItem}>
            <View style={styles.highlightRing}>
              <Image source={{ uri: item.image }} style={styles.highlightImage} />
            </View>
            <Text style={styles.highlightText} numberOfLines={1}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "grid" && styles.activeTabButton]}
          onPress={() => setActiveTab("grid")}
        >
          <Grid size={22} color={activeTab === "grid" ? "#000000" : "#8E8E8E"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "tags" && styles.activeTabButton]}
          onPress={() => setActiveTab("tags")}
        >
          <UserSquare size={22} color={activeTab === "tags" ? "#000000" : "#8E8E8E"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "saved" && styles.activeTabButton]}
          onPress={() => setActiveTab("saved")}
        >
          <Bookmark size={22} color={activeTab === "saved" ? "#000000" : "#8E8E8E"} />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000000" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <FlatList
        data={posts}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        ListHeaderComponent={renderHeaderLayout}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}