// 定义一个函数，接受一个日期字符串作为参数
function formatTimeAgo(dateString) {
  // 将日期字符串转换成 Date 对象
  const date = new Date(dateString);

  // 获取当前时间的时间戳
  const now = new Date();

  // 计算时间差（单位：毫秒）
  const diff = now - date;

  // 转换成天数
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  // 如果天数小于 1，表示是今天发布的
  if (days < 1) {
    return '今天';
  }

  // 如果天数小于 30，表示是几天前发布的
  if (days < 30) {
    return `${days}天前`;
  }

  // 如果天数小于 365，表示是几个月前发布的
  if (days < 365) {
    const months = Math.floor(days / 30);
    return `${months}个月前`;
  }

  // 如果天数大于等于 365，表示是几年前发布的
  const years = Math.floor(days / 365);
  return `${years}年前`;
}

export default formatTimeAgo

// 示例使用：
const timeString = '2024-02-15T12:00:00Z'; // 假设时间字符串
const formattedTime = formatTimeAgo(timeString);
console.log(formattedTime); // 输出：几天前或几个月前
