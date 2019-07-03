import { ItemFilterPipe } from './item-filter.pipe';
import { ListItemModel } from '../models/list-item.model';

describe('Pipe: Default', () => {
    let pipe: ItemFilterPipe;

    beforeEach(() => {
        pipe = new ItemFilterPipe();
    });

    it('should return an unfiltered list, when searchstring is empty', () => {
        const list = [
            new ListItemModel('foo', false),
            new ListItemModel('bar', false)
        ];
        const searchString = '';

        expect(pipe.transform(list, searchString)).toBe(list);
    });

    it('should return a filtered list, when searchstring is set', () => {
        const list = [
            new ListItemModel('foo', false),
            new ListItemModel('bar', false)
        ];
        const searchString = 'f';
        const expectedList = [
            new ListItemModel('foo', false),
        ];

        expect(pipe.transform(list, searchString)).toEqual(expectedList);
    });

    it('should return a empty list, when search string is too specific', () => {
        const list = [
            new ListItemModel('foo', false),
            new ListItemModel('bar', false)
        ];
        const searchString = 'meep';
        const expectedList = [];

        expect(pipe.transform(list, searchString)).toEqual(expectedList);
    });

    it('should return a only a list of selected item, when search string is too specific', () => {
        const list = [
            new ListItemModel('foo', true),
            new ListItemModel('bar', false)
        ];
        const searchString = 'meep';
        const expectedList = [new ListItemModel('foo', true)];

        expect(pipe.transform(list, searchString)).toEqual(expectedList);
    });

    it('should return a filtered list with a selected item and a searchstring filtered item', () => {
        const list = [
            new ListItemModel('foo', true),
            new ListItemModel('bar', false),
            new ListItemModel('bie', false),
        ];
        const searchString = 'bar';
        const expectedList = [
            new ListItemModel('foo', true),
            new ListItemModel('bar', false),
        ];

        expect(pipe.transform(list, searchString)).toEqual(expectedList);
    });

    it('should always return a list, ordered by IsSelected, with true first. And not filtered with a searchstring.', () => {
        const list = [
            new ListItemModel('foo', false),
            new ListItemModel('bar', true),
            new ListItemModel('bie', false),
        ];
        const searchString = '';
        const expectedList = [
            new ListItemModel('bar', true),
            new ListItemModel('foo', false),
            new ListItemModel('bie', false),
        ];

        expect(pipe.transform(list, searchString)).toEqual(expectedList);
    });

    it('should always return a list, ordered by IsSelected, with true first. And filtered with search string.', () => {
        const list = [
            new ListItemModel('foo', false),
            new ListItemModel('bar', true),
            new ListItemModel('bie', false),
        ];
        const searchString = 'foo';
        const expectedList = [
            new ListItemModel('bar', true),
            new ListItemModel('foo', false),
        ];

        expect(pipe.transform(list, searchString)).toEqual(expectedList);
    });
});
