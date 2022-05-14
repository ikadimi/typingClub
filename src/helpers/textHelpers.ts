export const textToArrayMapping = (text: string): [MappedBody] => {
  const mappedText = [];
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
