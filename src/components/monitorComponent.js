import { useState, useLayoutEffect } from 'react';

function getSize(el) {
  if (!el) {
    return {};
  }

  return {
    width: el.offsetWidth,
    height: el.offsetHeight,
  };
}

export const useComponentSize = (ref) => {
  const [ComponentSize, setComponentSize] = useState(getSize(ref.current));

  function handleResize() {
    if (ref && ref.current) {
      setComponentSize(getSize(ref.current));
    }
  }

  useLayoutEffect(() => {
    handleResize();

    let resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect(ref.current);
      resizeObserver = null;
    };
  }, []);

  return ComponentSize;
};
