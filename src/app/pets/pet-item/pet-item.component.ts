import { Component, Input, OnInit } from '@angular/core';
import { Pet, PetList } from 'src/app/model/pet.model';
import { PetAdoptService } from 'src/app/services/pet-adopt.service';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.css'],
})
export class PetItemComponent implements OnInit {
  @Input() pet: Pet = new Pet();

  constructor() {}

  ngOnInit(): void {}
}
