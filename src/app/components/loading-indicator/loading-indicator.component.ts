import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.isLoading$.subscribe((value) => {
      this.isLoading = value;
    });
  }
}
