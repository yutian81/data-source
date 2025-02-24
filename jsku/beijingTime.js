function beijingTimeData() {
    const now = new Date();
    // 计算北京时间（UTC+8）
    const beijingTime = new Date(now.getTime() + (8 * 60 * 60 * 1000));
    return beijingTime;
}

function beijingTimeStr() {
    const beijingTime = beijingTimeData();
    // 格式化时间字符串
    const year = beijingTime.getUTCFullYear();
    const month = String(beijingTime.getUTCMonth() + 1).padStart(2, '0');
    const day = String(beijingTime.getUTCDate()).padStart(2, '0');
    const hours = String(beijingTime.getUTCHours()).padStart(2, '0');
    const minutes = String(beijingTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(beijingTime.getUTCSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// 示例
console.log("北京时间 (Date对象):", getBeijingTime());
console.log("北京时间 (字符串):", getBeijingTimeStr());
