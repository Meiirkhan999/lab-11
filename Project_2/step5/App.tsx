import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ResponsiveHeader, ResponsiveContainer } from './src/components/ResponsiveHeader';
import { GridLayout, Card } from './src/components/GridLayout';
import { AdaptiveLayout, FeatureCard, StatsRow } from './src/components/AdaptiveLayout';

function ProgressBar({ progress }: { progress: number }) {
  const clamped = Math.min(100, Math.max(0, progress));
  return (
    <View style={styles.progressWrapper}>
      <View style={[styles.progressFill, { width: `${clamped}%` }]} />
      <Text style={styles.progressText}>{clamped}%</Text>
    </View>
  );
}

export default function App() {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [progress, setProgress] = useState(30);
  const [infoText, setInfoText] = useState('Ready');
  const [activeMode, setActiveMode] = useState<'home' | 'menu' | 'settings'>('home');

  const toggleBookmark = (id: string) => {
    const added = !bookmarks.includes(id);
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    setInfoText(`${added ? 'Added' : 'Removed'} bookmark for ${id}`);
  };

  const isBookmarked = (id: string) => bookmarks.includes(id);

  const stats = useMemo(
    () => [
      { label: 'Users', value: '1,234' },
      { label: 'Projects', value: '56' },
      { label: 'Tasks', value: '789' },
      { label: 'Progress', value: `${progress}%` },
      { label: 'Bookmarks', value: `${bookmarks.length}` },
    ],
    [progress, bookmarks.length]
  );

  const onLeftAction = () => {
    setActiveMode('menu');
    setInfoText('Menu opened');
  };

  const onRightAction = () => {
    setActiveMode('settings');
    setInfoText('Settings opened');
  };

  const onBackAction = () => {
    setActiveMode('home');
    setInfoText('Home view');
  };

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
      <ResponsiveHeader
        title="Project 2 Step 5"
        leftAction={{ icon: '☰', onPress: onLeftAction }}
        rightAction={{ icon: '⚙', onPress: onRightAction }}
      />
      <View style={{ padding: 12, backgroundColor: '#eaf4ff' }}>
        <Text style={{ color: '#003a7c', fontWeight: '600' }}>{infoText}</Text>
      </View>
      <ResponsiveContainer>
        <AdaptiveLayout
          content={
            <>
              {activeMode !== 'home' && (
                <View style={styles.modeBanner}>
                  <Text style={styles.modeBannerText}>{activeMode === 'menu' ? 'Menu screen' : 'Settings screen'}</Text>
                  <TouchableOpacity onPress={onBackAction} style={styles.backBtn}>
                    <Text style={styles.backBtnText}>Back</Text>
                  </TouchableOpacity>
                </View>
              )}

              {activeMode === 'home' ? (
                <>
                  <FeatureCard
                    icon="📱"
                    title="Responsive Design"
                    description="Adapts to different screen sizes and orientations"
                  />
                  <View style={styles.controlsRow}>
                    <TouchableOpacity
                      style={styles.controlBtn}
                      onPress={() => setProgress((p) => Math.max(0, p - 10))}
                    >
                      <Text style={styles.controlText}>-10%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.controlBtn}
                      onPress={() => setProgress((p) => Math.min(100, p + 10))}
                    >
                      <Text style={styles.controlText}>+10%</Text>
                    </TouchableOpacity>
                  </View>
                  <ProgressBar progress={progress} />
                  <StatsRow stats={stats} />
                  <GridLayout columns={2}>
                    {['Card 1', 'Card 2', 'Card 3'].map((title, index) => {
                      const id = `card-${index + 1}`;
                      return (
                        <Card key={id} title={title} subtitle={`Subtitle ${index + 1}`}>
                          <Text>{`Content for ${title}`}</Text>
                          <TouchableOpacity
                            style={styles.bookmarkBtn}
                            onPress={() => toggleBookmark(id)}
                          >
                            <Text style={styles.bookmarkText}>
                              {isBookmarked(id) ? '★ Remove bookmark' : '☆ Add bookmark'}
                            </Text>
                          </TouchableOpacity>
                        </Card>
                      );
                    })}
                  </GridLayout>
                </>
              ) : activeMode === 'menu' ? (
                <View style={styles.modeContent}>
                  <Text style={styles.modeTitle}>Menu</Text>
                  <Text>Here could be navigation links or quick actions.</Text>
                </View>
              ) : (
                <View style={styles.modeContent}>
                  <Text style={styles.modeTitle}>Settings</Text>
                  <Text>Here could be settings toggles and options.</Text>
                </View>
              )}
            </>
          }
        />
      </ResponsiveContainer>
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  controlBtn: {
    backgroundColor: '#0066cc',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  controlText: {
    color: '#fff',
    fontWeight: '600',
  },
  progressWrapper: {
    marginBottom: 16,
    backgroundColor: '#e6e6e6',
    borderRadius: 12,
    overflow: 'hidden',
    height: 26,
    justifyContent: 'center',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#00aaff',
  },
  progressText: {
    position: 'absolute',
    alignSelf: 'center',
    color: '#fff',
    fontWeight: '700',
  },
  bookmarkBtn: {
    marginTop: 10,
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#fee9a6',
  },
  bookmarkText: {
    color: '#333',
    fontWeight: '600',
  },
  modeBanner: {
    backgroundColor: '#d6f0ff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modeBannerText: {
    fontWeight: '700',
    color: '#005e92',
  },
  backBtn: {
    backgroundColor: '#0077cc',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  backBtnText: {
    color: '#fff',
    fontWeight: '600',
  },
  modeContent: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    elevation: 2,
  },
  modeTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
});