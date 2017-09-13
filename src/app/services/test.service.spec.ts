import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;
  beforeEach(() => { service = new TestService(); });

  it('#test should return real value', () => {
    expect(service.test([15,2,'l',5,'g','b',5])).toBe('27lgb');

  });

  // it('#getAsyncValue should return async value', (done: DoneFn) => {
  //   service.test().then(value => {
  //     expect(value).toBe('async value');
  //     done();
  //   });
  // });
  // it('#getAsyncValue should return async value', (done: DoneFn) => {
  //   service.getAsyncValue().then(value => {
  //     expect(value).toBe('async value');
  //     done();
  //   });
  //});
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [TestService]
  //   });
  // });

  // it('should be created', inject([TestService], (service: TestService) => {
  //   expect(service).toBeTruthy();
  // }));
});
