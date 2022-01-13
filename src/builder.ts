import {CustomStyle, StyleBuilder} from './types';

function createStyleBuilder<P, S>(
  style: CustomStyle<S, P>,
  keys: Array<keyof S>,
): StyleBuilder<P, S> {
  return (props, theme) => {
    const newStyle = {} as any;
    for (const key of keys) {
      const pFunc = style[key];
      if (typeof pFunc === 'function') {
        try {
          newStyle[key] = pFunc({...props, theme});
        } catch (e: any) {
          throw new Error(e);
        }
      } else {
        throw new Error('pFunc is not a function');
      }
    }
    return newStyle;
  };
}

export default createStyleBuilder;
