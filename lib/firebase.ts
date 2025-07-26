// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAG9Vnm5tzqnyGK4Q5zi_548Ftnitu6nEY",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "mobilewifihikaku.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "mobilewifihikaku",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "mobilewifihikaku.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "607497573175",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:607497573175:web:a03a96cef700844d7800b2",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-5K3LENHH8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics 遅延初期化（本番環境のみ）
let analyticsInstance: Analytics | null = null;

const initAnalytics = async () => {
  if (typeof window !== 'undefined' && !analyticsInstance && process.env.NODE_ENV === 'production') {
    const { getAnalytics } = await import('firebase/analytics');
    analyticsInstance = getAnalytics(app);
  }
  return analyticsInstance;
};

// Export analytics getter
export const getAnalyticsInstance = () => {
  if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') return null;
  return analyticsInstance || initAnalytics();
};

// 開発環境では analytics を null にする
export const analytics = typeof window !== 'undefined' && process.env.NODE_ENV === 'production' 
  ? getAnalytics(app) 
  : null;

export { app };
