import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimalCrossingNewsPage } from './animal-crossing-news.page';

describe('AnimalCrossingNewsPage', () => {
  let component: AnimalCrossingNewsPage;
  let fixture: ComponentFixture<AnimalCrossingNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalCrossingNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalCrossingNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
