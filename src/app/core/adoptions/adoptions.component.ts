import { Component, OnInit } from '@angular/core';
import { Adoption, AdoptionList } from 'src/app/model/adoption.model';
import { PetAdoptService } from 'src/app/services/pet-adopt.service';

@Component({
  selector: 'app-adoptions',
  templateUrl: './adoptions.component.html',
  styleUrls: ['./adoptions.component.css'],
})
export class AdoptionsComponent implements OnInit {
  adoptions: AdoptionList = new AdoptionList();

  constructor(private service: PetAdoptService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAdoptions().subscribe((x) => {
      this.adoptions = x;
    });
  }

  approveAdoption(id: number) {
    this.service.deleteAdoption(id).subscribe((x) => {
      this.getAll();
    });
  }
}
