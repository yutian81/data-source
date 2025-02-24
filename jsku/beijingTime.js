function getBeijingDate() {
    const now = new Date();
    return new Date(now.getTime() + 8 * 60 * 60 * 1000);
}

// 中文环境通常返回YYYY/MM/DD HH:mm:ss，
// 所以需要用replace将斜杠替换为短横线，并移除逗号（如果有的话）
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
