import React from 'react';
import { useCss } from 'react-use';

export const AddonCss = () => {
  const className = useCss({
    color: 'red',
  });

  return <div className={className}>Hello world.</div>;
};
