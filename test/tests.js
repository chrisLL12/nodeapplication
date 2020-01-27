import { expect } from 'chai';
import index, { rating } from '../src/index';

describe ('index (module with rating function)', () => {
    describe('rating (module that returns a string)', () => {
        it('number returns a string', () => {
            let result = rating(5);
            expect(result).to.be.a('string');
        });
        it('something not a number still returns a string', () => {
            let result = rating("oka835@#7';.LKy" + 2200 + true);
            expect(result).to.be.a('string');
        });
    });
});