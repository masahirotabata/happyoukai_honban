import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.example.sleepken',  // ← バンドルIDに変更
  appName: '睡眠検定',
  webDir: 'www',
  bundledWebRuntime: false
};
export default config;
