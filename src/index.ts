import moment from 'moment';

/**
 * 时间戳转换日期
 * @param time 时间戳
 * @param format 转换之后的格式
 */
export default function format(time: number, format: string) {
	return moment(time).format(format);
}
