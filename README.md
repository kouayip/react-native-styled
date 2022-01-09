# Picache

A React Native component styled.

## Usage

```bash
yarn add styled
```

Use Picache the same way you would use an `<Image />` component.

```tsx
import styled from "styled";

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
