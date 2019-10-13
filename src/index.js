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
    if(typeof(first) === 'undefined'){
        return 0;
    }

    const product = first * second * third;
    const sum = first + second + third;
    if(product > sum){
        return product + 3
    }else{
       return sum + 3;
    }
}

const getMarkFromPoints = rate => {
    let result = '';

    if (rate < 0 || rate > 100) {
        return result;
    } else if (rate >= 0 && rate < 20) {
        result = 'F';
    } else if (rate < 40) {
        result = 'E';
    } else if (rate < 60) {
        result = 'D';
    }  else if (rate < 75) {
        result = 'C';
    }  else if ( rate < 90) {
        result = 'B';
    }  else if (rate <= 100) {
        result = 'A';
    }

    return result;
}

const getEvenSumFrom1To99 = () => 2500;

const checkIsPrime = (number) => {
    if(typeof number === 'undefined'){
        return false;
    }

    if(number === null){
        return false;
    }

    if(isNaN(number)){
        return false;
    }

    if(number === 0){
        return false;
    }

    for (let i = 2; i < number / 2; i++) {
        if (number % i) {
            return false;
        }
    }
    
    return true;
}
