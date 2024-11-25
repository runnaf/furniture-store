export const getImagesByColor = (color, data) => {
  return data
    .filter(item => item.value === color)
    .flatMap(item => item.images)
}
