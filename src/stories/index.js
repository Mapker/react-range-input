import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Range from '../index';
import '../../style.css';

storiesOf('Button', module)
  .add('default view', () => (
    <Range />
  ))
  .add('with min, max and value props', () => (
    <Range min={0} max={10} value={2} />
  ))
  .add('material style', () => (
    <Range className="material" />
  ));
