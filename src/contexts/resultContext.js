import { createContext, useState } from 'react';

const ResultContext = createContext();

// CONTOH PREDICTIONS
// const predictions = [
//   {
//     time: 0.1929889169996386,
//     image: {
//       width: 711,
//       height: 533,
//     },
//     predictions: [
//       {
//         class: 'Oreochromis Niloticus - Highly Fresh',
//         confidence: 0.5393,
//       },
//       {
//         class: 'Oreochromis Niloticus - Fresh',
//         confidence: 0.2314,
//       },
//       {
//         class: 'Oreochromis Niloticus - Not Fresh',
//         confidence: 0.1326,
//       },
//       {
//         class: '.ipynb_checkpoints',
//         confidence: 0.0967,
//       },
//     ],
//     top: 'Oreochromis Niloticus - Highly Fresh',
//     confidence: 0.5393,
//     image_path: '/tmp/tmpxt3_v05r',
//     prediction_type: 'ClassificationModel',
//   },
// ];

export const ResultContextProvider = ({ children }) => {
  // result -> {image: string (base64), predictions: []}

  const [result, setResult] = useState({});

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export default ResultContext;
