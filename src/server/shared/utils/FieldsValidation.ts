export const validation = (value: object): void | string[] => {
  const requiredField: string[] = [];

  Object.entries(value).forEach(([key, value]) => {
    if (!value) requiredField.push(key);
  });

  if (requiredField[0]) return requiredField;
};
