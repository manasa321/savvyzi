import twilio from 'twilio';

const accountSid = 'VA069c79950b64e159bb4dddc00c7a34dc';
const authToken = process.env.TWILIO_AUTH_TOKEN; // Make sure to set this in your environment variables
const client = twilio(accountSid, authToken);

export const sendOTP = async (phoneNumber, otp) => {
  try {
    await client.messages.create({
      body: `Your OTP for login is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER, // Set this in your environment variables
      to: phoneNumber
    });
    return true;
  } catch (error) {
    console.error('Error sending OTP:', error);
    return false;
  }
};