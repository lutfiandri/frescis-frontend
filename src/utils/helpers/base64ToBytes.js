export default function base64ToBytes(base64String) {
  const decodedBuffer = Buffer.from(base64String, 'base64');
  const bytes = new Uint8Array(decodedBuffer);
  return bytes;
}
