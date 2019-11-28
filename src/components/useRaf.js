import React from 'react';
import { useRaf } from 'react-use';

/**
 * 通过 useRaf(t) 拿到 t 毫秒内不断刷新的 0-1 之间的数字，期间组件会不断刷新，
 * 但刷新频率由 requestAnimationFrame 控制（不会卡顿 UI）
 * @returns {*}
 * @constructor
 */
export const UseRaf = () => {
  const value = useRaf(5000);
  return <div>{value}</div>;
};
