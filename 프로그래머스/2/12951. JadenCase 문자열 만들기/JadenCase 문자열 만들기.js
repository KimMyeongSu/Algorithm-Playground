const solution = (s)  =>{
    // 문자열을 공백을 기준으로 나누고, 각 단어를 처리한 후 다시 합칩니다.
    return s.split(" ").map(word => {
        // 빈 문자열인 경우 그대로 반환
        if (word === "") return word;
        
        // 첫 글자와 나머지 부분을 분리
        const firstChar = word.charAt(0);
        const restChars = word.slice(1);
        
        // 첫 글자가 알파벳인 경우 대문자로, 나머지는 소문자로 변환
        return firstChar.toUpperCase() + restChars.toLowerCase();
    }).join(" ");
}