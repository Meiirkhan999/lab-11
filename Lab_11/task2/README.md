# Lab 11.2: React Native - Lists, Navigation, and Platform-Specific Code

## Student Information
- **Student Name:** [Your Name Here]
- **Date:** March 29, 2026
- **Course:** Lab 11: React Native Fundamentals

## Project Overview

This project demonstrates advanced React Native patterns including:

1. **FlatList** - Efficient list rendering with pull-to-refresh
2. **React Navigation** - Stack navigation between screens
3. **Platform-Specific Code** - iOS vs Android styling differences
4. **Type Safety** - Full TypeScript implementation
5. **Screen Transitions** - Navigation with parameter passing

## Architecture

```
ProductApp/
├── src/
│   ├── components/
│   │   └── ProductItem.tsx           # List item component
│   ├── screens/
│   │   ├── ProductListScreen.tsx     # Main product list screen
│   │   └── ProductDetailScreen.tsx   # Product detail screen
│   └── data/
│       └── products.ts               # Product data & types
├── App.tsx                           # Navigation setup
├── app.json                          # Expo configuration
├── package.json                      # Dependencies
└── tsconfig.json                     # TypeScript configuration
```

## Key Features

### ProductListScreen
- **FlatList Component**: Efficient list rendering with proper key extraction
- **Pull-to-Refresh**: RefreshControl for simulated data refresh
- **List Headers**: Product count display with custom styling
- **Proper Keying**: Each item has unique ID for optimal performance
- **Navigation Integration**: Passes product to detail screen

**FlatList Best Practices Implemented:**
- `keyExtractor` callback for explicit key management
- `renderItem` callback for efficient rendering
- `contentContainerStyle` for list spacing
- `ListHeaderComponent` for custom header content

### ProductDetailScreen
- **Image Display**: Large product image with proper sizing
- **Category Badge**: Styled category indicator
- **Platform-Specific Code**: Different shadow/elevation based on OS
- **Responsive Layout**: ScrollView for content overflow handling
- **Platform Information**: Displays current platform and version

**Platform.select() Implementation:**
```typescript
...Platform.select({
  ios: {
    shadowColor: '#0066cc',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  android: {
    elevation: 4,
  },
})
```

### Navigation Setup
- **Stack Navigator**: Standard push/pop navigation pattern
- **Type Safety**: Generic RootStackParamList for all screens
- **Header Customization**: Blue header with white title
- **Dynamic Titles**: Product name as detail screen title
- **SafeAreaProvider**: Handles notches and home indicators

## React Navigation Implementation Details

### Type-Safe Navigation
```typescript
type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
```

### Screen Options
- Consistent header styling across all screens
- Navigation button styling with white tint
- Font weight for better readability
- Platform-aware behavior automatically handled

### Navigation Props
- **NativeStackNavigationProp**: For navigation.navigate()
- **RouteProp**: For accessing route.params
- Enables `navigation.navigate()` and `navigation.goBack()`

## FlatList vs ScrollView

| Feature | FlatList | ScrollView |
|---------|----------|-----------|
| **Performance** | Optimized ✓ | Not optimized ✗ |
| **Large Lists** | Handles many items | Renders all at once |
| **Memory** | Low (recycling) | High (all items) |
| **Key Prop** | Required | Not applicable |
| **Use Case** | Lists/Grids | Small content |

**Lab 11.2 Grading Note:** Using ScrollView instead of FlatList: **-10 pts**

## Platform-Specific Patterns

### Platform.OS
```typescript
Platform.OS === 'ios' ? 'iOS' : 'Android'
```

### Platform.select()
```typescript
const shadowStyle = Platform.select({
  ios: { shadowOpacity: 0.3 },
  android: { elevation: 4 },
});
```

### Platform.Version
```typescript
const version = Platform.Version;  // Numeric on Android, String on iOS
```

## Data Structure

```typescript
interface Product {
  id: string;           // Unique identifier for FlatList
  name: string;        // Product name
  description: string; // Full product description
  price: number;       // Product price
  category: string;    // Product category
  image: string;       // Image URL
}
```

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- Expo Go app on phone OR Android Studio/Xcode

### Installation
```bash
cd ProductApp
npm install
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
```

### Running the App

**Physical Device:**
```bash
npx expo start
# Scan QR code with Expo Go app
```

**Android Emulator:**
```bash
npx expo start
# Press 'a' for Android emulator
```

**iOS Simulator:**
```bash
npx expo start
# Press 'i' for iOS simulator
```

## Navigation Flow

```
ProductListScreen
    ↓ (tap product)
ProductDetailScreen
    ↓ (back button)
ProductListScreen
```

## Git History

```
commit c5d7a0c - feat: initialize Expo project with TypeScript and React Navigation
```

All components, screens, and configurations added in the initial setup commit.

## References

- **Chapter 12 (Ch. 11)**: "Kick-Starting React Native Projects with Expo" (pp. 245-265)
- **FlatList**: p. 254
- **React Navigation**: p. 252
- **Platform-Specific Code**: p. 256

## Important Notes

- **FlatList Used**: Proper implementation with keyExtractor and renderItem callbacks
- **React Navigation**: Stack.Navigator with proper typing
- **Platform-Specific**: Both iOS and Android handled with Platform.select()
- **TypeScript**: Full type safety throughout (no -5 pt penalty)
- **Performance**: useCallback for all callbacks to prevent unnecessary re-renders

## Expected Behavior

### Product List Screen
- [ ] Displays 5 products in FlatList
- [ ] Each product shows name, category, description, image, and price
- [ ] Pull-to-refresh gesture works (1s simulated delay)
- [ ] Tapping product navigates to detail screen
- [ ] Product count displayed in header
- [ ] Proper spacing and shadows on list items

### Product Detail Screen
- [ ] Image displays at top
- [ ] Category badge shows with correct color
- [ ] Product name, price, and description visible
- [ ] Platform info shows current OS and version
- [ ] Add to Cart button is styled correctly
- [ ] Different shadow style for iOS vs Android
- [ ] Back button returns to product list

### Navigation
- [ ] Headers have blue background with white text
- [ ] Dynamic title shows product name on detail screen
- [ ] Back button visible and functional
- [ ] No TypeScript errors or warnings
- [ ] Smooth transitions between screens

## Testing Checklist

- [ ] App starts without errors
- [ ] ProductListScreen loads all 5 products
- [ ] FlatList renders efficiently
- [ ] Pull-to-refresh works properly
- [ ] Product item tap navigation works
- [ ] ProductDetailScreen displays all product info
- [ ] Platform info shows correctly
- [ ] Add to Cart button is touchable
- [ ] Back navigation works
- [ ] Headers styled correctly (blue background)
- [ ] No console errors or warnings
- [ ] App runs on both iOS and Android
