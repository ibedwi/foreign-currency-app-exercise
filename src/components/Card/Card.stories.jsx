import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import './node_modules/bootstrap/dist/css/bootstrap.css';
import Card from './index';

export const cardProps = {
  currency_amount: 10000,
  currency_to_name: 'Euro',
  currency_to: 'EUR',
  currency_from: 'USD',
  rate: 1
}

storiesOf('Card', module)
  .add('default', () => <div className="w-full h-full flex flex-col justify-center items-center"> <Card /> </div>)
  .add('filled', () => <div className="w-full h-full flex flex-col justify-center items-center"> <Card { ...cardProps } /> </div>)
  .add('multiple', () => 
      <div className="w-full h-full flex flex-col justify-center items-center"> 
        <Card currency_to={'EUR'} />
        <Card currency_to={'BGN'} />
        <Card currency_to={'NZD'} />
        <Card currency_to={'ILS'} />
        <Card currency_to={'RUB'} />
        <Card currency_to={'CAD'} />
        <Card currency_to={'USD'} />
        <Card currency_to={'PHP'} />
        <Card currency_to={'CHF'} />
        <Card currency_to={'ZAR'} />
        <Card currency_to={'AUD'} />
        <Card currency_to={'JPY'} />
        <Card currency_to={'TRY'} />
        <Card currency_to={'HKD'} />
        <Card currency_to={'MYR'} />
        <Card currency_to={'THB'} />
        <Card currency_to={'HRK'} />
        <Card currency_to={'NOK'} />
        <Card currency_to={'IDR'} />
        <Card currency_to={'DKK'} />
        <Card currency_to={'CZK'} />
        <Card currency_to={'HUF'} />
        <Card currency_to={'GBP'} />
        <Card currency_to={'MXN'} />
        <Card currency_to={'KRW'} />
        <Card currency_to={'ISK'} />
        <Card currency_to={'SGD'} />
        <Card currency_to={'BRL'} />
        <Card currency_to={'PLN'} />
        <Card currency_to={'INR'} />
        <Card currency_to={'RON'} />
        <Card currency_to={'CNY'} />
        <Card currency_to={'SEK'} />
      </div>
    )