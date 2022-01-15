import {StyledFunction} from '../types';
import * as reactNative from 'react-native';

export interface BaseStyledInterface {
  Image: StyledFunction<
    reactNative.Image,
    reactNative.ImageProps,
    reactNative.ImageStyle
  >;
  Text: StyledFunction<
    reactNative.Text,
    reactNative.TextProps,
    reactNative.TextStyle
  >;
  TouchableOpacity: StyledFunction<
    reactNative.TouchableOpacity,
    reactNative.TouchableOpacityProps,
    reactNative.ViewStyle
  >;
  View: StyledFunction<
    reactNative.View,
    reactNative.ViewProps,
    reactNative.ViewStyle
  >;
}
