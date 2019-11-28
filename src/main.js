import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { UseStateDemo } from './components/useStateDemo';
import { UseDocumentTitle } from './components/useEffectDemo';
import { useWindowSize } from './components/monitorWindowSize';
import { AddonCss } from './components/importCss';
import { useComponentSize } from './components/monitorComponent';
import { useInputValue } from './components/useInputValue';
import { UseRaf } from './components/useRaf';

const App = () => {
  const windowSize = useWindowSize();
  UseDocumentTitle('个人中心');
  //  set ref
  const ref = useRef(null);
  const componentSize = useComponentSize(ref);
  // useInputValue
  const name = useInputValue('Jamie');
  return (
    <>
      <UseStateDemo/>
      <div>页面宽度：{windowSize.innerWidth}</div>
      <div>页面高度：{windowSize.innerHeight}</div>
      <AddonCss/>
      {componentSize.width}
      <textArea ref={ref} />
      <div>
        <input {...name} />
        {name.value}
      </div>
      <UseRaf/>
    </>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
