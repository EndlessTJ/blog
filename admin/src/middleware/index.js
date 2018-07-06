export const formatDate = (date, type = 'symbol', accuracy = false) => {
  let new_date = new Date(date);
  let year = new_date.getFullYear();
  let month =
    new_date.getMonth() + 1 > 9
      ? new_date.getMonth() + 1
      : '0' + (new_date.getMonth() + 1);
  let day =
    new_date.getDate() > 9 ? new_date.getDate() : '0' + new_date.getDate();
  let hour =
    new_date.getHours() > 9 ? new_date.getHours() : '0' + new_date.getHours();
  let min =
    new_date.getMinutes() > 9
      ? new_date.getMinutes()
      : '0' + new_date.getMinutes();
  if (type === 'text') {
    if (accuracy) {
      return `${year}年${month}月${day}日${hour}时${min}分`;
    } else {
      return `${year}年${month}月${day}日`;
    }
  } else if (type === 'symbol') {
    if (accuracy) {
      return `${year}-${month}-${day} ${hour}:${min}`;
    } else {
      return `${year}-${month}-${day}`;
    }
  }
};
