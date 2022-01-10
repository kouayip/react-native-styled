# React Native Component Styled

A React Native component styled.

## Installation

```bash
npm i react-native-component-styled
```

## Usage


Use Styled to create and style your react native component.

```tsx
import styled from "react-native-component-styled";

const App = () => (
    <View>
        <Title size={26}>Welcome</Title>
        <Title size={14} color="grey">to react styled</Title>
    </View>
);

const Title = styled.Text<{size: number, color?: string}>({
    fontSize: props => props.size,
    color: props => props.color ?? "black",
    textTransform: 'uppercase',
    textAlign: 'center',
})
```
Define and use custom themes

```tsx
import styled, {ThemeProvider, LayoutContainer} from 'react-native-component-styled';

const App = () => (
    <LayoutContainer defaultMode="light">
        {({mode}) => (
            <ThemeProvider mode={mode} theme={themes[mode]}>
                <SafeAreaView>
                    <StatusBar
                        animated
                        barStyle={mode === 'light' ? 'light-content' : 'dark-content'}
                    />
                    <View>
                        <Title textTransform="uppercase">Welcome</Title>
                    </View>
                </SafeAreaView>
            </ThemeProvider>
        )}
    </LayoutContainer>
);

const Title = styled.Text<{textTransform?: 'uppercase' | 'lowercase'}>({
    textTransform: props => props.textTransform ?? 'uppercase',
    color: props => props.theme.colors.blue,
    fontSize: props => props.theme.largeTitle.fontSize,
    fontFamily: props => props.theme.largeTitle.fontFamily,
    lineHeight: props => props.theme.largeTitle.lineHeight,
});
```
Declare your own theme

```tsx
import 'react-native-component-styled';

declare module 'react-native-component-styled' {
    export interface Theme {
        colors: {
            primary: string;
            blue: string;
        };
        fonts: {
            largeTitle: {
                fontFamily: string;
                fontSize: number;
                lineHeight: number;
            };
        };
    }
}
```

implement your declared theme

```tsx
import {Theme} from 'react-native-component-styled';

const lightTheme: Theme = {
  colors: {
    primary: '#FF002E',
    blue: '#4096FE',
  },
  fonts: {
    largeTitle: {fontFamily: 'Roboto-Black', fontSize: 40, lineHeight: 38},
  },
};

export default lightTheme;
```
