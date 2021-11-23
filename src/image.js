export const makeImage = (imgUrl) => {
  const image = document.createElement('img');

  image.src = imgUrl;
  return image;
};
