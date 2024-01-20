import { Component } from '@angular/core';
import { ListAccountComponent } from '../../components/list-account/list-account.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog-account',
  standalone: true,
  imports: [ListAccountComponent, CommonModule],
  templateUrl: './catalog-account.component.html',
  styleUrl: './catalog-account.component.scss'
})
export class CatalogAccountComponent {

}
