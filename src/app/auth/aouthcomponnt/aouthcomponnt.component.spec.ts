import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AouthcomponntComponent } from './aouthcomponnt.component';

describe('AouthcomponntComponent', () => {
  let component: AouthcomponntComponent;
  let fixture: ComponentFixture<AouthcomponntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AouthcomponntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AouthcomponntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
