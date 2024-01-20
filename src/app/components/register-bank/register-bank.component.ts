import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Bank } from '../../models/Bank.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-register-bank',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register-bank.component.html',
  styleUrls: ['./register-bank.component.scss'],
})
export class RegisterBankComponent implements OnInit, AfterViewInit {
  agency = new FormControl('');
  account = new FormControl('');
  formValid = false;
  bankForm!: FormGroup;
  isEditing = false;
  ngOnInit() {
    this.agency = new FormControl(this.bank?.agency || '', Validators.required);
    this.account = new FormControl(this.bank?.account || '', Validators.required);

    this.bankForm = new FormGroup({
      agency: this.agency,
      account: this.account,
    });
    this.isEditing = !!this.bank;
  }

  ngAfterViewInit() {
    this.agency.valueChanges.subscribe(() => this.updateValidity());
    this.account.valueChanges.subscribe(() => this.updateValidity());
  }
  constructor(
    public dialogRef: MatDialogRef<RegisterBankComponent>,
    @Inject(MAT_DIALOG_DATA) public bank: any,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}


  registerAccount(): void {
    if (this.formValid) {
      const registrationData = {
        code: this.bank.code,
        agency: this.bankForm.get('agency')?.value,
        account: this.bankForm.get('account')?.value,
        ispb: this.bank.ispb,
        name: this.bank.name,
        fullName: this.bank.fullName,
      };

      let accountsBanks = localStorage.getItem('accountsBanks');
      let parsedAccounts = accountsBanks ? JSON.parse(accountsBanks) : [];

      const existingAccountIndex = parsedAccounts.findIndex((account: any) => account.code === registrationData.code);

      if (this.isEditing && existingAccountIndex !== -1) {

        parsedAccounts[existingAccountIndex] = registrationData;
      } else {

        parsedAccounts.push(registrationData);
      }

      localStorage.setItem('accountsBanks', JSON.stringify(parsedAccounts));

      this.dialogRef.close();
      this.openSnackBar('Conta salva com sucesso!');
      this.router.navigate(['/']);
    } else {
      this.openSnackBar('Por favor, preencha todos os campos.');
    }
  }

  updateValidity() {
    this.formValid = this.agency?.value?.trim() !== '' && this.account?.value?.trim() !== '';
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,
    });
  }
}
