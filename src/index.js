const sumOrProduct = (first, second) => { 
   
    if(!first && first!=0) return 0;    
    if(!second && second!=0) return 0;    

    return first%2?first+second:first*second;
};

const getPositiveSum = (first, second, third) => {
    let sum = 0;

    if (first > 0) {
        sum += first;
    }
    if (second > 0) {
        sum += second;
    }
    if (third > 0) {
        sum += third;
    }

    return sum;
}

const getMaxOfProductSum = (first, second, third) => {
    const product = first * second * third;
    const sum = first + second + third;

    return product > sum ? product + 3 : sum + 3;
}