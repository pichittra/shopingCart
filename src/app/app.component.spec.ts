import { AppComponent } from './app.component';
import { ShopingCartService } from './services/shoping-cart.service';
import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';
import {
  ComponentFixtureAutoDetect, ComponentFixture,
  TestBed, async
} from '@angular/core/testing';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let ShopingCartServiceStub: any;
  let shopingCartService: ShopingCartService;
  // let de:      DebugElement;
  // let el:      HTMLElement;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [AppComponent],
//       providers: [
//          { provide: ComponentFixtureAutoDetect, useValue: true },
//         { provide: ShopingCartService, useValue: ShopingCartServiceStub }
//       ]
//     })
//       .compileComponents();
//     fixture = TestBed.createComponent(AppComponent);
//     comp = fixture.componentInstance;
//   });
//   shopingCartService = fixture.debugElement.injector.get(ShopingCartService);
//  shopingCartService = TestBed.get(ShopingCartService);

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).compileComponents();
  // }));

  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
