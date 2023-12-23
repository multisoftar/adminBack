import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Butler } from "@services/butler.service";
import { Yeoman } from './yeoman.service';
import { AuthRESTService } from '@services/authREST.service';
export interface PartInterface {
}
export interface MessageInterface {
}
export interface ChatInterface {
}
export interface ProductInterface {
}
export interface CarInterface {
}
export interface MemberInterface {

}
export interface CardInterface {
	id?:string;
}
export interface TicketInterface {
}
export interface SerialInterface {
	serialT:string,
}
export interface CategoryInterface {

}
export interface ClientInterface {

}
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
	//ticket: Observable<any>;
	url:any;
	cards:any;
	chat:any;
	messages:any;
	chats:any;
	cars:any;
	parts:any;
	branch:any;
	cierre:any;
	serial:any;
	transactions:any;
	clients:any;
  	constructor(
	  	public butler:Butler, 
		public yeoman: Yeoman,
  		private AuthRESTService:AuthRESTService,
 	 	private http: HttpClient
  	) {
		}
  	headers : HttpHeaders = new HttpHeaders({  		
		  "Content-Type":"application/json"	
	});

	
	

	deleteProduct(id: string){
		const token = this.AuthRESTService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/products/${id}/?access_token$={token}`;
		return this.http
		.delete<PartInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}
	deleteCategory(id: string){
		const token = this.AuthRESTService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/categories/${id}/?access_token$={token}`;
		return this.http
		.delete<PartInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}
	deleteClient(id: string){
		const token = this.AuthRESTService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/clients/${id}/?access_token$={token}`;
		return this.http
		.delete<ClientInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}
	deleteRubro(id: string){
		const token = this.AuthRESTService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/rubros/${id}/?access_token$={token}`;
		return this.http
		.delete<ClientInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}
	deleteTestimony(id: string){
		const token = this.AuthRESTService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/testimonials/${id}/?access_token$={token}`;
		return this.http
		.delete<ClientInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}
	deleteIntegration(id: string){
		const token = this.AuthRESTService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/integrations/${id}/?access_token$={token}`;
		return this.http
		.delete<ClientInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}
	deleteModules(id: string){
		const token = this.AuthRESTService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/modules/${id}/?access_token$={token}`;
		return this.http
		.delete<ClientInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}
	

	getProduct(id: string){
		const url_api = 	this.yeoman.origin.restUrl+`/api/products/${id}`;
		return this.http.get(url_api);
	}
	getAllProducts(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/products';
		return this.http.get(url_api);
	}
	getAllCategory(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/categories';
		return this.http.get(url_api);
	}
	getAllClient(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/clients';
		return this.http.get(url_api);
	}
	getAllTestimony(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/testimonials';
		return this.http.get(url_api);
	}
	getAllIntegration(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/integrations';
		return this.http.get(url_api);
	}
	getAllRubro(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/rubros';
		return this.http.get(url_api);
	}
	getAllModules(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/modules';
		return this.http.get(url_api);
	}
	
	categoryUpdate(car :CategoryInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/categories/${id}`;
		return this.http
		.put<CategoryInterface>(url_api, car)
		.pipe(map(data => data));
	}
	
	productUpdate(part :ProductInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/products/${id}`;
		return this.http
		.put<ProductInterface>(url_api, part)
		.pipe(map(data => data));
	}
	clientUpdate(part :ClientInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/clients/${id}`;
		return this.http
		.put<ClientInterface>(url_api, part)
		.pipe(map(data => data));
	}
	testimonyUpdate(part :ClientInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/testimonials/${id}`;
		return this.http
		.put<ClientInterface>(url_api, part)
		.pipe(map(data => data));
	}
	integrationUpdate(part :ClientInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/integrations/${id}`;
		return this.http
		.put<ClientInterface>(url_api, part)
		.pipe(map(data => data));
	}
	rubroUpdate(part :ClientInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/rubros/${id}`;
		return this.http
		.put<ClientInterface>(url_api, part)
		.pipe(map(data => data));
	}
	modulesUpdate(part :ClientInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/modules/${id}`;
		return this.http
		.put<ClientInterface>(url_api, part)
		.pipe(map(data => data));
	}
	
	
	saveProduct(product :ProductInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/products';
		return this.http
		.post<ProductInterface>(url_api, product)
		.pipe(map(data => data));
	}
	saveCategory(category :CategoryInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/categories';
		return this.http
		.post<CategoryInterface>(url_api, category)
		.pipe(map(data => data));
	}
	saveClient(client :ClientInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/clients';
		return this.http
		.post<ClientInterface>(url_api, client)
		.pipe(map(data => data));
	}
	saveTestimony(client :ClientInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/testimonials';
		return this.http
		.post<ClientInterface>(url_api, client)
		.pipe(map(data => data));
	}
	saveRubro(client :ClientInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/rubros';
		return this.http
		.post<ClientInterface>(url_api, client)
		.pipe(map(data => data));
	}
	saveIntegration(client :ClientInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/integrations';
		return this.http
		.post<ClientInterface>(url_api, client)
		.pipe(map(data => data));
	}
	saveModules(client :ClientInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/modules';
		return this.http
		.post<ClientInterface>(url_api, client)
		.pipe(map(data => data));
	}
	
	
	
}