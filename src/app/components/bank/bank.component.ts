import { Component, OnInit } from '@angular/core';
import { BankService } from '../../services/bank.service';
import { Bank } from '../../models/Bank.model';
import { MatDialog } from '@angular/material/dialog';
import { RegisterBankComponent } from '../register-bank/register-bank.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoadingService } from '../../services/loading.service';
import { LoadingIndicatorComponent } from '../loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-bank',
  standalone:true,
  imports: [CommonModule,
            FormsModule,
            NgxPaginationModule,
            FormsModule, LoadingIndicatorComponent],
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss'],
})
export class BankComponent implements OnInit {
  banks: Bank[] = [];
  searchCode: string = '';
  p: number =1;

  constructor(private bankService: BankService, private dialog: MatDialog, private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.getBankData();
  }

  getBankData(): void {
    this.bankService.getBanks().subscribe((data) => {
      this.banks = data;
    });
  }

  searchByCode(): void {
    this.loadingService.showLoading();
    if (this.searchCode) {

      this.bankService.searchByBankCode(this.searchCode).subscribe({
        next: (data) => {
          this.banks = [data];
        },
        error: (err) => {
          this.banks = [];
        }
      });
    } else {
      this.getBankData();
    }
    this.loadingService.hideLoading();
  }

  openRegisterModal(bank: Bank): void {
    const dialogRef = this.dialog.open(RegisterBankComponent, {
      width: '400px',
      data: bank,
    });

    dialogRef.afterClosed().subscribe(() => {

    });
  }


}
