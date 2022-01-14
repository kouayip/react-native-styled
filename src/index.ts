import * as React from 'react';
import * as reactNative from 'react-native';

import {CustomStyle, DefaultBuilder, StyledFunction} from './types';
import createStyleBuilder from './builder';
import styled from './styled';

export * from './theme';

function styledComponent<P, S>(
  Tag: React.ComponentType<any>,
): StyledFunction<P, S> {
  return <Props extends object = {}>(style?: CustomStyle<S, Props>) => {
    const baseStyle = {} as any;
    const funcKeys: Array<keyof S> = [];

    let styleBuilder = DefaultBuilder;

    if (style) {
      for (const [key, value] of Object.entries(style)) {
        if (typeof value === 'function') {
          funcKeys.push(key as keyof S);
        } else {
          baseStyle[key] = value;
        }
      }

      styleBuilder = createStyleBuilder<P & Props, S>(style, funcKeys);
    }

    return styled<P & Props, S>(Tag, baseStyle, styleBuilder);
  };
}

export default {
  ActivityIndicator: styledComponent<
    reactNative.ActivityIndicatorProps,
    reactNative.ViewStyle
  >(reactNative.ActivityIndicator),
  Button: styledComponent<reactNative.ButtonProps, undefined>(
    reactNative.Button,
  ),
  FlatList: styledComponent<
    reactNative.FlatListProps<any>,
    reactNative.ViewStyle
  >(reactNative.FlatList),
  Image: styledComponent<reactNative.ImageProps, reactNative.ImageStyle>(
    reactNative.Image,
  ),
  ImageBackground: styledComponent<
    reactNative.ImageBackgroundProps,
    reactNative.ViewStyle
  >(reactNative.ImageBackground),
  Modal: styledComponent<reactNative.ModalProps, reactNative.ViewStyle>(
    reactNative.Modal,
  ),
  Pressable: styledComponent<reactNative.PressableProps, reactNative.ViewStyle>(
    reactNative.Pressable,
  ),
  RefreshControl: styledComponent<
    reactNative.RefreshControlProps,
    reactNative.ViewStyle
  >(reactNative.RefreshControl),
  SafeAreaView: styledComponent<reactNative.ViewProps, reactNative.ViewStyle>(
    reactNative.SafeAreaView,
  ),
  ScrollView: styledComponent<
    reactNative.ScrollViewProps,
    reactNative.ViewStyle
  >(reactNative.ScrollView),
  StatusBar: styledComponent<reactNative.StatusBarProps, undefined>(
    reactNative.StatusBar,
  ),
  Switch: styledComponent<reactNative.SwitchProps, reactNative.ViewStyle>(
    reactNative.Switch,
  ),
  Text: styledComponent<reactNative.TextProps, reactNative.TextStyle>(
    reactNative.Text,
  ),
  TextInput: styledComponent<reactNative.TextInputProps, reactNative.TextStyle>(
    reactNative.TextInput,
  ),
  TouchableOpacity: styledComponent<
    reactNative.TouchableOpacityProps,
    reactNative.ViewStyle
  >(reactNative.TouchableOpacity),
  View: styledComponent<reactNative.ViewProps, reactNative.ViewStyle>(
    reactNative.View,
  ),
};
