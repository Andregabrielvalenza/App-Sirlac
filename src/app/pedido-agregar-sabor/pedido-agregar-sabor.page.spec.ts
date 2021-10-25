import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidoAgregarSaborPage } from './pedido-agregar-sabor.page';

describe('PedidoAgregarSaborPage', () => {
  let component: PedidoAgregarSaborPage;
  let fixture: ComponentFixture<PedidoAgregarSaborPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoAgregarSaborPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidoAgregarSaborPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
