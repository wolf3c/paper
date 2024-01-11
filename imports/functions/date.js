
// 设置时间为当天0点
export function startOfDay2rfc3339(dayOffset = 0) {
    // 获取当前时间
    let now = new Date();

    let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
    // console.log(startOfDay)
    return startOfDay.toISOString();
}

// 设置时间为当天24点
export function endOfDay2rfc3339(dayOffset = 0) {
    // 获取当前时间
    let now = new Date();

    let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
    // console.log(endOfDay)
    return endOfDay.toISOString();
}

// RFC 3339 timestamp 转化成 数字
export function rfc3339ToInt(rfc3339) {
    let date = new Date(rfc3339);
    let timestamp = date.getTime();
    return timestamp;
}
