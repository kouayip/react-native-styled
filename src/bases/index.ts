import * as reactNative from 'react-native';
import styledComponent from '../styled';
import {BaseStyledInterface} from '../models';

const styled: BaseStyledInterface = {
  Image: styledComponent(reactNative.Image),
  Text: styledComponent(reactNative.Text),
  TouchableOpacity: styledComponent(reactNative.TouchableOpacity),
  View: styledComponent(reactNative.View),
};

export default styled as BaseStyledInterface;
