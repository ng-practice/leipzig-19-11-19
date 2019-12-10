import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TodoQuickAddComponent } from './todo-quick-add.component';

/**
 * When no text is given, it disables the "ADD"-button
 * When a text is given, it enables the "ADD"-button
 */

describe('<ws-todo-quick-add>', () => {
  let fixture: ComponentFixture<TodoQuickAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoQuickAddComponent],
      imports: [ReactiveFormsModule]
    });

    fixture = TestBed.createComponent(TodoQuickAddComponent);
    fixture.detectChanges();
  });

  describe('When no text is given', () => {
    it('disables the "ADD"-button', () => {
      const button: HTMLButtonElement = fixture.debugElement.query(
        By.css('[data-testid=todo-add-button]')
      ).nativeElement;

      expect(button.disabled).toBe(true);
    });
  });

  describe('When a text is given', () => {
    it('disables the "ADD"-button if the text does not start with "@"', () => {
      const textInput: HTMLInputElement = fixture.debugElement.query(
        By.css('[data-testid=todo-text-input]')
      ).nativeElement;

      textInput.value = 'Buy Porsche-🥤';
      textInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const button: HTMLButtonElement = fixture.debugElement.query(
        By.css('[data-testid=todo-add-button]')
      ).nativeElement;

      expect(button.disabled).toBe(true);
    });

    it('enables the "ADD"-button', () => {
      const textInput: HTMLInputElement = fixture.debugElement.query(
        By.css('[data-testid=todo-text-input]')
      ).nativeElement;

      textInput.value = '@Buy Porsche-🥤';
      textInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const button: HTMLButtonElement = fixture.debugElement.query(
        By.css('[data-testid=todo-add-button]')
      ).nativeElement;

      expect(button.disabled).toBe(false);
    });
  });
});
