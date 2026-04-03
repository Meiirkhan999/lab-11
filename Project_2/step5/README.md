# Project 2 Step 5: Styling & Responsive Layouts

Student Name: ____________________  
Date: _______

## Overview

This project implements responsive styling and layouts for a React Native mobile app using Flexbox. The implementation focuses on creating adaptive components that work across different device sizes and orientations.

## Responsive Design Implementation

### Components Created

1. **GridLayout.tsx** - A flexible grid system that adapts to screen width
   - Uses `useWindowDimensions` to calculate item widths
   - Supports configurable columns and spacing
   - Includes Card component for content display

2. **ResponsiveHeader.tsx** - Header with safe area handling
   - Uses `SafeAreaView` and `useSafeAreaInsets` for notch devices
   - Responsive title sizing for tablets
   - Platform-specific styling for iOS/Android

3. **AdaptiveLayout.tsx** - Main layout container
   - Different layouts for phone vs tablet
   - Scrollable content with proper padding
   - Includes FeatureCard, StatsRow, and ResponsiveImage components

### Key Features

- **Flexbox Layouts**: All components use React Native's Flexbox for responsive design
- **Safe Area Handling**: Proper insets for notched devices
- **Responsive Breakpoints**: Tablet detection at 768px width
- **Platform-Specific Code**: Different styling for iOS and Android
- **Orientation Awareness**: Adapts to portrait/landscape changes

### Flexbox Properties Used

- `flexDirection`: row/column for layout direction
- `justifyContent`: space-between, center, flex-start
- `alignItems`: center, stretch
- `flexWrap`: wrap for multi-line grids
- `flex`: 1 for expanding elements

### Responsive Techniques

- `useWindowDimensions()` hook for screen dimensions
- Conditional styling based on width/height
- Platform.select() for platform differences
- Safe area insets for modern devices

## Installation & Running

1. Install dependencies: `npm install`
2. Start Expo: `npm start`
3. Run on device/emulator

## Screenshots

Include screenshots of the app on:
- Phone (portrait)
- Phone (landscape)  
- Tablet

## AI Usage Report

If AI tools were used, document here:
- Tool used: 
- Prompts: 
- Modifications: 
- Learning outcomes: