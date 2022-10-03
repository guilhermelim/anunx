/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';

const PageCheckMounted = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return <>{children}</>;
};

export default PageCheckMounted;
