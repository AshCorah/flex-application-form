import React from 'react';
import axios from 'axios';
import ReactS3Uploader from 'react-s3-uploader';

const getSignedUrl = async () => {
  const signedUrl = await axios.get('/application/signedUrl');
  return signedUrl;
};

const S3Uploader = () => (
  <div>
    <ReactS3Uploader
      getSignedUrl={getSignedUrl}
      accept="pdf/*"
      uploadRequestHeaders={{
        'x-amz-acl': 'public-read',
      }}
      onProgress={e => console.log(e)}
      onError={e => console.log(e)}
      onFinish={e => console.log(e)}
      contentDisposition="auto"
      autoUpload={false}
    />
  </div>
);

export default S3Uploader;
