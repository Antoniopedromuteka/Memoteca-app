import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCarregagarMaisComponent } from './botao-carregagar-mais.component';

describe('BotaoCarregagarMaisComponent', () => {
  let component: BotaoCarregagarMaisComponent;
  let fixture: ComponentFixture<BotaoCarregagarMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoCarregagarMaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCarregagarMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
