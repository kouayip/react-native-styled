import {Theme} from './theme';
import {TextProps, TextStyle} from 'react-native';

export type PropertyParams = {
  theme: Theme;
};

export type PropertyFunction<T, V> = (props: T & PropertyParams) => V;

export type CustomType<T, P> = {
  [K in keyof T]?: T[K] | PropertyFunction<P, T[K]>;
};

export type CustomTextStyle<T> = CustomType<TextStyle, T>;
export type CustomTextProps<T> = TextProps & T;

export type CustomStyle<T> = CustomTextStyle<T>;
