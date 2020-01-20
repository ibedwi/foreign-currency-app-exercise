import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../index';
import {render, fireEvent, screen, cleanup} from '@testing-library/react';

afterEach(cleanup)
describe('Input component should render correctly', () => {
  const { container } = render(<Input />)
  const { firstChild } = container
  // console.log('firstChild', firstChild)
  // test('renders correctly', () => {
  //     expect(container).toHaveTextContent(`Learn React`)
  // })

  test('renders-correctly', () => {
      expect(firstChild).toHaveClass(`card-input`)
  })
})

// test('should add currency data', () => {
//   const addCurrencyHandler = jest.fn();
//   const { container, getByLabelText, getByText, getByTestId } = render(<Input addCurrencyHandler={addCurrencyHandler} />)
// }) 
// test('should render currencyListData', () => {
//   let currencyListData = {
//     CAD: 1.3069012179,
//     HKD: 7.7683355886,
//     ISK: 124.1317095174,
//     PHP: 50.9598556608,
//   }

//   const { container, getByLabelText, getByText, getByTestId } = render(<Input currencyList={currencyListData} />)
//   const toggleShowCurrencyList = jest.fn();

//   const input = container.querySelectorAll('input');
//   const currenciesNode = getByLabelText('currencies')
//   const buttonNodes = getByText('Add');
//   // expect(screen.getByLabelText('currencies-list')).not.toBeInTheDocument()

//   // console.log('buttonNodes', buttonNodes)
//   // fireEvent.click(getByLabelText('toggle-currency-list'));
//   fireEvent(buttonNodes,new MouseEvent('click'))
//   expect(container.toggleShowCurrencyList()).toHaveBeenCalledTimes(1)
//   // expect(toggleShowCurrencyList).toHaveBeenCalledWith(1)
//   // const result = mount(<Input maxLength={10}></Input>);
//   // result.find('input').simulate('change', { target: { value: '1234567890!!!' } });
//   // expect(result.state().value).to.equal("1234567890");

//   // form.simulate('change', {target: {value: 'CAD'}});
//   // expect(container.state)
//   // input.value = 'CAD'
//   // console.log(input.value)
//   // console.log('container', container)
//   // console.log('currenciesNode', currenciesNode)
//   // console.log('buttonNodes', buttonNodes)
//   // container.firstChild.classList.contains('foo')
//   // expect(screen.getByLabelText('currencies-list')).toBeInTheDocument()
// })
