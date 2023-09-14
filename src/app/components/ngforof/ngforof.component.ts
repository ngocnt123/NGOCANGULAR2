import { Component } from '@angular/core';

@Component({
  selector: 'app-ngforof',
  templateUrl: './ngforof.component.html',
  styleUrls: ['./ngforof.component.css'],
})
export class NgforofComponent {
  authors = [
    {
      id: 1,
      firstName: 'Doh Kyung',
      lastName: 'Soo',
      email: 'dohkyungsoo@sm.exo.kr',
      gender: 'Male',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Kim Jong',
      lastName: 'In',
      email: 'kimjongin@sm.exo.kr',
      gender: 'Male',
      ipAddress: '183.243.228.65',
    },
  ];
}
