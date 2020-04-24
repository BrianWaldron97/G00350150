import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AstronomyNewsPage } from './astronomy-news.page';

describe('AstronomyNewsPage', () => {
  let component: AstronomyNewsPage;
  let fixture: ComponentFixture<AstronomyNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstronomyNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AstronomyNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
