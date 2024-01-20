import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterBankComponent } from '../register-bank/register-bank.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BankAccount } from '../../models/BankAccount.model';

@Component({
  selector: 'app-list-account',
  standalone: true,
  imports: [RegisterBankComponent, CommonModule, FormsModule],
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss'],
})
export class ListAccountComponent implements OnInit {
  searchCode: string = '';
  banks: BankAccount[] = [];

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
  const storedAccounts = localStorage.getItem('accountsBanks');
  console.log(storedAccounts);
  this.banks = storedAccounts ? JSON.parse(storedAccounts) : [];
  }

  searchByCode(): void {
    const storedAccounts = localStorage.getItem('accountsBanks');
    const allBanks = storedAccounts ? JSON.parse(storedAccounts) : [];

    if (!this.searchCode) {
        this.banks = allBanks;
    } else {
        this.banks = allBanks.filter((bank:BankAccount) => String(bank.code).includes(this.searchCode));
    }
}



  openRegisterModal(bank: BankAccount): void {

    const dialogRef = this.dialog.open(RegisterBankComponent, {
      data: { bank, isEdit: true },
    });

    dialogRef.afterClosed().subscribe((result) => {

      const storedAccounts = localStorage.getItem('accountsBanks');
      this.banks = storedAccounts ? JSON.parse(storedAccounts) : [];
    });
  }

  editAccount(bank: BankAccount): void {

    const dialogRef = this.dialog.open(RegisterBankComponent, {
      data: bank,
    });

    dialogRef.afterClosed().subscribe((result) => {

      const storedAccounts = localStorage.getItem('accountsBanks');
      this.banks = storedAccounts ? JSON.parse(storedAccounts) : [];
    });
  }

  deleteAccount(bank: BankAccount): void {

    const confirmDelete = window.confirm('Tem certeza de que deseja deletar esta conta?');

    if (confirmDelete) {
      const index = this.banks.findIndex((b) => b.code === bank.code);
      if (index !== -1) {
        this.banks.splice(index, 1);
        localStorage.setItem('accountsBanks', JSON.stringify(this.banks));
        this.snackBar.open('Conta excluída com sucesso!', 'Fechar', {
          duration: 3000,
        });
      }
    }
  }

}
