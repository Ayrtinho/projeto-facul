import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FutebolPage } from './futebol.page';

describe('FutebolPage', () => {
  let component: FutebolPage;
  let fixture: ComponentFixture<FutebolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FutebolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
