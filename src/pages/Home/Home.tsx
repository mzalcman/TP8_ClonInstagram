import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import FeedHeader from "../../components/FeedHeader/FeedHeader";
import FeedCard from "../../components/FeedCard/FeedCard";
import { catService } from "../../services/catService";
import { Post as PostInterface } from "../../interfaces/Post";
import { HomeStackParamList } from "../../navigation/types";
import { styles } from "./Styles";
import StoriesList from "../../components/StoriesList/StoriesList";

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Home">;

export default function Home() {
  const navigation = useNavigation<NavigationProp>();
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadFeed = async () => {
      try {
        const data = await catService.getFeedPosts(12);
        setPosts(data);
      } catch (error) {
        console.error("Error al cargar el feed en Home:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFeed();
  }, []);

  const renderItem = ({ item }: { item: PostInterface }) => (
    <FeedCard
      userId={item.userId}
      avatarUrl={item.avatarUrl}
      location={item.location}
      imageUrl={item.imageUrl}
      caption={item.caption}
      initialLikes={item.likesCount}
      onPressPost={() => navigation.navigate("Post", { id: item.id })}
    />
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
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}

        ListHeaderComponent={
          <View style={{ backgroundColor: '#FFFFFF' }}>
            <FeedHeader />
            <StoriesList
              storyAvatars={[
                "https://i.pravatar.cc/150?img=40",
                "https://i.pravatar.cc/150?img=41",
                "https://i.pravatar.cc/150?img=42",
                "https://i.pravatar.cc/150?img=43",
                "https://i.pravatar.cc/150?img=44",
                "https://i.pravatar.cc/150?img=45",
              ]}
            />
          </View>
        }
      />
    </SafeAreaView>
  );
}