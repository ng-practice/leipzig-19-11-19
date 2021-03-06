import { Todo } from '../models/todo';
import { SortByTextPipe } from './sort-by-text.pipe';

describe('Pipe: sortByText', () => {
  let pipe: SortByTextPipe;

  beforeEach(() => {
    pipe = new SortByTextPipe();
  });

  describe('When an unsorted list is given', () => {
    it('yields a sorted list by alphabet', () => {
      const unsorted: Todo[] = [
        { text: 'b', isDone: true },
        { text: 'a', isDone: true }
      ];
      const sorted = pipe.transform(unsorted, 'asc');

      expect(sorted[0].text).toBe('a');
      expect(sorted[1].text).toBe('b');
    });
  });

  describe('When nothing is given', () => {
    it('yields an empty list', () => {
      const nothing = null;
      const result = pipe.transform(nothing, 'asc');

      expect(result).toEqual([]);
    });
  });

  describe('When a number is given', () => {
    it('yields an empty list', () => {
      const three = 3;
      const result = pipe.transform(three as any, 'asc');

      expect(result).toEqual([]);
    });
  });
});
