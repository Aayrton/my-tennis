export const formatWeight: (weight: number) => string = (weight) => {
  const formattedWeight = weight / 1000;
  return `${formattedWeight} kg`;
};

export const formatHeight: (height: number) => string = (height) => {
  const formattedHeight = `${height / 100}`;

  return formattedHeight.replace(".", "m");
};
