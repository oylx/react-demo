import { useEffect } from 'react';

export const UseDocumentTitle = (title) => {
  useEffect(
    () => {
      document.title = title;
      return () => (document.title = '前端精读');
    },
    [title]
  );
};
