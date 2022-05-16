export const errorClassNames =
  "my-1 inline-block whitespace-pre pb-1 pt-2 text-2xl font-semibold bg-red-100";
export const validClassNames =
  "my-1 inline-block whitespace-pre pb-1 pt-2 text-2xl font-semibold bg-green-100";
export const highlightedCharClassNames =
  "my-1 inline-block whitespace-pre bg-slate-50 pb-1 pt-2 text-2xl font-semibold border-b-4 border-solid border-blue-400 text-center";
export const charClassNames =
  "my-1 inline-block whitespace-pre pb-1 pt-2 text-2xl font-semibold text-gray-400";
export const textConfig = {
  count: 1, // Number of "words", "sentences", or "paragraphs"
  format: "plain", // "plain" or "html"
  paragraphLowerBound: 3, // Min. number of sentences per paragraph.
  paragraphUpperBound: 7, // Max. number of sentences per paragarph.
  random: Math.random, // A PRNG function
  sentenceLowerBound: 5, // Min. number of words per sentence.
  sentenceUpperBound: 15, // Max. number of words per sentence.
  suffix: "\n", // Line ending, defaults to "\n" or "\r\n" (win32)
  units: "sentences", // paragraph(s), "sentence(s)", or "word(s)"
  // words: ["ad", ...]       // Array of words to draw from
};
