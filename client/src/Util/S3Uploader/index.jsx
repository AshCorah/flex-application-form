import React, { Component } from 'react';
import axios from 'axios';
import ReactS3Uploader from 'react-s3-uploader';
import PropTypes from 'prop-types';

const getSignedUrl = async (file, callback) => {
  const params = {
    objectName: file.name,
    contentType: file.type,
  };

  const { data } = await axios.get('https://urlsigner-uiczqjvmcp.now.sh/', { params });
  callback(data);
};

export default class S3Uploader extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      error: null,
      uploadProgress: 0,
    };
    
    this.onUploadFinish = this.onUploadFinish.bind(this);
    this.onUploadError = this.onUploadError.bind(this);
    this.onUploadProgress = this.onUploadProgress.bind(this);
  }

  onUploadProgress(percent) {
    this.setState({ uploadProgress: percent });
  }

  onUploadFinish(e) {
    console.log(e);
    console.log(this.props);
    this.props.publicUrl(e.publicUrl);
  }

  onUploadError(error) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;

    if (error) return <div>{error}</div>;

    return (
      <div>
        <ReactS3Uploader
          getSignedUrl={getSignedUrl}
          onProgress={this.onUploadProgress}
          onError={this.onUploadError}
          onFinish={this.onUploadFinish}
          uploadRequestHeaders={{
            'x-amz-acl': 'public-read',
          }}
          contentDisposition="auto"
        />
        <br />
      </div>
    );
  }
}

S3Uploader.propTypes = {
  publicUrl: PropTypes.func.isRequired,
};
