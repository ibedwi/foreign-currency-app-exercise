import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import './node_modules/bootstrap/dist/css/bootstrap.css';
import Card from './index';

export const cardProps = {
  currency_amount: 10000,
  currencyTo_name: 'Euro',
  currencyTo: 'EUR',
  currency_from: 'USD',
  rate: 1
}

storiesOf('COMPONENT | Card', module)
  .add('default', () => <div className="w-full h-full flex flex-col justify-center items-center"> <Card /> </div>)
  .add('filled', () => <div className="w-full h-full flex flex-col justify-center items-center"> <Card { ...cardProps } /> </div>)
  .add('multiple', () => 
      <div className="w-full h-full flex flex-col justify-center items-center"> 
        <Card currencyTo={'EUR'} />
        <Card currencyTo={'BGN'} />
        <Card currencyTo={'NZD'} />
        <Card currencyTo={'ILS'} />
        <Card currencyTo={'RUB'} />
        <Card currencyTo={'CAD'} />
        <Card currencyTo={'USD'} />
        <Card currencyTo={'PHP'} />
        <Card currencyTo={'CHF'} />
        <Card currencyTo={'ZAR'} />
        <Card currencyTo={'AUD'} />
        <Card currencyTo={'JPY'} />
        <Card currencyTo={'TRY'} />
        <Card currencyTo={'HKD'} />
        <Card currencyTo={'MYR'} />
        <Card currencyTo={'THB'} />
        <Card currencyTo={'HRK'} />
        <Card currencyTo={'NOK'} />
        <Card currencyTo={'IDR'} />
        <Card currencyTo={'DKK'} />
        <Card currencyTo={'CZK'} />
        <Card currencyTo={'HUF'} />
        <Card currencyTo={'GBP'} />
        <Card currencyTo={'MXN'} />
        <Card currencyTo={'KRW'} />
        <Card currencyTo={'ISK'} />
        <Card currencyTo={'SGD'} />
        <Card currencyTo={'BRL'} />
        <Card currencyTo={'PLN'} />
        <Card currencyTo={'INR'} />
        <Card currencyTo={'RON'} />
        <Card currencyTo={'CNY'} />
        <Card currencyTo={'SEK'} />
      </div>
    )