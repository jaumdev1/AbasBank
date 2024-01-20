import { Routes } from '@angular/router';
import { CatalogBankComponent } from './components/catalog-bank/catalog-bank.component';
import { HeaderComponent } from './components/header/header.component';
export const routes: Routes = [
  { path: 'catalog-bank', component: CatalogBankComponent },
  { path: 'catalog-account', component: HeaderComponent },

];
