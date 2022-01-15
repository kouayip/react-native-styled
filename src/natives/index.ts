import * as reactNative from 'react-native';
import styledComponent from '../styled';
import {NativeStyledInterface} from '../models';

const styled: NativeStyledInterface = {
  ActivityIndicator: styledComponent(reactNative.ActivityIndicator),
  Button: styledComponent(reactNative.Button),
  FlatList: styledComponent(reactNative.FlatList),
  Image: styledComponent(reactNative.Image),
  ImageBackground: styledComponent(reactNative.ImageBackground),
  Modal: styledComponent(reactNative.Modal),
  Pressable: styledComponent(reactNative.Pressable),
  RefreshControl: styledComponent(reactNative.RefreshControl),
  SafeAreaView: styledComponent(reactNative.SafeAreaView),
  ScrollView: styledComponent(reactNative.ScrollView),
  StatusBar: styledComponent(reactNative.StatusBar),
  Switch: styledComponent(reactNative.Switch),
  Text: styledComponent(reactNative.Text),
  TextInput: styledComponent(reactNative.TextInput),
  TouchableOpacity: styledComponent(reactNative.TouchableOpacity),
  View: styledComponent(reactNative.View),
};

export default styled as NativeStyledInterface;
