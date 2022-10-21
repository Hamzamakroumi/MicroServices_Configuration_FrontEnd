import { Router } from '@angular/router';
import { Component, OnInit  } from '@angular/core';
import { ProfilesService } from 'src/app/Services/profiles.service';


@Component({
  selector: 'app-update-fichier',
  templateUrl: './update-fichier.component.html',
  styleUrls: ['./update-fichier.component.css']
})
export class UpdateFichierComponent implements OnInit {



  source:any;



  constructor(private profilesService: ProfilesService,
              private router: Router) { }

  ngOnInit(): void {

    this.profilesService.Get_Ecole_profile_dev().subscribe(res => {
      this.source = res;
    });
};



  onSubmit(){

    this.profilesService.Update_Ecole_profile_dev(this.source).subscribe( data =>{
      this.goToEmployeeList();
    });
  }




  goToEmployeeList(){
    this.router.navigate(['/ListerFichierComponent']);
  }








}




