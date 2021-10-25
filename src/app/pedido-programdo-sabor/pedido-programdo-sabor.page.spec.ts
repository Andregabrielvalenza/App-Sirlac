import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidoProgramdoSaborPage } from './pedido-programdo-sabor.page';

describe('PedidoProgramdoSaborPage', () => {
  let component: PedidoProgramdoSaborPage;
  let fixture: ComponentFixture<PedidoProgramdoSaborPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoProgramdoSaborPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidoProgramdoSaborPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
