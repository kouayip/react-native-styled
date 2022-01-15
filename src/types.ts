import {FC, PropsWithChildren, ClassAttributes} from 'react';
import {Theme} from './themes';
import {StyleProp} from 'react-native';

export type PropertyParams = {
  theme: Theme;
};

export type StyleFunction<P, R> = (props: P & PropertyParams) => R;

export type CustomStyle<S, P> = {
  [K in keyof S]?: S[K] | StyleFunction<P, S[K]>;
};

export type StyledComponent<P, T> = FC<
  PropsWithChildren<P> & ClassAttributes<T>
>;

export type StyledFunction<T, P, S> = <Props extends object = {}>(
  style?: CustomStyle<S, Props> | undefined,
) => StyledComponent<P & Props, T>;

export type BaseProps<S> = {
  style?: StyleProp<S> | undefined;
  [key: string]: any;
};

export interface StyleBuilder<P, S> {
  (props: P, theme: Theme): S;
}

export const EMPTY_OBJ = {};

export const DefaultBuilder: StyleBuilder<any, any> = () => EMPTY_OBJ;
