import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleMaterialSliderComponent } from './sample-material-slider.component';

describe('SampleMaterialSliderComponent', () => {
  let component: SampleMaterialSliderComponent;
  let fixture: ComponentFixture<SampleMaterialSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleMaterialSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleMaterialSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
