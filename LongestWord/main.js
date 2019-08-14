/*=======找出字符串中最长的单词，并返回它的长度======*/
function getLongestWord(str, sperator=' ') {
    if (!str) return;

    // 定义初始长度和单词
    let longestWord = {
        len: 0,
        word: ''
    };

    // 先对 str 进行结束符进行替换，然后进行分割再遍历每个单词
    str.replace(/[,\.;]/g, '').split(sperator).forEach(word => {
        const { len } = longestWord;
        if (word.length > len) {
            longestWord = {
                len: word.length,
                word: word
            };
        }
    });
    return longestWord;
}

console.log(getLongestWord('i am su.'));
