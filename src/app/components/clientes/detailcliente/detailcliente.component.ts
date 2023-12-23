import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '@app/services/data-api.service';
import { Yeoman } from '@app/services/yeoman.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-detailcliente',
  templateUrl: './detailcliente.component.html',
  styleUrls: ['./detailcliente.component.css']
})
export class DetailclienteComponent implements OnInit {
  category:string="";
  constructor
    (public yeoman:Yeoman,
    public router:Router,
    public dataApiService:DataApiService
    ) {
      if(this.yeoman.preview.images===undefined){
        this.router.navigate([''])}
        this.findCategory();
      }
editClient(){
  this.router.navigate(['clientedit']);

}
delete(){ 
  this.dataApiService.deleteClient(this.yeoman.preview.id).subscribe(response=>{
    this.dataApiService.getAllClient().subscribe(response=>{
      
      this.yeoman.all=response;
    });
  });
  this.router.navigate(['/clientall']);
}

findCategory(){
  for (let i=0;i<this.yeoman.allcategory.length;i++){
    if(this.yeoman.preview.idCategory===this.yeoman.allcategory[i].id){
      this.category=this.yeoman.allcategory[i].name;
    }
  }
}
cancelDelete(){}
  ngOnInit(): void {
  }

}
