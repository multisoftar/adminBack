import { Component, OnInit ,AfterViewInit,ViewChild} from '@angular/core';
import { DemoFilePickerAdapter } from  '@app/file-picker.adapter';
import { HttpClient } from '@angular/common/http';
import { Butler } from '@app/services/butler.service';
import { DataApiService } from '@app/services/data-api.service';
import { UploaderCaptions } from 'ngx-awesome-uploader';
import { Yeoman } from '@services/yeoman.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-edittest',
  templateUrl: './edittest.component.html',
  styleUrls: ['./edittest.component.css']
})
export class EdittestComponent implements AfterViewInit {
  @ViewChild('deleteSwal')
//holis from emacs
  
  testimony:any;
  public captions: UploaderCaptions = {
    dropzone: {
      title: 'Imágenes del producto',
      or: '.',
      browse: 'Cargar',
    },
    cropper: {
      crop: 'Cortar',
      cancel: 'Cancelar',
    },
    previewCard: {
      remove: 'Borrar',
      uploadError: 'error',
    },
  };
  data = {
    images: [] as string[], // o cualquier otro tipo de dato adecuado, como any[]
    name: '',
    description: '',
    price: null,
    stock: 0,
    ref: '',
    idBranch: '',
    detail: '',
    company:''
  };
 
  adapter = new  DemoFilePickerAdapter(this.http,this._butler);
  constructor(
    public router:Router,
    public http:HttpClient,
    public _butler:Butler,
    public dataApiService:DataApiService,
    public yeoman:Yeoman
    ) { 
      
      this._butler.data=this.data;
      this.data=this.yeoman.preview;
    }
    cancelarUpdate(){
      this.router.navigate(['/testall']);
    }
      onSubmit() {
        /* this.data.ref = (Math.floor(Math.random() * 10000000000000)).toString();
        this.data.images=this._butler.uploaderImages; */
        this.dataApiService.testimonyUpdate(this.data,this.yeoman.preview.id).subscribe(response=>{
          console.log(response);
          // this.getAll();
          this._butler.uploaderImages=[];
          this.router.navigate(['testall']);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Testimonio actualizado',
            showConfirmButton: false,
            timer: 1500
          })
         
          //  this.getProducts();
        });
        // Aquí puedes enviar los datos al servidor o realizar las acciones necesarias
        console.log(this.data);
        
        }
    ngAfterViewInit(): void {
  }

}