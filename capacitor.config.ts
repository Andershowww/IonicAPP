import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'HortiAssistente',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000, // tempo em ms (2s)
      launchAutoHide: true, // esconde automaticamente após esse tempo
      backgroundColor: "#ffffffff", // branco
      showSpinner: true,
      spinnerStyle: "large",
      androidScaleType: "CENTER_CROP",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
