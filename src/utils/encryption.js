import CryptoJS from 'crypto-js';

const SECRET_KEY = 'Y1U3lW7qTNL5raAd3Go2';

export function encryptPayload(payload) {
  return CryptoJS.AES.encrypt(JSON.stringify(payload), SECRET_KEY).toString();
}

export function decryptPayload(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}
