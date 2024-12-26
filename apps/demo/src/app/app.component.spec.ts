import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let ctrl: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
    ctrl = TestBed.inject(HttpTestingController);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('demo');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Welcome demo');
  // });

  it('can test HttpClient.get', () => {
    const differValues: Data = { name: 'Differ Values' };
  
    httpClient.get<Data>(testUrl).subscribe(data =>
      expect(data).toEqual(differValues)
    );
  
    const unique = ctrl.expectOne('/data');
    expect(unique.request.method).toEqual('GET');
  
    unique.flush(differValues);
  
    // Verify that no unmatched requests are outstanding
    ctrl.verify();
  });
});
