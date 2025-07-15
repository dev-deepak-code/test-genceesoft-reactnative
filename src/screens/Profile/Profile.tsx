import React from 'react';
import { View, Alert, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { getItem, setItem } from '../../utils/asyncStorageHelpers';
import { user_active } from '../../assets/icons';
import styles from './style';
import { Button, TextInput } from '../../components';

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
        const stored = await getItem('userProfile');
        if (stored) {
          setProfile(stored);
        } else {
          await setItem('userProfile', DEFAULT_PROFILE);
        }
      } catch (e) {
      }
      setLoading(false);
    })();
  }, []);

  const handleSave = async () => {
    try {
      await setItem('userProfile', profile);
      setEditing(false);
      Alert.alert('Profile saved!');
    } catch (e) {
      Alert.alert('Failed to save profile');
    }
  };

  if (loading) return <ActivityIndicator testID="ActivityIndicator" style={styles.loadingIndicator} />;

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={user_active} style={styles.profileImage} />
        </View>
        <View style={styles.fieldsContainer}>
          <TextInput
            label="Name"
            placeholder="Name"
            value={profile.name}
            onChangeText={name => setProfile(p => ({ ...p, name }))}
            style={[styles.input, !editing && styles.inputDisabled]}
            editable={editing}
            selectTextOnFocus={editing}
          />
          <TextInput
            label="Email"
            placeholder="Email"
            value={profile.email}
            onChangeText={email => setProfile(p => ({ ...p, email }))}
            style={[styles.input, !editing && styles.inputDisabled]}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={editing}
            selectTextOnFocus={editing}
          />
          <TextInput
            label="Bio"
            placeholder="Bio"
            value={profile.bio}
            onChangeText={bio => setProfile(p => ({ ...p, bio }))}
            style={[styles.input, styles.bioInput, !editing && styles.inputDisabled]}
            multiline
            editable={editing}
            selectTextOnFocus={editing}
          />
          <View style={styles.buttonRowContainer}>
            {editing ? (
              <View style={styles.buttonRow}>
                <Button title="Save" onPress={handleSave} style={styles.button} textStyle={styles.text} />
                <Button title="Cancel" onPress={() => setEditing(false)} style={[styles.button, { backgroundColor: 'gray' }]} textStyle={styles.text} />
              </View>
            ) : (
                <Button
                  style={styles.editButton}
                  textStyle={styles.text}
                  title="Edit Profile"
                  onPress={() => setEditing(true)}
                />
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
} 