import { Component, inject, computed } from '@angular/core';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  // readonly:
  results = computed(() => this.investmentService.resultsData());

  // alternative:
  // get results(){
  //   return this.investmentService.resultsData.asReadonly();
  // }
}
