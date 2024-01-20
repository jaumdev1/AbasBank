import { Routes } from '@angular/router';
import { CatalogBankComponent } from './pages/catalog-bank/catalog-bank.component';
import { HeaderComponent } from './pages/header/header.component';
export const routes: Routes = [
  { path: 'catalog-bank', component: CatalogBankComponent },
  { path: 'catalog-account', component: HeaderComponent },

];
