import dayjs from 'dayjs';

// 设置时间为当天0点
export function startOfDay2rfc3339(dayOffset = 0) {
    return dayjs().add(dayOffset, 'day').startOf('day').format('YYYY-MM-DDTHH:mm:ss.SSS[-08:00]');
}

// 设置时间为当天24点
export function endOfDay2rfc3339(dayOffset = 0) {
    return dayjs().add(dayOffset, 'day').endOf('day').format('YYYY-MM-DDTHH:mm:ss.SSS[-08:00]');
}

// RFC 3339 timestamp 转化成 数字
export function rfc3339ToInt(rfc3339) {
    return new Date(rfc3339).getTime()
}
