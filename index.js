// Import CryptoJS library
const CryptoJS = require("crypto-js");

// Set up key and IV
const key = CryptoJS.enc.Utf8.parse('0123456789abcdef0123456789abcdef');
var iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');
// const key = "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef";

// Encrypt data using AES-256
const plaintext = 'test';
const ciphertext = CryptoJS.AES.encrypt(plaintext, key, {  mode: CryptoJS.mode.CBC, keySize: 256, iv:iv }).toString();

// Decrypt data using AES-256
const bytes = CryptoJS.AES.decrypt(ciphertext, key, {  mode: CryptoJS.mode.CBC, keySize: 256, iv:iv });
const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

// Log results
console.log('Plaintext: ' + plaintext);
console.log('Ciphertext: ' + ciphertext);
console.log('Decrypted data: ' + decryptedData);