// export default function base64ToBlob(base64String) {
//   const byteCharacters = atob(base64String);
//   const byteArrays = [];

//   for (let offset = 0; offset < byteCharacters.length; offset += 512) {
//     const slice = byteCharacters.slice(offset, offset + 512);

//     const byteNumbers = new Array(slice.length);
//     for (let i = 0; i < slice.length; i++) {
//       byteNumbers[i] = slice.charCodeAt(i);
//     }

//     const byteArray = new Uint8Array(byteNumbers);
//     byteArrays.push(byteArray);
//   }

//   return new Blob(byteArrays, { type: 'image/jpeg' });
// }

export default async function base64ToBlob(base64string) {
  try {
    const res = await fetch(base64string);
    const blobFile = await res.blob();
    return blobFile;
  } catch (error) {
    throw error;
  }
}
