import { Component, OnInit, model } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationModel } from '../registration-model';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrl: './journeys.component.css'
})
export class JourneysComponent implements OnInit{

  journeys: any[] = [];

  constructor (
    private httpService: HttpService,
    private router: Router) {}

  ngOnInit(): void {
    this.httpService.getJourneys().subscribe({
      next: (result: any) => this.journeys = result,
      error: (err: any) => console.log(err)
    });
  }



  openReg(id: number) {
    this.router.navigate(['registration'], {queryParams: {'id': id}})
  }
}
