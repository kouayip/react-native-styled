import {StyledFunction} from '../types';
import * as reactNative from 'react-native';

export interface NativeStyledInterface {
  ActivityIndicator: StyledFunction<
    reactNative.ActivityIndicator,
    reactNative.ActivityIndicatorProps,
    reactNative.ViewStyle
  >;
  Button: StyledFunction<
    reactNative.Button,
    reactNative.ButtonProps,
    undefined
  >;
  FlatList: StyledFunction<
    reactNative.FlatList,
    reactNative.FlatListProps<any>,
    reactNative.ViewStyle
  >;
  Image: StyledFunction<
    reactNative.Image,
    reactNative.ImageProps,
    reactNative.ImageStyle
  >;
  ImageBackground: StyledFunction<
    reactNative.ImageBackground,
    reactNative.ImageBackgroundProps,
    reactNative.ViewStyle
  >;
  Modal: StyledFunction<
    reactNative.Modal,
    reactNative.ModalProps,
    reactNative.ViewStyle
  >;
  Pressable: StyledFunction<
    reactNative.View,
    reactNative.PressableProps,
    reactNative.ViewStyle
  >;
  RefreshControl: StyledFunction<
    reactNative.RefreshControl,
    reactNative.RefreshControlProps,
    reactNative.ViewStyle
  >;
  SafeAreaView: StyledFunction<
    reactNative.SafeAreaView,
    reactNative.ViewProps,
    reactNative.ViewStyle
  >;
  ScrollView: StyledFunction<
    reactNative.ScrollView,
    reactNative.ScrollViewProps,
    reactNative.ViewStyle
  >;
  StatusBar: StyledFunction<
    reactNative.StatusBarProps,
    reactNative.StatusBarProps,
    undefined
  >;
  Switch: StyledFunction<
    reactNative.Switch,
    reactNative.SwitchProps,
    reactNative.ViewStyle
  >;
  Text: StyledFunction<
    reactNative.Text,
    reactNative.TextProps,
    reactNative.TextStyle
  >;
  TextInput: StyledFunction<
    reactNative.TextInput,
    reactNative.TextInputProps,
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
