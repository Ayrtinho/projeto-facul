import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeusPage } from './meus.page';

describe('MeusPage', () => {
  let component: MeusPage;
  let fixture: ComponentFixture<MeusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
