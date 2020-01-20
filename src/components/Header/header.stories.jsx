import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './index';

export const headerProps = {
  currency_code: 'USD',
  currency_name: 'United States Dollar',
  amount: 10000
}

storiesOf('COMPONENT | Header', module)
  .add('editing', () => <Header editing={true}/>)
  .add('default', () => <Header editing={false}/>)