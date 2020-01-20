import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../index';

jest.mock('../../../models/actions', () => {
  return {
    fetchLatest: jest.fn(() => Promise.resolve())
  }
})

test('should call API', () => {
  
})
