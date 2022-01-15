import * as React from 'react';
import {
  BaseProps,
  CustomStyle,
  DefaultBuilder,
  StyleBuilder,
  StyledComponent,
  StyledFunction,
} from './types';
import {getThemeContext} from './themes';
import {filterStylePropDeps} from './utils';
import createStyleBuilder from './builder';

function styled<T, P extends BaseProps<S>, S>(
  Component: React.ComponentType<any>,
  style: S,
  builder: StyleBuilder<P, S>,
  isDynamicStyle: boolean,
): StyledComponent<P, T> {
  return ({children, ref, key, style: nStyle, ...props}) => {
    const {theme, mode} = getThemeContext();
    let memoizedStyle = {};

    if (isDynamicStyle) {
      memoizedStyle = React.useMemo<S>(() => {
        return builder(props as P, theme);
      }, filterStylePropDeps(props, mode));
    }

    if (children) {
      return (
        <Component
          ref={ref}
          key={key}
          {...props}
          style={[style, memoizedStyle, nStyle]}>
          {children}
        </Component>
      );
    } else {
      return (
        <Component
          ref={ref}
          key={key}
          {...props}
          style={[style, memoizedStyle, nStyle]}
        />
      );
    }
  };
}

export function styledComponent<T, P, S>(
  Tag: React.ComponentType<any>,
): StyledFunction<T, P, S> {
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

      if (funcKeys.length) {
        styleBuilder = createStyleBuilder<P & Props, S>(style, funcKeys);
      }
    }

    return styled<T, P & Props, S>(
      Tag,
      baseStyle,
      styleBuilder,
      funcKeys.length > 0,
    );
  };
}

export default styledComponent;
