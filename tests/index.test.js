// describe('', () => {
//     it('should ...', () => {
        
//     });
// })

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
        

        assert.equal(, 0 );
    });

    it('should return 1 sum of (1,0)', () => {
        assert.equal(sumOrProduct(1, 0), 1 );
    });

    it('should return 0 if one of the arguments is undefined', () => {
        assert.equal(sumOrProduct(3), 0 );
    });

    it('should return 0 if one of the arguments is null', () => {
        assert.equal(sumOrProduct(null, null), 0 );
    });

    it('should return 0 if one of the arguments is NaN', () => {
        assert.equal(sumOrProduct(3, NaN), 0 );
    });
})

describe('getPositiveSum', () => {
    it('should return sum for only 2 positive of (3, -4, 6)', () => {
        assert.equal(getPositiveSum(3, -4, 6), 9);
    });
   
    it('should return sum defined and not null values (6)', () => {
        assert.equal(getPositiveSum(6), 6);
    });

    it('should return 0 for only 3 negative (-3, -4, -6)', () => {
        assert.equal(getPositiveSum(-3, -4, -6), 0);
    });

    it('should return 0 if no argument defined ()', () => {
        assert.equal(getPositiveSum(), 0);
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
        assert.equal(getMaxOfProductSum(2, 2, 1), 8)
    });

    it('should return 0 if both of the arguments undefined', () => {
        assert.equal(sumOrProduct(), 0 );
    });
});