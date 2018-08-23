import React, { Component } from 'react';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import { BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkInput, { INPUT_TYPES, CLEAR_BUTTON_MODES } from 'bpk-component-input';
import BpkLabel from 'bpk-component-label';
import BpkCard from 'bpk-component-card';
import { withButtonAlignment, withRtlSupport } from 'bpk-component-icon';
import ArrowIcon from 'bpk-component-icon/sm/long-arrow-right';
import BpkFormValidation from 'bpk-component-form-validation';
import BpkRadio from 'bpk-component-radio';
import axios from 'axios';
import S3Uploader from '../Util/S3Uploader/index';
import SuccessMessage from '../Util/SuccessMessage/index';
import ErrorMessage from '../Util/ErrorMessage/index';

import STYLES from './_registrationForm.scss';

const AlignedArrowIcon = withButtonAlignment(withRtlSupport(ArrowIcon));

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      surname: '',
      cvUrl: '',
      error: null,
      formValid: true,
      workTime: 'Any',
      registrationSuccessful: false,
    };

    this.isValid = this.isValid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.updateCvUrl = this.updateCvUrl.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();

    const {
      firstname,
      surname,
      cvUrl,
      workTime,
    } = this.state;

    if (this.isValid()) {
      try {
        await axios.post('/application/uploadToDb', {
          firstname,
          surname,
          cv: cvUrl,
          workTime,
        });

        this.setState({ formValid: true, registrationSuccessful: true });
      } catch (error) {
        this.setState({ error: 'Something went wrong when registering.' });
      }
    } else {
      this.setState({ formValid: false });
    }
  }

  updateCvUrl(publicUrl) {
    this.setState({ cvUrl: publicUrl });
  }

  isValid() {
    const {
      firstname,
      surname,
      cvUrl,
    } = this.state;

    if (firstname
      && surname
      && cvUrl
    ) {
      return true;
    }

    return false;
  }

  render() {
    const {
      firstname,
      surname,
      error,
      registrationSuccessful,
      formValid,
    } = this.state;

    if (error) {
      return (<ErrorMessage message={error} />);
    }

    if (registrationSuccessful) {
      return <SuccessMessage message="Thankyou for registering with us!" />;
    }

    return (
      <div className={STYLES.Form}>
        <main className={STYLES.Form__main}>
          <BpkCard className={STYLES.Form__card}>
            <form onSubmit={this.onSubmit}>
              <BpkGridRow>
                <BpkGridColumn width={12} padded={false}>
                  <BpkText tagName="p" textStyle="lg" className={STYLES.Form__text}>
                    Application Form
                  </BpkText>
                </BpkGridColumn>
              </BpkGridRow>
              <BpkGridRow>
                <BpkGridColumn width={12} padded={false}>
                  <BpkText tagName="p" textStyle="sm" className={STYLES.Form__text}>
                    *required
                  </BpkText>
                </BpkGridColumn>
              </BpkGridRow>
              <BpkGridRow>
                <BpkGridColumn width={12}>
                  <BpkLabel htmlFor="origin">
                    First Name*
                  </BpkLabel>
                  <BpkInput
                    id="firstname"
                    type={INPUT_TYPES.text}
                    name="firstname"
                    value={firstname}
                    onChange={e => this.setState({ firstname: e.target.value })}
                    placeholder="Enter your first name."
                    clearButtonMode={CLEAR_BUTTON_MODES.whileEditing}
                    clearButtonLabel="Clear"
                    onClear={() => this.setState({ firstname: '' })}
                  />
                </BpkGridColumn>
              </BpkGridRow>
              <BpkGridRow>
                <BpkGridColumn width={12}>
                  <BpkLabel htmlFor="origin">
                    Surname*
                  </BpkLabel>
                  <BpkInput
                    id="surname"
                    type={INPUT_TYPES.text}
                    name="surname"
                    value={surname}
                    onChange={e => this.setState({ surname: e.target.value })}
                    placeholder="Enter your surname."
                    clearButtonMode={CLEAR_BUTTON_MODES.whileEditing}
                    clearButtonLabel="Clear"
                    onClear={() => this.setState({ surname: '' })}
                  />
                </BpkGridColumn>
              </BpkGridRow>
              <BpkGridRow>
                <BpkGridColumn width={12}>
                  <BpkLabel htmlFor="origin">
                    What sort of work are you looking for?
                  </BpkLabel>
                  <BpkGridRow>
                    <BpkGridColumn width={3}>
                      <BpkRadio
                        name="time"
                        label="Part Time"
                        onChange={() => this.setState({ workTime: 'Part Time' })}
                      />
                    </BpkGridColumn>
                    <BpkGridColumn width={3}>
                      <BpkRadio
                        name="time"
                        label="Full Time"
                        onChange={() => this.setState({ workTime: 'Full Time' })}
                      />
                    </BpkGridColumn>
                  </BpkGridRow>
                </BpkGridColumn>
              </BpkGridRow>
              <BpkGridRow>
                <BpkGridColumn width={12}>
                  <BpkLabel htmlFor="origin">
                    Please upload your cv*
                  </BpkLabel>
                  <S3Uploader publicUrl={this.updateCvUrl} />
                </BpkGridColumn>
              </BpkGridRow>
              <BpkGridRow>
                <BpkGridColumn width={12} className={STYLES.Form__submit}>
                  <BpkButton type="submit">
                    Submit
                      {' '}
                    <AlignedArrowIcon />
                  </BpkButton>
                </BpkGridColumn>
              </BpkGridRow>
              <BpkGridRow>
                <BpkGridColumn width={12}>
                  <BpkFormValidation id="my-form-validation" expanded={!formValid}>
                    Please complete all of the required inputs*
                  </BpkFormValidation>
                </BpkGridColumn>
              </BpkGridRow>
            </form>
          </BpkCard>
        </main>
      </div>
    );
  }
}
