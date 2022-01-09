import * as React from 'react';

export interface Theme {}

export type ThemeColors = 'light' | 'dark';

export interface ThemeContextProps {
  mode: ThemeColors;
  theme: Theme;
  toggleMode: () => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  mode: 'light',
  theme: {} as Theme,
  toggleMode: () => {},
});

export const getThemeContext = (): ThemeContextProps =>
  React.useContext(ThemeContext);

export const useAppearance = (): Theme => {
  const {theme} = getThemeContext();
  return {...theme};
};

export interface ThemeProviderProps {
  theme: ThemeColors;
  setTheme: (theme: ThemeColors) => void;
}

export interface ThemeProviderRenderProps {
  render?: (props: ThemeProviderProps) => React.ReactElement;
  children?: (props: ThemeProviderProps) => React.ReactElement;
}

export const ThemeProvider: React.FC<ThemeProviderRenderProps> = ({
  render,
  children,
}) => {
  const [theme, setColorTheme] = React.useState<ThemeColors>('light');

  const setTheme = (color: ThemeColors) => setColorTheme(color);

  if (render) {
    return render({theme, setTheme});
  }

  if (children) {
    return children({theme, setTheme});
  }

  return null;
};
