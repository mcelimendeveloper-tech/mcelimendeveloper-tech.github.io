import { Component } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  constructor(private route: ActivatedRoute, private router: Router) {}

  goToCatalogWithFilter(equipo?: string, league?: string, nationalTeam?: string, retro?: boolean) {
    this.router.navigate(['/catalogo'], {
      queryParams: { equipo, league, nationalTeam, retro }
    });
  }
  
}
