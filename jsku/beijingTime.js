// 获取北京时间data对象
function getBeijingDate() {
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000; // 转换为 UTC 时间
    const beijingOffset = 8 * 60 * 60 * 1000; // 北京时区偏移量（UTC+8）
    return new Date(utcTime + beijingOffset);
}

function getBeijingDate() {
    return new Date(new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }));
}

function getBeijingStr() {
    return new Date().toLocaleString('zh-CN', {
        timeZone: 'Asia/Shanghai',
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).replace(/\//g, '-').replace(/,/g, '');
}
