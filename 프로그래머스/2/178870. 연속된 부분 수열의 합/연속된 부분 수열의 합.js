const solution = (sequence, k) => {
    let left = 0;
    let right = 0;
    let sum = sequence[0];
    let result = [0, sequence.length - 1];
    let minLength = sequence.length;
    
    while (right < sequence.length) {
        if (sum === k) {
            const currentLength = right - left + 1;
            
            if (currentLength < minLength) {
                minLength = currentLength;
                result = [left, right];
            }
            
            sum -= sequence[left++];
            
            if (right < sequence.length - 1) {
                sum += sequence[++right];
            }
        } 
        else if (sum < k) {
            if (right < sequence.length - 1) {
                sum += sequence[++right];
            } else {
                break;
            }
        } 
        else {
            sum -= sequence[left++];
        }
    }
    
    return result;
};