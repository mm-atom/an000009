const test = require('ava');

const { default: a } = require('../dist/index');

const tm = 1551167783406;

test('fd-an000052 -> 时间戳转换日期(带时分秒)', (t) => {
	t.is(a(tm, 'YYYY-MM-DD HH:mm:ss'), '2019-02-26 15:56:23');
});

test('fd-an000052 -> 时间戳转换日期(不带时分秒)', (t) => {
	t.is(a(tm, 'YYYY/MM/DD'), '2019/02/26');
});
