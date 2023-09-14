import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  showInfo() {
    alert('Sa wa di khạppppppp');
  }
  user = {
    name: 'Khaotung',
    age: 30,
  };
}
