import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../index';
import { render } from '@testing-library/react'
test('should render', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Header />, container);
})

describe('should show textinput when edit button clicked', () => {
  const { container, getByLabelText, } = render(<Header />);

})