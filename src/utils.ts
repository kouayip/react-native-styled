import * as React from 'react';
import * as _ from 'lodash';

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

export function objectEquals(value: any, other: any) {
  for (const p in value) {
    if (value.hasOwnProperty(p)) {
      if (typeof value[p] !== typeof other[p]) {
        return false;
      }
      if ((value[p] === null) !== (other[p] === null)) {
        return false;
      }
      switch (typeof value[p]) {
        case 'undefined':
          if (typeof other[p] !== 'undefined') {
            return false;
          }
          break;
        case 'object':
        case 'function':
          continue;
        default:
          if (value[p] !== other[p]) {
            return false;
          }
      }
    } else {
      return false;
    }
  }
  return true;
}

export default {
  useDeepEffect,
  objectEquals,
};
