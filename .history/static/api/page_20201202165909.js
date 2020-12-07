/**
 * 随机精选
 */
function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - count,
    temp,
    index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}
/**
 * 选择
 */
getTrandecodeUrl(data) {
    let solitData = data.splice(0, 9);
    let newData = solitData.map(item => {
      item.name = decodeURI(item.name);
      item.description = decodeURI(item.description);
      return item;
    });
    return newData;
  }
export { getRandomArrayElements，getTrandecodeUrl };
