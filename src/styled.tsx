import * as React from 'react';
import {BaseProps, StyleBuilder, StyledComponent} from './types';
import {getThemeContext, ThemeColors} from './theme';

function filterStylePropDeps(props: any, mode: ThemeColors): Array<any> {
  const deps = [];

  // Add theme color dependence
  deps.push(mode);

  // Filter other props dependencies
  for (const propsKey in props) {
    if (props.hasOwnProperty(propsKey)) {
      const value = props[propsKey];
      if (typeof value !== 'undefined' || value !== null) {
        if (typeof value === 'object' || typeof value === 'function') {
          continue;
        }
        deps.push(value);
      }
    }
  }

  return deps;
}

export function styled<P extends BaseProps<S>, S>(
  Component: React.ComponentType<any>,
  style: S,
  builder: StyleBuilder<P, S>,
  isDynamicStyle: boolean,
): StyledComponent<P> {
  return ({children, style: nStyle, ...props}) => {
    const {theme, mode} = getThemeContext();
    let memoizedStyle = {};

    if (isDynamicStyle) {
      memoizedStyle = React.useMemo<S>(() => {
        return builder(props as P, theme);
      }, filterStylePropDeps(props, mode));
    }

    if (children) {
      return (
        <Component {...props} style={[style, memoizedStyle, nStyle]}>
          {children}
        </Component>
      );
    } else {
      return <Component {...props} style={[style, memoizedStyle, nStyle]} />;
    }
  };
}
export default styled;
