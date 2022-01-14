import * as React from 'react';
import {BaseProps, StyleBuilder, StyledComponent} from './types';
import {getThemeContext} from './theme';

export function styled<P extends BaseProps<S>, S>(
  Component: React.ComponentType<any>,
  style: S,
  builder: StyleBuilder<P, S>,
): StyledComponent<P> {
  return ({children, style: nStyle, ...props}) => {
    const {theme} = getThemeContext();

    const customStyle = builder(props as P, theme);

    if (children) {
      return (
        <Component {...props} style={[style, customStyle, nStyle]}>
          {children}
        </Component>
      );
    } else {
      return <Component {...props} style={[style, customStyle, nStyle]} />;
    }
  };
}
export default styled;
