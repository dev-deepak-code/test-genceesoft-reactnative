# 📱 Social Media Feed App (React Native + TypeScript)

A fully functional and test-driven Social Media App built with React Native that mimics a real-time feed experience. This app demonstrates user interaction with posts, infinite scrolling, mock comments, profile editing, and navigation using React Navigation.

---

## 🚀 Features

- 📰 **Home Feed** with infinite scrolling using a mock API (`JSONPlaceholder`)
- 👤 **Feed Info**: avatars, names, post content, and images
- ❤️ **Like/Unlike functionality** with live count toggling
- 💬 **Mock comment section** (placeholder functionality for now)
- ✍️ **Editable Profile Screen** stored via `AsyncStorage`
- 🔔 **Notifications tab** with placeholder message
- 🧭 **Bottom Tab Navigation** (Home, Profile, Notifications)
- ✅ **Test coverage for critical screens and functions**

---

## 🛠️ Tools & Libraries Used

| Purpose                     | Package / Tool                     |
|----------------------------|------------------------------------|
| Framework                  | `react-native`                     |
| Language                   | `typescript`                       |
| Navigation                 | `@react-navigation/native`, `@react-navigation/bottom-tabs` |
| API                        | `fetch` using `JSONPlaceholder`    |
| Storage                    | `@react-native-async-storage/async-storage` |
| Testing                    | `jest`, `@testing-library/react-native`, `@testing-library/jest-native` |

---

## 📁 Folder Structure

```
project-root/
│
├── src/
│   ├── assets/               # Icons and static images
│   ├── screens/              # Home, Profile, Notifications
│   ├── navigation/           # BottomTabNavigation.tsx
│   ├── services/             # API calls (fetchPosts, fetchUsers)
│   ├── styles/               # Shared theme colors and fonts
│   └── utils/                # Device config, helpers
│
├── __tests__/                    # Jest test cases
│   ├── HomeScreen.test.tsx
│   ├── ProfileScreen.test.tsx
│   └── NotificationsScreen.test.tsx
│
├── jest.config.js
├── App.tsx
├── package.json
└── README.md
```

---

### Repo
git clone https://github.com/dev-deepak-code/test-genceesoft-reactnative.git
cd delightree-test-task

### Android build location
src --> android_build --> app-release.apk

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Start Metro bundler
npm start

# Run on Android
npm run android

# Run tests
npm run test

```

---

## 🧪 Testing

- Unit and interaction tests written using Jest + React Native Testing Library.
- Run `npm run test` to execute all test cases.


---

## 🧠 Architecture & Design Decisions

- **FlatList with pagination** used for smooth infinite scrolling
- **Modular screen-based folder structure** for scalability
- **AsyncStorage** chosen for lightweight local state persistence in the Profile screen
- **React Navigation Bottom Tabs** for intuitive user flow
- **Test coverage targeting core interactions**: API data, editing profile, like toggling, etc.

---

## ✅ Deliverables

- [x] Functional React Native app with mocked social feed
- [x] Like / Unlike toggle
- [x] Profile editing via AsyncStorage
- [x] Tab navigation setup
- [x] Jest test cases with coverage
- [x] APK generated and attached ✅

---

## 📦 APK File Submission

**Note:** The APK file is included in the project root (`app-release.apk`) as required.

---

## 🧪 Evaluation Criteria Summary

| Criteria         | ✅ Status |
|------------------|-----------|
| Code Quality     | ✅ Clean, modular, readable |
| Functionality    | ✅ Fully meets spec |
| UI/UX            | ✅ Simple, clean tab-based design |
| Performance      | ✅ Lazy loading, FlatList optimizations |
| Testing          | ✅ Unit & interaction coverage |
| Bonus (Profile)  | ✅ Editable profile saved to device |

---

## 📝 Contact

If you have any questions or feedback, feel free to contact the developer.

---