describe('sumOrProduct', () => {
    it('should return product of (4, 6)', () => {
        const first = 4;
        const second = 6;
        const expected = 24;

        const actual = sumOrProduct(first, second);

        assert.equal(actual, expected);
    });

    it('should return sum of (3, 6)', () => {
        const first = 3;
        const second = 6;
        const expected = 9;

        actual = sumOrProduct(first, second);

        assert.equal(actual, expected);
    });

    it('should return 0 product of (2,0)', () => {
        const first = 2;
        const second = 0;
        const expected = 0;

        actual = sumOrProduct(first, second);

        assert.equal(actual, expected);
    });

    it('should return 1 sum of (1,0)', () => {
        const first = 1;
        const second = 0;        
        const expected = 1;

        actual = sumOrProduct(first, second);

        assert.equal(actual, expected);
    });

    it('should return 0 if one of the arguments is undefined', () => {
        const first = 3;
        const expected = 0;

        actual = sumOrProduct(first);

        assert.equal(actual, expected);
    });

    it('should return 0 if one of the arguments is null', () => {
        const first = null;
        const second = null;        
        const expected = 0;

        actual = sumOrProduct(first, second);

        assert.equal(actual, expected);
    });

    it('should return 0 if one of the arguments is NaN', () => {       
        const first = 3;
        const second = NaN;        
        const expected = 0;

        actual = sumOrProduct(first, second);

        assert.equal(actual, expected);
    });

    it('should return 0 if both of the arguments are undefined', () => {
        const expected = 0;

        actual = sumOrProduct();

        assert.equal(actual, expected);
    });
})

describe('getPositiveSum', () => {
    it('should return sum for only 2 positive of (3, -4, 6)', () => {
        const first = 3;
        const second = -4;
        const third = 6;
        const expected = 9;

        const actual = getPositiveSum(first, second, third);

        assert.equal(actual, expected);
    });
   
    it('should return sum defined and not null values (6)', () => {
        assert.equal(getPositiveSum(6), 6);
        const first = 6;
        const expected = 6;

        const actual = getPositiveSum(first);

        assert.equal(actual, expected);
    });

    it('should return 0 for only 3 negative (-3, -4, -6)', () => {
        const first = -3;
        const second = -4;
        const third = -6;
        const expected = 0;

        const actual = getPositiveSum(first, second, third);

        assert.equal(actual, expected);
    });

    it('should return 0 if no argument defined ()', () => {
        const expected = 0;

        const actual = getPositiveSum();

        assert.equal(actual, expected);
    });
})

describe('getMaxOfProductSum', () => {
    it('should return product + 3 of (2, 3, 4)', () => {
        //given
        const first = 2;
        const second = 3;
        const third = 4;
        const expected = 27;

        //when
        const actual = getMaxOfProductSum(first, second, third)

        //then
        assert.equal(actual, expected)
    });

    it('should return sum + 3 of (2, 2, 1)', () => {
        //given        
        const first = 2;
        const second = 2;
        const third = 1;
        const expected = 8;

        //when
        const actual = getMaxOfProductSum(first, second, third)

        //then
        assert.equal(actual, expected)
    });

    it('should return 0 if all of the arguments are undefined', () => {
        //given               
        assert.equal(sumOrProduct(), 0 );
        const expected = 0;

        //when
        const actual = getMaxOfProductSum()

        //then
        assert.equal(actual, expected)
    });
});

// Написать программу определения оценки студента по его рейтингу,
// на основе следующих правил

describe('getMarkFromPoints', () => {
    it('should return empty string if points are not defined ()', () => {
        //given
        const expected = '';

        //when
        const actual = getMarkFromPoints()

        //then
        assert.equal(actual, expected)
    });

    it('should return empty string if points are more than 100 (200)', () => {
        //given
        const points = 200;       
        const expected = '';

        //when
        const actual = getMarkFromPoints(points)

        //then
        assert.equal(actual, expected)
    });

    it('should return empty string if points are less than 0 (-4)', () => {
        //given
        const points = -4;       
        const expected = '';

        //when
        const actual = getMarkFromPoints(points)

        //then
        assert.equal(actual, expected)
    });

    it('should return "F" if points are less than 20 (15)', () => {
        //given
        const points = 15;       
        const expected = 'F';

        //when
        const actual = getMarkFromPoints(points)

        //then
        assert.equal(actual, expected)
    });   

    it('should return "E" if points are less than 40 and more than 20 (25)', () => {
        //given
        const points = 25;       
        const expected = 'E';

        //when
        const actual = getMarkFromPoints(points)

        //then
        assert.equal(actual, expected)
    });

    it('should return "D" if points are less than 60 and more than 40 (45)', () => {
        //given
        const points = 45;       
        const expected = 'D';

        //when
        const actual = getMarkFromPoints(points)

        //then
        assert.equal(actual, expected)
    });

    it('should return "C" if points are less than 75 and more than 60 (65)', () => {
        //given
        const points = 65;       
        const expected = 'C';
        //when
        const actual = getMarkFromPoints(points);
        //then
        assert.equal(actual, expected)
    });

    it('should return "B" if points are less than 90 and more than 75 (80)', () => {
        //given
        const points = 80;       
        const expected = 'B';
        //when
        const actual = getMarkFromPoints(points)
        //then
        assert.equal(actual, expected)
    });  
    
    it('should return "A" if points are less than 100 and more than 89 (90)', () => {
        //given
        const points = 90;       
        const expected = 'A';
        //when
        const actual = getMarkFromPoints(points)
        //then
        assert.equal(actual, expected)
    });    
});


// Loops >> Найти сумму четных чисел и диапазоне от 1 до 99
describe('getEvenSumFrom1To99', () => {
    it('should always return 2500 ()', () => {
        //given       
        const expected = 2500;

        //when
        const actual = getEvenSumFrom1To99();

        //then
        assert.equal(actual, expected)
    });
});

//2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

describe('checkIsNumberPrime', () => {
    it('should return "false" if no arguments passed ()', () => {
        //given       
        const expected = false;

        //when
        const actual = checkIsPrime();

        //then
        assert.equal(actual, expected)
    });

    it('should return "false" if 0 passed (0)', () => {
        //given       
        const expected = false;

        //when
        const actual = checkIsPrime(0);

        //then
        assert.equal(actual, expected)
    });

    it('should return "false" if NaN passed (NaN)', () => {
        //given       
        const expected = false;

        //when
        const actual = checkIsPrime(NaN);

        //then
        assert.equal(actual, expected)
    });

    it('should return "false" if null is passed (null)', () => {
        //given       
        const expected = false;

        //when
        const actual = checkIsPrime(null);

        //then
        assert.equal(actual, expected)
    });

    it('should return "true" if 13 is passed (13)', () => {
        //given       
        const expected = false;

        //when
        const actual = checkIsPrime(13);

        //then
        assert.equal(actual, expected)
    });

    it('should return "false" if 14 is passed (14)', () => {
        //given       
        const expected = false;

        //when
        const actual = checkIsPrime(14);

        //then
        assert.equal(actual, expected)
    });

    it('should return "false" if 39 is passed (39)', () => {
        //given       
        const expected = false;

        //when
        const actual = checkIsPrime(39);

        //then
        assert.equal(actual, expected)
    });
});

// 3. Найти корень натурального числа 
// с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)