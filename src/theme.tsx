import * as React from 'react';

export interface Theme {}

export type ThemeColors = 'light' | 'dark';

export interface ThemeContextProps {
  mode: ThemeColors;
  theme: Theme;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  mode: 'light',
  theme: {} as Theme,
});

export const getThemeContext = (): ThemeContextProps =>
  React.useContext(ThemeContext);

export const useAppearance = (): Theme => {
  const {theme} = getThemeContext();
  return {...theme};
};

export interface ThemeProviderProps {
  mode: ThemeColors;
  theme: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  mode,
  theme,
  children,
}) => {
  const provider: ThemeContextProps = {
    mode,
    theme,
  };

  return (
    <ThemeContext.Provider value={provider}>{children}</ThemeContext.Provider>
  );
};

export interface LayoutContainerProps {
  mode: ThemeColors;
  setTheme: (theme: ThemeColors) => void;
}

export interface LayoutContainerRenderProps {
  defaultMode?: ThemeColors;
  render?: (props: LayoutContainerProps) => React.ReactElement;
  children?: (props: LayoutContainerProps) => React.ReactElement;
}

export const LayoutContainer: React.FC<LayoutContainerRenderProps> = ({
  defaultMode,
  render,
  children,
}) => {
  const [mode, setColorTheme] = React.useState<ThemeColors>(
    defaultMode ?? 'light',
  );

  const setTheme = (color: ThemeColors) => setColorTheme(color);

  if (render) {
    return render({mode, setTheme});
  }

  if (children) {
    return children({mode, setTheme});
  }

  return null;
};
