function solution(l, r) {
    let arr = [];
    
    for (let i = l; i <= r; i++) {
        if (/^[05]+$/.test(i.toString())) {
            arr.push(i);
        }
    }
    
    return arr.length === 0 ? [-1] : arr;
}