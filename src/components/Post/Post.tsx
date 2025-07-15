import React from 'react';
import { View, Text, Image, SafeAreaView, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { Button } from '..';
import { heart_like, heart_unlike } from '../../assets/icons';
import styles from './style';

interface PostProps {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  user?: { id: number; name: string };
  liked: boolean;
  onLike: (postId: number) => void;
  commentsLabel?: string;
  onCommentsPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const Post: React.FC<PostProps> = ({ post, user, liked, onLike, commentsLabel = 'View Comments (mock)', onCommentsPress, style }) => {
  const avatarUrl = `https://i.pravatar.cc/150?img=${post.userId}`;
  const imageUrl = `https://picsum.photos/id/${post.id + 10}/300/200`;

  return (
    <SafeAreaView>
      <View style={[styles.postContainer, style]}>
        <View style={styles.userRow}>
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />
          <Text style={styles.userName}>{user?.name || 'User'}</Text>
        </View>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Image source={{ uri: imageUrl }} style={styles.postImage} />
        <Text style={styles.postBody}>{post.body}</Text>
        <View style={styles.likeRow}>
          <TouchableOpacity
            onPress={() => onLike(post.id)}
            style={styles.likeButton}
            testID={`like-button-${post.id}`}
          >
            <Image
              source={liked ? heart_like : heart_unlike}
              style={styles.likeIcon}
              resizeMode="contain"
            />
            <Text style={[styles.likeText, liked ? styles.liked : styles.unliked]}>{liked ? 'Unlike' : 'Like'}</Text>
          </TouchableOpacity>
          <Text>{liked ? 1 : 0} Likes</Text>
        </View>
        <Button
          onPress={onCommentsPress || (() => {})}
          title={commentsLabel}
          style={styles.commentsButton}
          textStyle={styles.commentsText}
        />
      </View>
    </SafeAreaView>
  );
};

export default Post; 