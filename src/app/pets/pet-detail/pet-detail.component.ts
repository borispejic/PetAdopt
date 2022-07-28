import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Adoption } from 'src/app/model/adoption.model';
import { Pet } from 'src/app/model/pet.model';
import { PetAdoptService } from 'src/app/services/pet-adopt.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css'],
})
export class PetDetailComponent implements OnInit {
  petId: number = 0;
  pet: Pet = new Pet();
  adoption: Adoption = new Adoption();

  constructor(
    private service: PetAdoptService,
    private route: ActivatedRoute,
    public toast: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.petId = params['id'];
      this.getPet();
    });
  }

  getPet() {
    this.service.getOne(this.petId).subscribe((x) => {
      this.pet = x;
      console.log(this.petId);
    });
  }

  submitAdoption() {
    if (!this.adoption.name || !this.adoption.contact) {
      this.toast.show('Please fill in the form', {
        classname: 'bg-danger text-light',
        delay: 5000,
      });
      return;
    }
    this.adoption.petId = this.petId;
    this.adoption.petName = this.pet.name;
    this.service.postAdoption(this.adoption).subscribe(
      (x) => {
        this.toast.show('Request sent', {
          classname: 'bg-success text-light',
          delay: 5000,
        });
      },
      (err) => {
        this.toast.show('Error', {
          classname: 'bg-danger text-light',
          delay: 10000,
        });
      }
    );
  }
}
