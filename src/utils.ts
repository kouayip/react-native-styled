import {ThemeColors} from './themes';

export function filterStylePropDeps(props: any, mode: ThemeColors): Array<any> {
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

export default {
  filterStylePropDeps,
};
