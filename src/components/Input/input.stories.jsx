import React from 'react';
import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import Input from '.';

storiesOf('COMPONENT | Input', module)
  .add('default', () => <Input />)