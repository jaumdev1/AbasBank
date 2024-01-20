import { Component } from '@angular/core';
import { BankComponent } from '../../components/bank/bank.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog-bank',
  standalone: true,
  imports: [BankComponent, CommonModule],
  templateUrl: './catalog-bank.component.html',
  styleUrl: './catalog-bank.component.scss'
})
export class CatalogBankComponent {

}
