import * as React from 'react';
import {BaseProps, StyleBuilder, StyledComponent} from './types';
import {getThemeContext} from './theme';
import utils from './utils';

export function styled<P extends BaseProps<S>, S>(
  Component: React.ComponentType<any>,
  style: S,
  builder: StyleBuilder<P, S>,
): StyledComponent<P> {
  return ({children, style: nStyle, ...props}) => {
    const [customStyle, setCustomStyle] = React.useState({});
    const {theme} = getThemeContext();

    const isFirst = React.useRef(true);
    const prevProps = React.useRef(props);

    React.useEffect(() => {
      if (!__DEV__) {
        if (isFirst.current || !utils.objectEquals(props, prevProps.current)) {
          const newStyle = builder(props as P, theme);
          setCustomStyle(newStyle);
        }
      } else {
        const newStyle = builder(props as P, theme);
        if (!utils.objectEquals(newStyle, customStyle)) {
          setCustomStyle(newStyle);
        }
      }

      prevProps.current = props;
      isFirst.current = false;
    }, [customStyle, props, theme]);

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
