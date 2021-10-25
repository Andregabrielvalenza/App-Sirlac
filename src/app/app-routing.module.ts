import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'verificar-carga',
    loadChildren: () => import('./verificar-carga/verificar-carga.module').then( m => m.VerificarCargaPageModule)
  },
  {
    path: '',
    redirectTo: 'verificar-carga',
    pathMatch: 'full'
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'venta-sabor',
    loadChildren: () => import('./venta-sabor/venta-sabor.module').then( m => m.VentaSaborPageModule)
  },
  {
    path: 'mis-clientes',
    loadChildren: () => import('./mis-clientes/mis-clientes.module').then( m => m.MisClientesPageModule)
  },
  {
    path: 'stock',
    loadChildren: () => import('./stock/stock.module').then( m => m.StockPageModule)
  },
  {
    path: 'pedido-programado',
    loadChildren: () => import('./pedido-programado/pedido-programado.module').then( m => m.PedidoProgramadoPageModule)
  },
  {
    path: 'sabores',
    loadChildren: () => import('./sabores/sabores.module').then( m => m.SaboresPageModule)
  },
  {
    path: 'edit-agregar-cliente',
    loadChildren: () => import('./edit-agregar-cliente/edit-agregar-cliente.module').then( m => m.EditAgregarClientePageModule)
  },
  {
    path: 'mis-ventas',
    loadChildren: () => import('./mis-ventas/mis-ventas.module').then( m => m.MisVentasPageModule)
  },
  {
    path: 'pedido-programdo-sabor',
    loadChildren: () => import('./pedido-programdo-sabor/pedido-programdo-sabor.module').then( m => m.PedidoProgramdoSaborPageModule)
  },
  {
    path: 'cambios',
    loadChildren: () => import('./cambios/cambios.module').then( m => m.CambiosPageModule)
  },
  {
    path: 'iniciar-ruta',
    loadChildren: () => import('./iniciar-ruta/iniciar-ruta.module').then( m => m.IniciarRutaPageModule)
  },
  {
    path: 'venta-agregar-sabores',
    loadChildren: () => import('./venta-agregar-sabores/venta-agregar-sabores.module').then( m => m.VentaAgregarSaboresPageModule)
  },
  {
    path: 'datos-guardados',
    loadChildren: () => import('./datos-guardados/datos-guardados.module').then( m => m.DatosGuardadosPageModule)
  },
  {
    path: 'detalle-ventas',
    loadChildren: () => import('./detalle-ventas/detalle-ventas.module').then( m => m.DetalleVentasPageModule)
  },
  {
    path: 'pedido-agregar-sabor',
    loadChildren: () => import('./pedido-agregar-sabor/pedido-agregar-sabor.module').then( m => m.PedidoAgregarSaborPageModule)
  },
  {
    path: 'cambios-agregar-sabor',
    loadChildren: () => import('./cambios-agregar-sabor/cambios-agregar-sabor.module').then( m => m.CambiosAgregarSaborPageModule)
  },
  {
    path: 'modalfacuracion',
    loadChildren: () => import('./modalfacuracion/modalfacuracion.module').then( m => m.ModalfacuracionPageModule)
  },
  {
    path: 'pedido-exitoso',
    loadChildren: () => import('./pedido-exitoso/pedido-exitoso.module').then( m => m.PedidoExitosoPageModule)
  },
  {
    path: 'cambios-exitoso',
    loadChildren: () => import('./cambios-exitoso/cambios-exitoso.module').then( m => m.CambiosExitosoPageModule)
  },
  {
    path: 'factura',
    loadChildren: () => import('./factura/factura.module').then( m => m.FacturaPageModule)
  },
  {
    path: 'venta-exitosa',
    loadChildren: () => import('./venta-exitosa/venta-exitosa.module').then( m => m.VentaExitosaPageModule)
  },
  {
    path: 'carga-asignada',
    loadChildren: () => import('./carga-asignada/carga-asignada.module').then( m => m.CargaAsignadaPageModule)
  },
  {
    path: 'detalle-pedido-programado',
    loadChildren: () => import('./detalle-pedido-programado/detalle-pedido-programado.module').then( m => m.DetallePedidoProgramadoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
