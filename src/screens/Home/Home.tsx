import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { fetchUsers, fetchPosts } from '../../services/api';
import styles from './style';
import { Post } from '../../components';

const POST_PAGE_SIZE = 10;

type PostType = {
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
  const [posts, setPosts] = useState<PostType[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [likes, setLikes] = useState<Record<number, boolean>>({});

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(() => {});
  }, []);

  const loadPosts = async (nextPage = page) => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const data: PostType[] = await fetchPosts(nextPage, POST_PAGE_SIZE);
      if (data.length < POST_PAGE_SIZE) setHasMore(false);
      setPosts(prev => [...prev, ...data]);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts(page);
  }, [page]);

  const getUser = (userId: number): User | undefined => users.find(u => u.id === userId);

  const handleLike = (postId: number) => {
    setLikes(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  const renderItem = ({ item }: { item: PostType }) => (
    <Post
      post={item}
      user={getUser(item.userId)}
      liked={!!likes[item.id]}
      onLike={handleLike}
    />
  );

  const renderFooter = () => (
    loading ? <ActivityIndicator testID="ActivityIndicator" style={styles.footerLoading} /> : null
  );

  return (
    <FlatList
      testID="FlatList"
      data={posts}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      onEndReached={() => setPage(p => p + 1)}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
    />
  );
}
