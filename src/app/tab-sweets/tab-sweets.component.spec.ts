import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSweetsComponent } from './tab-sweets.component';

describe('TabSweetsComponent', () => {
  let component: TabSweetsComponent;
  let fixture: ComponentFixture<TabSweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSweetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabSweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
