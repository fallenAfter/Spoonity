import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UpcommingComponent } from './upcomming.component';

describe('UpcommingpComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UpcommingComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UpcommingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'spoonityProject'`, () => {
    const fixture = TestBed.createComponent(UpcommingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('spoonityProject');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(UpcommingComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to spoonityProject!');
  });
});
