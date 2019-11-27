import React from 'react';
import ReactDOM from 'react-dom';
import { UseStateDemo } from './components/useStateDemo';
import { UseDocumentTitle } from './components/useEffectDemo';
import { useWindowSize } from './components/monitorWindowSize';
import { AddonCss } from './components/importCss';

const App = () => {
  const windowSize = useWindowSize();
  UseDocumentTitle('个人中心');
  return (
    <>
      <UseStateDemo/>
      <div>页面宽度：{windowSize.innerWidth}</div>
      <div>页面高度：{windowSize.innerHeight}</div>
      <AddonCss/>
    </>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
