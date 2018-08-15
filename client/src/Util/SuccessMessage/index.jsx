import React from 'react';
import BpkText from 'bpk-component-text';
import { BpkGridContainer, BpkGridRow } from 'bpk-component-grid';
import PropTypes from 'prop-types';

import STYLES from './_successMessage.scss';

const SuccessMessage = props => (
  <BpkGridContainer>
    <BpkGridRow>
      <BpkText tagName="h1" textStyle="xl" className={STYLES.SuccessMessage__heading}>
        {props.message}
      </BpkText>
    </BpkGridRow>
  </BpkGridContainer>
);

export default SuccessMessage;

SuccessMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
