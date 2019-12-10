import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TodoQuickAddComponent } from './todo-quick-add.component';

describe('<ws-todo-quick-add>', () => {
  let fixture: ComponentFixture<TodoQuickAddComponent>;
  let getByTestId: <T extends HTMLElement>(testId: string) => T;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoQuickAddComponent],
      imports: [ReactiveFormsModule]
    });

    fixture = TestBed.createComponent(TodoQuickAddComponent);
    fixture.detectChanges();

    getByTestId = getByTestIdFactory(fixture);
  });

  describe('When no text is given', () => {
    it('disables the "ADD"-button', () => {
      const button = getByTestId<HTMLButtonElement>('todo-add-button');
      expect(button.disabled).toBe(true);
    });
  });

  describe('When a text is given', () => {
    it('disables the "ADD"-button if the text does not start with "@"', () => {
      const textInput = getByTestId<HTMLInputElement>('todo-text-input');

      textInput.value = 'Buy Porsche-🥤';
      textInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const button: HTMLButtonElement = fixture.debugElement.query(
        By.css('[data-testid=todo-add-button]')
      ).nativeElement;

      expect(button.disabled).toBe(true);
    });

    it('enables the "ADD"-button', () => {
      const textInput = getByTestId<HTMLInputElement>('todo-text-input');

      textInput.value = '@Buy Porsche-🥤';
      textInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const button = getByTestId<HTMLButtonElement>('todo-add-button');

      expect(button.disabled).toBe(false);
    });
  });
});

function getByTestIdFactory<T>(
  fixture: ComponentFixture<T>
): <U extends HTMLElement>(testId: string) => U {
  return (testId: string) =>
    fixture.debugElement.query(By.css(`[data-testid=${testId}]`)).nativeElement;
}
