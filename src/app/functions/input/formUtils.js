const areInputsNotEmpty = (watch, ...fieldNames) => {
  return fieldNames.every(fieldName => watch(fieldName) !== '');
};

export { areInputsNotEmpty };