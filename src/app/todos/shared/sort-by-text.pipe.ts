import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo';

declare type SortDirections = 'asc' | 'desc';

@Pipe({ name: 'sortByText' })
export class SortByTextPipe implements PipeTransform {
  transform(todos: Todo[] | null, args: SortDirections): Todo[] {
    if (!Array.isArray(todos)) {
      return [];
    }

    if (args === 'asc') {
      return todos.sort((current, next) =>
        current.text.localeCompare(next.text)
      );
    } else if (args === 'desc') {
      return todos.sort((current, next) =>
        next.text.localeCompare(current.text)
      );
    }

    return todos;
  }
}
