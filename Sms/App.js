import * as SMS from 'expo-sms';

const { result } = await SMS.sendSMSAsync(
  ['0123456789', '9876543210'],
  'My sample HelloWorld message',
  {
    attachments: {
      uri: 'path/myfile.png',
      mimeType: 'image/png',
      filename: 'myfile.png',
    },
  }
);