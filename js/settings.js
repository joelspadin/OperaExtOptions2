var settings = new SettingStorage({
    checkbox: true,
    radio: 'one',
    select: 'two',
    selectmany: ['one', 'three'],
    textbox: 'foo',
    mediumtext: 'This is a textbox with more text in it.',
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

var antiSettings = new SettingStorage({
    checkbox: false,
    radio: 'two',
    select: 'one',
    selectmany: ['two'],
    textbox: 'bar',
    mediumtext: 'This is not a textbox with more text in it.',
    widetext: 'This is not a textbox with a very large amount of text inside of it.',
    textarea: 'This is not a <textarea>.\nIt has multiple lines.',
    bigarea: 'This is not a <textarea> with lots of space.',
    biggestarea: 'This is not a really big <textarea>.',
    transform: ['oof', 'rab', 'zab'],
    numeric: -42,
    range: 0,
    color: '#00ffff',
    date: '1970-01-01',
    month: '1970-01',
    week: '1970-W1',
    time: '00:00'
}, {
    prefix: 'anti_'
});
