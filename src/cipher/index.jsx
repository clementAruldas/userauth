import CryptoJS from "crypto-js";

const passphrase = "mySecretPassphrase";

export const encrypt = (dataObj) => {
  const dataString = JSON.stringify(dataObj);
  const encryptedData = CryptoJS.AES.encrypt(dataString, passphrase).toString();

  return encryptedData;
};

export const decrypt = (encryptedData) => {
  const decryptedData = CryptoJS.AES.decrypt(encryptedData, passphrase);
  const decryptedString = decryptedData.toString(CryptoJS.enc.Utf8);
  const decryptedObject = JSON.parse(decryptedString);

  return decryptedObject;
};
