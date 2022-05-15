export const textToArrayMapping = (text: string): MappedBody[] => {
  const mappedText: MappedBody[] = [];
  text.split("").forEach((char, charIndex) => {
    mappedText.push({
      active: !charIndex,
      passed: false,
      valid: false,
      char,
    });
  });
  return mappedText;
};

export const mapValues = (
  active: boolean,
  passed: boolean,
  valid: boolean,
  char: string
): MappedBody => ({
  active,
  passed,
  valid,
  char,
});

export const getWordPerMinute = (
  start: number,
  end: number,
  numberofEntries: number
): number => {
  // 60 000 millisecond in a minute
  const elapsed = (end - start) / 60000;
  // avergae word is about 5 charachters
  return Math.round(numberofEntries / 5 / elapsed);
};

export const getAccuracy = (textArr: [MappedBody]) => {
  const validEntries = textArr.filter((char) => char.valid).length;
  const textLength = textArr.length;
  const accuracy = Math.round((validEntries / textLength) * 100);
  return accuracy;
};
