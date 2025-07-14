import React from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userImage from '../../assets/icons/user_active.png';
import styles from './style';

const DEFAULT_PROFILE = {
  name: 'John Doe',
  email: 'john@example.com',
  bio: 'This is your bio. Edit it to tell us about yourself!'
};

export default function ProfileScreen() {
  const [editing, setEditing] = React.useState(false);
  const [profile, setProfile] = React.useState(DEFAULT_PROFILE);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem('userProfile');
        if (stored) {
          setProfile(JSON.parse(stored));
        } else {
          await AsyncStorage.setItem('userProfile', JSON.stringify(DEFAULT_PROFILE));
        }
      } catch (e) {
      }
      setLoading(false);
    })();
  }, []);

  const handleSave = async () => {
    try {
      await AsyncStorage.setItem('userProfile', JSON.stringify(profile));
      setEditing(false);
      Alert.alert('Profile saved!');
    } catch (e) {
      Alert.alert('Failed to save profile');
    }
  };

  if (loading) return <ActivityIndicator testID="ActivityIndicator" style={{ flex: 1, alignSelf: 'center' }} />;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#f7f7f7' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={userImage} style={styles.profileImage} />
        </View>
        <View style={styles.fieldsContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="Name"
            value={profile.name}
            onChangeText={name => setProfile(p => ({ ...p, name }))}
            style={[styles.input, !editing && styles.inputDisabled]}
            editable={editing}
            selectTextOnFocus={editing}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Email"
            value={profile.email}
            onChangeText={email => setProfile(p => ({ ...p, email }))}
            style={[styles.input, !editing && styles.inputDisabled]}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={editing}
            selectTextOnFocus={editing}
          />
          <Text style={styles.label}>Bio</Text>
          <TextInput
            placeholder="Bio"
            value={profile.bio}
            onChangeText={bio => setProfile(p => ({ ...p, bio }))}
            style={[styles.input, { height: 80, textAlignVertical: 'top' }, !editing && styles.inputDisabled]}
            multiline
            editable={editing}
            selectTextOnFocus={editing}
          />
          <View style={{ marginTop: 24 }}>
            {editing ? (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title="Save" onPress={handleSave} />
                <Button title="Cancel" onPress={() => setEditing(false)} color="gray" />
              </View>
            ) : (
              <TouchableOpacity style={styles.editButton} onPress={() => setEditing(true)}>
                <Text style={styles.editButtonText}>Edit Profile</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
} 