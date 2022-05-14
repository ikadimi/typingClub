export const errorClassNames = "px-1 bg-red-400";
export const validClassNames = "px-1 bg-green-400";
export const highlightedCharClassNames =
  "pb-1 pt-2 px-1 text-lg  font-semibold  border-2 border-solid border-blue-400 tracking-widest text-center";
export const charClassNames = "pb-1 pt-2 text-lg  font-semibold tracking-wider";
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
