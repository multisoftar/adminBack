import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HeaderComponent } from './components/shared/header/header.component';
import { FloatyComponent } from './components/shared/floaty/floaty.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { NavsmallComponent } from './components/shared/navsmall/navsmall.component';
import { NavmobileComponent } from './components/shared/navmobile/navmobile.component';
import { MessagesComponent } from './components/shared/messages/messages.component';
import { MessageComponent } from './components/shared/message/message.component';
import { FilePickerModule } from  'ngx-awesome-uploader';
import { SwiperComponent } from './components/shared/swiper/swiper.component';
import { SubheaderComponent } from './components/shared/subheader/subheader.component';
import { ProductGridComponent } from './components/shared/product-grid/product-grid.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { PopUpComponent } from './components/shared/pop-up/pop-up.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { OverviewComponent } from './components/shared/overview/overview.component';
import { TrimEndDirective } from './trim-end.directive';
import { TrimLastDirective } from './trim-last.directive';
import { UiModule } from './components/ui/ui.module';
import { HomeModule } from './components/home/home.module';
import { Router,RouterModule } from '@angular/router';
import { Yeoman } from './services/yeoman.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FloatyComponent,
    NavigationComponent,
    NavsmallComponent,
    NavmobileComponent,
    MessagesComponent,
    MessageComponent,
    SwiperComponent,
    SubheaderComponent,
    ProductGridComponent,
    PopUpComponent,
    OverviewComponent,
    TrimEndDirective,
    TrimLastDirective
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    FilePickerModule,
    NgxUsefulSwiperModule,
    LazyLoadImageModule,
    BrowserModule,
    AppRoutingModule,
    UiModule,
    HomeModule,
    RouterModule
  ],
  providers: [FilePickerModule,Yeoman],
  exports:[FilePickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
