function getBeijingDate() {
    const formatter = new Intl.DateTimeFormat('zh-CN', {
        timeZone: 'Asia/Shanghai', hour12: false,
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    const parts = formatter.formatToParts(new Date());
    const { year, month, day, hour, minute, second } = Object.fromEntries(
        parts.map(({ type, value }) => [type, value])
    );
    // 构建一个表示北京时间的 Date 对象
    return new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
}

function getBeijingStr() {
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
    // 构建一个表示北京时间的字符串
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
