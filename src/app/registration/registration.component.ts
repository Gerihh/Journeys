import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from '../registration-model';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {

  journeys: any[] = [];
  model: RegistrationModel = {
    acceptedConditions: false,
    email: '',
    journeyId: 0,
    lastCovidVaccineDate: '',
    name: '',
    numberOfParticipants: 0
  }

  errorMessage = '';

  constructor (
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.httpService.getDestinations().subscribe({
      next: (result: any) => this.journeys = result,
      error: (err: any) => console.log(err)
    });

    this.activatedRoute.queryParams.subscribe({
      next: (value: any) => {
        if (value.id)
          this.model.journeyId = value.id;
      },
      error: (err: any) => console.log(err)
    })
  }

  sendReg() {
    if (!this.model.journeyId) {
      this.errorMessage = 'válasszon utazást';
      return;
    }
    if (!this.model.name) {
      this.errorMessage = 'válasszon nevet';
      return;
    }
    if (!this.model.email) {
      this.errorMessage = 'válasszon emailt';
      return;
    }
    if (!this.model.numberOfParticipants) {
      this.errorMessage = 'adja meg résztevők számát';
      return;
    }
    if (!this.model.numberOfParticipants) {
      this.errorMessage = 'fogadja el';
      return;
    }
    this.model.journeyId = Number(this.model.journeyId);

    this.httpService.sendRegistration(this.model).subscribe({
      next: (result: any) => {
        alert(`Sorszám: ${result.id}`);
        this.router.navigate(['journeys'])
      },
      error: (err: any) => {
        this.errorMessage = err.error?.message ?? err.message;
      }
    })
  }
}
