import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FruitsService } from './fruits.service';
import { MockFruitsService } from './fruits.service.mock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: FruitsService, useClass: MockFruitsService }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
