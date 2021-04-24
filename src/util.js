export const getSmallImage = (path, size) => {
  const image = path.match(/media\/games/)
    ? path.replace("/media/games", `/media/resize/${size}/-/games`)
    : path.replace("/media/screenshots", `/media/resize/${size}/-/screenshots`);

  return image;
};
