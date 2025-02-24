// 获取北京时间的各个部分（年、月、日、小时、分钟、秒）
function getBeijingParts() {
    const formatter = new Intl.DateTimeFormat('zh-CN', {
        timeZone: 'Asia/Shanghai',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    const parts = formatter.formatToParts(new Date());
    return Object.fromEntries(
        parts.map(({ type, value }) => [type, value])
    );
}

// 获取北京时间的 Date 对象
function getBeijingDate() {
    const { year, month, day, hour, minute, second } = getBeijingParts();
    // 使用 Date.UTC 创建 UTC 时间的时间戳
    const utcTime = Date.UTC(year, month - 1, day, hour, minute, second);
    return new Date(utcTime);
}

// 获取北京时间的字符串
function getBeijingStr() {
    const { year, month, day, hour, minute, second } = getBeijingParts();
    // 构建一个表示北京时间的字符串
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
