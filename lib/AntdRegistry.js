'use client';
import React from 'react';
import { createCache,extractStyle, StyleProvider } from '@ant-design/cssinjs';
import  Entity from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';

const StyledComponentsRegistry = ({ children }) => {
  const cache = React.useMemo<Entity>(() => createCache(), []);
  useServerInsertedHTML(() => (
    <style id="antd"  />
  ));
  return <StyleProvider cache={cache}>
    {children}
  
  </StyleProvider>;
};

export default StyledComponentsRegistry;