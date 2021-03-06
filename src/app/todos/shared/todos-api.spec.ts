import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TodosService } from './todos-api.service';

/**
 * When the API raises an error, it yields an error message.
 */
describe('service: TodosApi', () => {
  let service: TodosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodosService]
    });

    service = TestBed.get(TodosService);
    httpMock = TestBed.get(HttpTestingController);
  });

  describe('When todos are present', () => {
    it('yields the loaded todos', done => {
      service.query().subscribe({
        next: todos => {
          expect(todos[0].text).toBe('Hi');
          done();
        }
      });

      httpMock
        .expectOne('http://localhost:3000/todos?query=all')
        .flush([{ text: 'Hi' }]);

      httpMock.verify();
    });
  });

  describe('When an error occurs', () => {
    it('yields a understandable message', done => {
      service.query().subscribe({
        error: err => {
          expect(err.message).toBe('Please contact your IT-Support.');
          done();
        }
      });

      httpMock
        .expectOne('http://localhost:3000/todos?query=all')
        .flush(null, { status: 500, statusText: 'API hung up, sorry :(.' });

      httpMock.verify();
    });
  });
});
