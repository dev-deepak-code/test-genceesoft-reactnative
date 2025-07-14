import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  ListRenderItemInfo,
} from 'react-native';
import heartLike from '../../assets/icons/heart_like.png';
import heartUnlike from '../../assets/icons/heart_unlike.png';
import {fetchUsers, fetchPosts} from '../../services/api';
import styles from './style';

const POST_PAGE_SIZE = 10;

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type User = {
  id: number;
  name: string;
};

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [likes, setLikes] = useState<Record<number, boolean>>({});

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(error => {});
  }, []);

  const loadPosts = async (nextPage = page) => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const data: Post[] = await fetchPosts(nextPage, POST_PAGE_SIZE);
      if (data.length < POST_PAGE_SIZE) setHasMore(false);
      setPosts(prev => [...prev, ...data]);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts(page);
  }, [page]);

  const getUser = (userId: number): User | undefined =>
    users.find(u => u.id === userId);

  const handleLike = (postId: number) => {
    setLikes(prev => ({...prev, [postId]: !prev[postId]}));
  };

  const renderItem = ({item}: ListRenderItemInfo<Post>) => {
    const user = getUser(item.userId);
    const avatarUrl = `https://i.pravatar.cc/150?img=${item.userId}`;
    const imageUrl = `https://picsum.photos/id/${item.id + 10}/300/200`;

    return (
      <SafeAreaView>
        <View style={styles.postContainer}>
          <View style={styles.userRow}>
            <Image source={{uri: avatarUrl}} style={styles.avatar} />
            <Text style={styles.userName}>{user?.name || 'User'}</Text>
          </View>
          <Text style={styles.postTitle}>{item.title}</Text>
          <Image source={{uri: imageUrl}} style={styles.postImage} />
          <Text style={styles.postBody}>{item.body}</Text>
          <View style={styles.likeRow}>
            <TouchableOpacity
              onPress={() => handleLike(item.id)}
              style={{marginRight: 10}}
              testID={`like-button-${item.id}`}>
              <Image
                source={likes[item.id] ? heartLike : heartUnlike}
                style={styles.likeIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text>{likes[item.id] ? 1 : 0} Likes</Text>
          </View>
          <TouchableOpacity style={styles.commentsButton}>
            <Text style={styles.commentsText}>View Comments (mock)</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <FlatList
      testID="FlatList"
      data={posts}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      onEndReached={() => setPage(p => p + 1)}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        loading ? (
          <ActivityIndicator
            testID="ActivityIndicator"
            style={styles.footerLoading}
          />
        ) : null
      }
    />
  );
}
