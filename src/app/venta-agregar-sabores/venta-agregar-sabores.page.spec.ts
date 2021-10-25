import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VentaAgregarSaboresPage } from './venta-agregar-sabores.page';

describe('VentaAgregarSaboresPage', () => {
  let component: VentaAgregarSaboresPage;
  let fixture: ComponentFixture<VentaAgregarSaboresPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaAgregarSaboresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VentaAgregarSaboresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
