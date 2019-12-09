import { Todo } from '../models/todo';
import { SortByTextPipe } from './sort-by-text.pipe';

/*
 * When an unsorted list is given, it yields a sorted list by alphabet.
 * When noting is given, it yields an empty list.
 * When a number is given, it yields an empty list.
 */

describe('Pipe: sortByText', () => {
  describe('When an unsorted list is given', () => {
    it('yields a sorted list by alphabet', () => {
      const pipe = new SortByTextPipe();
      const unsorted: Todo[] = [
        { text: 'b', isDone: true },
        { text: 'a', isDone: true }
      ];

      const sorted = pipe.transform(unsorted, 'asc');

      expect(sorted[0].text).toBe('a');
      expect(sorted[1].text).toBe('b');
    });
  });
});
