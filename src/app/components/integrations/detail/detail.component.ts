import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '@app/services/data-api.service';
import { Yeoman } from '@app/services/yeoman.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  category:string="";
  constructor
    (public yeoman:Yeoman,
    public router:Router,
    public dataApiService:DataApiService
    ) { 
      if(this.yeoman.preview.images[0]===undefined){this.router.navigate([''])}
      
      
      }
delete(){ 
  this.dataApiService.deleteIntegration(this.yeoman.preview.id).subscribe(response=>{
    this.dataApiService.getAllIntegration().subscribe(response=>{
      this.yeoman.allintegration=response;
    });
  });
  this.router.navigate(['/integrationsAll']);
}

cancelDelete(){}
  ngOnInit(): void {
  }

}
