import React from 'react';
import BpkText from 'bpk-component-text';
import { BpkGridContainer, BpkGridRow } from 'bpk-component-grid';
import PropTypes from 'prop-types';
import logo from '../../img/oops.gif';

import STYLES from './_errorMessage.scss';

const ErrorMessage = props => (
  <BpkGridContainer className={STYLES.Form__errorContainer}>
    <BpkGridRow>
      <img alt="authboy logo" height="250" width="250" src={logo} />
    </BpkGridRow>
    <BpkGridRow>
      <BpkText tagName="h1" textStyle="base" className={STYLES.App__error}>
        {props.error}
      </BpkText>
    </BpkGridRow>
    <BpkGridRow>
      <BpkText tagName="h1" textStyle="base" className={STYLES.App__error}>
        Please contact F-LEX support if this continues to be an issue.
      </BpkText>
    </BpkGridRow>
  </BpkGridContainer>
);

export default ErrorMessage;

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};
