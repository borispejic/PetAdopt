import { Component, OnInit } from '@angular/core';
import { PetList } from '../model/pet.model';
import { PetAdoptService } from '../services/pet-adopt.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit {
  pets: PetList = new PetList();

  params = {
    filter: {
      category: '',
      sex: '',
    },
    sort: '',
  };

  constructor(private service: PetAdoptService) {}

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.service.getPets(this.params).subscribe({
      next: (pets: PetList) => {
        this.pets = pets;
        console.log(this.pets);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
