import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '@app/services/data-api.service';
import { Yeoman } from '@app/services/yeoman.service';
import{NgxUiLoaderService} from 'ngx-ui-loader';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(
    private ngxService: NgxUiLoaderService,
    public router:Router,    
    public dataApiService:DataApiService,
     public yeoman:Yeoman
     ) { 
  this.getAllModules();
  }
getAllModules(){
  this.ngxService.start("loader-01");
  this.dataApiService.getAllModules().subscribe(response=>{
    this.yeoman.allModules=response;
    this.ngxService.stop("loader-01");
    
  });
}

setPreview(i:any){
  this.yeoman.preview=this.yeoman.allModules[i];
  this.router.navigate(['modulesDetail']);
}
  ngOnInit(): void {
  }

}
