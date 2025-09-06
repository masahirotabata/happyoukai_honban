import { Capacitor } from '@capacitor/core';
import { AdMob, BannerAdPosition, BannerAdSize } from '@capacitor-community/admob';

const isNative = Capacitor.isNativePlatform();

async function showHomeBanner() {
  try {
    await AdMob.initialize({ requestTrackingAuthorization: true });
    await AdMob.showBanner({
      adId: 'ca-app-pub-3517487281025314/4261826288', // ← あなたのバナー ユニットIDに置換
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER
    });
  } catch (e) { console.error(e); }
}

async function hideBanner() { try { await AdMob.hideBanner(); } catch {} }

if (isNative) showHomeBanner();
// @ts-ignore
(window as any).native = { showHomeBanner, hideBanner };
