import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItem<T = any>(key: string): Promise<T | null> {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    return null;
  }
}

export async function setItem<T = any>(key: string, value: T): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
}

export async function removeItem(key: string): Promise<boolean> {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
}

export async function clear(): Promise<boolean> {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (e) {
    return false;
  }
} 