import { Component } from '@angular/core';
import { RestApiServiceService } from '../services/rest-service/rest-api-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pmg-home',
  templateUrl: './pmg-home.component.html',
  styleUrl: './pmg-home.component.css'
})
export class PmgHomeComponent {

  dynamicText : string = 'Hamaare Jawaab...';
  userInput : string = '';
  apiData : any;
  spinnerType : string = '';
  buttonDisabled : boolean = false;

  constructor(private restApiService : RestApiServiceService, private ngxSpinnerService : NgxSpinnerService){
    this.spinnerType = 'ball-fussion';
  }

  submitPrompt(){
    this.showSpinner();
    this.buttonDisabled = true;
    this.restApiService.restApiGet(this.userInput).subscribe(
      data => {
        console.log("Data : " + data.data);
        this.dynamicText = data.data;
        this.hideSpinner();
        this.buttonDisabled = false;
      },
      error => {
        console.log("Data : " + error);
        this.dynamicText = "Baadme phirse puchnaa haa...";
        this.hideSpinner();
        this.buttonDisabled = false;
      }
    );
  }

  showSpinner() : void{
    console.log("Spinner Started");
    this.ngxSpinnerService.show();
  }

  hideSpinner() : void {
    console.log("Spinner Stopped");
    this.ngxSpinnerService.hide();
  }

}
