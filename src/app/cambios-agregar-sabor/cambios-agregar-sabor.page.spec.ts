import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CambiosAgregarSaborPage } from './cambios-agregar-sabor.page';

describe('CambiosAgregarSaborPage', () => {
  let component: CambiosAgregarSaborPage;
  let fixture: ComponentFixture<CambiosAgregarSaborPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiosAgregarSaborPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CambiosAgregarSaborPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
