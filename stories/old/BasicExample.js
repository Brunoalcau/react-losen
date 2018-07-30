// @flow
import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions'; // eslint-disable-line

import Wizard from '../../src/Wizard';
import Step from '../../src/Step';

import Emoji from '../components/Emoji';
import CustomControls from '../components/CustomControls';

const BasicExample = () => (
  <Wizard
    onComplete={action('wizard completed')}
    render={() => (
      <Fragment>
        <Step name="first">
          <Emoji className="f-headline lh-copy" emoji="☝️" />
          <div className="mt2 f6 lh-copy">
            <p className="mv0">Step 1</p>
          </div>
        </Step>
        <Step name="second">
          <Emoji className="f-headline lh-copy" emoji="✌️" />
          <div className="mt2 f6 lh-copy">
            <p className="mv0">Step 2</p>
          </div>
        </Step>
        <Step name="third">
          <Emoji className="f-headline lh-copy" emoji="🤟" />
          <div className="mt2 f6 lh-copy">
            <p className="mv0">Step 3</p>
          </div>
        </Step>
        <CustomControls />
      </Fragment>
    )}
  />
);

export default BasicExample;
