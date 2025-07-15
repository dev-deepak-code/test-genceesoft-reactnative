import AsyncStorage from '@react-native-async-storage/async-storage';
import { getItem, setItem, removeItem, clear } from '../src/utils/asyncStorageHelpers';


jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

describe('AsyncStorage Helpers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getItem', () => {
    it('returns parsed data when key exists', async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce('{"name":"John"}');

      const result = await getItem('user');
      expect(result).toEqual({ name: 'John' });
      expect(AsyncStorage.getItem).toHaveBeenCalledWith('user');
    });

    it('returns null when key does not exist', async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(null);

      const result = await getItem('missing');
      expect(result).toBeNull();
    });

    it('returns null if JSON parsing fails or throws', async () => {
      (AsyncStorage.getItem as jest.Mock).mockRejectedValueOnce(new Error('fail'));

      const result = await getItem('fail-key');
      expect(result).toBeNull();
    });
  });

  describe('setItem', () => {
    it('stores the stringified value and returns true on success', async () => {
      const data = { loggedIn: true };
      (AsyncStorage.setItem as jest.Mock).mockResolvedValueOnce(undefined);

      const result = await setItem('session', data);
      expect(AsyncStorage.setItem).toHaveBeenCalledWith('session', JSON.stringify(data));
      expect(result).toBe(true);
    });

    it('returns false if storing throws', async () => {
      (AsyncStorage.setItem as jest.Mock).mockRejectedValueOnce(new Error('fail'));
      const result = await setItem('session', { ok: true });
      expect(result).toBe(false);
    });
  });

  describe('removeItem', () => {
    it('removes item and returns true on success', async () => {
      (AsyncStorage.removeItem as jest.Mock).mockResolvedValueOnce(undefined);
      const result = await removeItem('token');
      expect(AsyncStorage.removeItem).toHaveBeenCalledWith('token');
      expect(result).toBe(true);
    });

    it('returns false if remove fails', async () => {
      (AsyncStorage.removeItem as jest.Mock).mockRejectedValueOnce(new Error('fail'));
      const result = await removeItem('bad-key');
      expect(result).toBe(false);
    });
  });

  describe('clear', () => {
    it('clears all storage and returns true', async () => {
      (AsyncStorage.clear as jest.Mock).mockResolvedValueOnce(undefined);
      const result = await clear();
      expect(AsyncStorage.clear).toHaveBeenCalled();
      expect(result).toBe(true);
    });

    it('returns false if clear fails', async () => {
      (AsyncStorage.clear as jest.Mock).mockRejectedValueOnce(new Error('fail'));
      const result = await clear();
      expect(result).toBe(false);
    });
  });
});
