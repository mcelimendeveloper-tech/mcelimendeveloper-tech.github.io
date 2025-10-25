import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CAMISETAS } from '../../models/camisetas';

@Component({
  selector: 'app-catalog',
  standalone: false,
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit{
  products: any[] = CAMISETAS;

  teams = [...new Set(this.products.map(product => product.team).filter(Boolean))];
  leagues = [...new Set(this.products.map(product => product.league).filter(Boolean))]; 
  nationalTeams = [...new Set(this.products.map(product => product.nationalTeam).filter(Boolean))];

  selectedTeam = '';
  selectedLeague = '';
  selectedNationalTeam = '';
  selectedRetro = '';

  filteredProducts = [...this.products];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedTeam = params['equipo'] || '';
      this.selectedLeague = params['league'] || '';
      this.selectedNationalTeam = params['nationalTeam '] || '';
      this.selectedRetro = params['retro'] || '';
      this.applyFilters();
    });
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(product => {
      return (!this.selectedTeam || product.team === this.selectedTeam) &&
             (!this.selectedLeague || product.league === this.selectedLeague) &&
             (!this.selectedNationalTeam || product.nationalTeam === this.selectedNationalTeam) &&
             (!this.selectedRetro || product.retro === (this.selectedRetro === 'true'));
    });
  }
}