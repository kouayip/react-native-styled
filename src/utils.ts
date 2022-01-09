import * as React from 'react';
import * as _ from 'lodash';
import {CustomStyle} from './types';
import {TextStyle} from 'react-native';
import {getThemeContext} from './theme';

export function useDeepEffect(callback: () => void, deps: Array<any> = []) {
  const isFirst = React.useRef(true);
  const prevDeps = React.useRef(deps);

  React.useEffect(() => {
    const isSame = prevDeps.current.every((obj, index) =>
      _.isEqual(obj, deps[index]),
    );

    if (isFirst.current || !isSame) {
      callback();
    }

    isFirst.current = false;
    prevDeps.current = deps;
  }, [callback, deps]);
}

export function buildCustomStyle<T>(
  styles: CustomStyle<T>,
  props: T,
): TextStyle {
  const {theme} = getThemeContext();
  const newStyle = {} as any;

  for (const [key, value] of Object.entries(styles)) {
    if (typeof value === 'function') {
      try {
        newStyle[key] = value({
          ...props,
          theme,
        });
      } catch (e) {
        console.error(e);
      }
    } else {
      newStyle[key] = value;
    }
  }

  return newStyle;
}
