import { ItemFilterPipe } from "./item-filter.pipe";
import { ExpectedConditions } from 'protractor';

describe('Pipe: Default', () => {
    let pipe: ItemFilterPipe;

    beforeEach(() => {
        pipe = new ItemFilterPipe();
    });

    it('should return an unfiltered list, when searchstring is empty', () => {
        const list = ['foo', 'bar'];
        const searchString = '';

        expect(pipe.transform(list, searchString)).toBe(list);
    })
    
    it('should return a filtered list, when searchstring is set', () => {
        const list = ['foo', 'bar'];
        const searchString = 'f';
        const expectedList = ['foo'];

        expect(pipe.transform(list, searchString)).toEqual(expectedList);
    })
    
    it('should return a empty list, when search string is too specific', () => {
        const list = ['foo', 'bar'];
        const searchString = 'meep';
        const expectedList = [];

        expect(pipe.transform(list, searchString)).toEqual(expectedList);
    })
});