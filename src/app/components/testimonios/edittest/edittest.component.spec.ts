import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittestComponent } from './edittest.component';

describe('EdittestComponent', () => {
  let component: EdittestComponent;
  let fixture: ComponentFixture<EdittestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
