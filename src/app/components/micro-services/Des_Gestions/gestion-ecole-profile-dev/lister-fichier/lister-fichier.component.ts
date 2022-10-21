import { Component, OnInit } from '@angular/core';
import { ProfilesService } from 'src/app/Services/profiles.service';

@Component({
  selector: 'app-lister-fichier',
  templateUrl: './lister-fichier.component.html',
  styleUrls: ['./lister-fichier.component.css']
})
export class ListerFichierComponent implements OnInit {

  data: any;



  constructor(private profilesService: ProfilesService) { }

  ngOnInit(): void {

    this.data = this.profilesService.Get_Ecole_profile_dev().subscribe(res => this.data = res);

  }




}
