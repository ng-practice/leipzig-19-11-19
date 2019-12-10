import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SortByTextPipe } from './shared/sort-by-text.pipe';
import { TodosService } from './shared/todos-api.service';
import { TodosComponent } from './todos.component';

describe('<ws-todos>', () => {
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent, SortByTextPipe],
      imports: [RouterTestingModule], // Router, ActivatedRoute
      providers: [
        {
          provide: TodosService,
          useValue: {
            query: () => of([{}, {}, {}])
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(TodosComponent);
    fixture.detectChanges();
  });

  describe('When todos are present', () => {
    it('renders the todos', () => {
      const todos: DebugElement[] = fixture.debugElement.queryAll(
        By.css('[data-testid=todo-item]')
      );

      expect(todos.length).toBe(3);
    });
  });
});
