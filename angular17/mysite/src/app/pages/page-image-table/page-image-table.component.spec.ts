import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImageTableComponent } from './page-image-table.component';

describe('PageImageTableComponent', () => {
  let component: PageImageTableComponent;
  let fixture: ComponentFixture<PageImageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageImageTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageImageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
