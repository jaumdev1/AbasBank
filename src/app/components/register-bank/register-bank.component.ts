import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Bank } from '../../models/Bank.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register-bank',
  standalone: true,
  imports: [
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
  ngOnInit() {

  }
  ngAfterViewInit() {
    this.agency.valueChanges.subscribe(() => this.updateValidity());
    this.account.valueChanges.subscribe(() => this.updateValidity());
  }
  constructor(
    public dialogRef: MatDialogRef<RegisterBankComponent>,
    @Inject(MAT_DIALOG_DATA) public bank: Bank,
    private snackBar: MatSnackBar
  ) {}


  registerAccount(): void {
    if (this.formValid) {
      const registrationData = {
        code: this.bank.code,
        agency: this.agency.value,
        account: this.account.value,
        ispb: this.bank.ispb,
        name: this.bank.name,
        fullName: this.bank.fullName,
      };
      localStorage.setItem('registrationData', JSON.stringify(registrationData));

      this.dialogRef.close();
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
