/// <reference path="lib/storage.d.ts" />
var settings = new SettingStorage({
    checkbox: true,
    radio: 'one',
    select: 'two',
    selectmany: ['one', 'three'],
    textbox: 'foo',
    mediumtext: 'This a textbox with more text in it.',
    widetext: 'This is a textbox with a very large amount of text inside of it.',
    textarea: 'This is a <textarea>.\nIt has multiple lines.',
    bigarea: 'This is a <textarea> with lots of space.',
    biggestarea: 'This is a really big <textarea>.',
    transform: ['foo', 'bar', 'baz'],
    numeric: 42,
    range: 0,
    color: '#ff0000',
    date: '1970-01-01',
    month: '1970-01',
    week: '1970-W1',
    time: '00:00'
});
