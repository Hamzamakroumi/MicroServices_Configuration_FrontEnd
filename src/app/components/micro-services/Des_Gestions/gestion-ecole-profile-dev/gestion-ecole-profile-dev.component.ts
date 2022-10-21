
import { Component, OnInit } from '@angular/core';

import { ProfilesService } from 'src/app/Services/profiles.service';



@Component({
  selector: 'app-gestion-ecole-profile-dev',
  templateUrl: './gestion-ecole-profile-dev.component.html',
  styleUrls: ['./gestion-ecole-profile-dev.component.css']
})
export class GestionEcoleProfileDevComponent implements OnInit {


  data: any;


  constructor(private profilesService: ProfilesService) { }

  ngOnInit(): void {
    this.data = this.profilesService.Get_Ecole_profile_dev().subscribe(res => this.data = res);
  }




}
