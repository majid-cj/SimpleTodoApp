import '@react-navigation/native';
import {Theme} from '@react-navigation/native';

declare module '@react-navigation/native' {
  export type AppTheme = {
    dark: boolean;
    colors: {
      secondary: string;
      accent: string;
      danger: string;
      success: string;
      warning: string;
      background: string;
      text: string;
      black: string;
      primary: string;
      card: string;
      border: string;
      notification: string;
      statusBar: string;
    };
  } & Theme;
  export function useTheme(): AppTheme;
}
