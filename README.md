# React Native Component Styled

A React Native component styled.

## Usage

```bash
npm i react-native-component-styled
```

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
