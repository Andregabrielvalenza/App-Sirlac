import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallePedidoProgramadoPage } from './detalle-pedido-programado.page';

describe('DetallePedidoProgramadoPage', () => {
  let component: DetallePedidoProgramadoPage;
  let fixture: ComponentFixture<DetallePedidoProgramadoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePedidoProgramadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallePedidoProgramadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
