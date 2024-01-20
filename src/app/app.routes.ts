import { Routes } from '@angular/router';
import { CatalogBankComponent } from './pages/catalog-bank/catalog-bank.component';
import { CatalogAccountComponent } from './pages/catalog-account/catalog-account.component';
export const routes: Routes = [

  { path: 'catalog-bank', component: CatalogBankComponent },
  { path: '', component: CatalogAccountComponent },
];
