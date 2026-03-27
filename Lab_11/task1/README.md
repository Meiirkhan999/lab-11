# Lab 11.1: React Native Fundamentals - Profile App

## Student Information
- **Student Name:** [Your Name Here]
- **Date:** March 29, 2026
- **Course:** Lab 11: React Native Fundamentals

## Project Overview

This project demonstrates the fundamentals of React Native development using Expo. It includes:

1. **Expo Setup** - A blank TypeScript Expo project configured for mobile development
2. **Core Components** - Implementation of View, Text, Image, and TextInput components
3. **Styling** - Use of StyleSheet API with Flexbox layout
4. **State Management** - Form handling with React hooks (useState)
5. **Interactive UI** - TouchableOpacity buttons and validation

## Architecture

```
ProfileApp/
├── src/
│   └── components/
│       ├── ProfileCard.tsx      # Profile display component
│       └── ContactSection.tsx   # Contact form component
├── App.tsx                       # Main application entry point
├── app.json                      # Expo configuration
├── package.json                  # Dependencies
└── tsconfig.json                 # TypeScript configuration
```

## Components

### ProfileCard
Displays a user profile with:
- Avatar image with circular styling
- User name and role
- Bio section
- Flexbox row layout for horizontal arrangement

**Key Features:**
- Image component for avatar display
- StyleSheet API for consistent styling
- Flexbox layout with proper alignment

### ContactSection
Interactive contact form with:
- Email input field with email keyboard
- Phone input field with phone keyboard
- Message textarea input
- Disabled button validation
- Success message feedback

**Key Features:**
- TextInput with multiple keyboard types
- TouchableOpacity button with disabled state
- Form validation (all fields required)
- Success state management

## React Native vs React (Web)

| Aspect | React (Web) | React Native |
|--------|-----------|--------------|
| **Renderer** | DOM | Native components |
| **Components** | div, span, p | View, Text, TextInput |
| **Styling** | CSS classes | StyleSheet API |
| **Layout** | CSS Flexbox | StyleSheet Flexbox |
| **Events** | onClick | onPress |
| **Architecture** | Web-based | Mobile-native (iOS/Android) |

## Key Learnings

### Core Concepts
1. **View Component**: Fundamental container - maps to UIView (iOS) or ViewGroup (Android)
2. **Text Component**: For text display, cannot contain other non-text content
3. **StyleSheet**: Creates optimized stylesheets with validation
4. **Flexbox**: Layout system identical to web CSS Flexbox
5. **No DOM**: React Native doesn't use HTML/CSS, uses native components instead

### Styling Patterns
- StyleSheet.create() for performance optimization
- Platform-independent styling (handles iOS/Android differences automatically)
- No CSS classes - use inline style objects
- Flexbox for responsive layouts

### State Management
- useState hooks for form state
- Controlled components for text inputs
- Callback functions for form submission

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- Expo Go app on phone OR Android Studio/Xcode for emulator

### Installation
```bash
cd ProfileApp
npm install
```

### Running the App

**On Physical Device:**
```bash
npx expo start
# Scan QR code with Expo Go app
```

**On Android Emulator:**
```bash
npx expo start
# Press 'a' for Android emulator
```

**On iOS Simulator:**
```bash
npx expo start
# Press 'i' for iOS simulator
```

## Git History

```
commit f5f253e - feat: initialize Expo project with TypeScript
```

All components and configurations added in the initial setup commit.

## References

- **Chapter 12 (Ch. 11)**: "Kick-Starting React Native Projects with Expo" (pp. 245-265)
- **Core Components**: p. 254
- **Styling in React Native**: p. 260
- **TouchableOpacity & TextInput**: p. 258

## Important Notes

- This app uses **TypeScript** for type safety (no -5 point penalty)
- All components use React Native StyleSheet (not CSS classes or DOM)
- Proper Flexbox layout for responsive design
- Form validation implemented with disabled button state
- Component composition following React best practices

## Testing Checklist

- [ ] App starts without errors (npm start)
- [ ] ProfileCard displays with correct styling
- [ ] ContactSection form inputs work (email, phone, message)
- [ ] Submit button enables/disables based on form validation
- [ ] Success message appears after form submission
- [ ] Avatar image loads properly
- [ ] Layout is responsive and properly aligned
- [ ] App runs on Expo Go or emulator without crashes
