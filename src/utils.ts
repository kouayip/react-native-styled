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
