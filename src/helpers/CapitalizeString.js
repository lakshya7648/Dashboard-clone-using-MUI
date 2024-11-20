export const capitalizeString = (string) => {
  const capitalizedFirstLetter = string[0].toUpperCase();
  const restString = string.slice(1);

  const newCapString = capitalizedFirstLetter + restString;

  return newCapString;
};
