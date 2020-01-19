import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {RecognizeRequest} from '../recognize-request';
import {RecognizeResponse} from '../recognize-response';
import { RestService } from '../rest.service';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.css']
})




export class MainFrameComponent implements OnInit {

  
  private selectedFile: File;
  private base64textString = [];
  private recognizeRequest:RecognizeRequest;

  public recognizeResponse:RecognizeResponse = new RecognizeResponse();
  public fullNameData: String = "";
  public addressData: String = "";
  public electoryKeyData: String = "";
  public dateOfBirthData: String = "";
  public sexData: String = "";

  private uploadedImage: Blob;
  
  constructor(public rest:RestService,private ng2ImgMax: Ng2ImgMaxService) { }
  
  ngOnInit() {
  }

  onImageChange(event:any) {
  
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.selectedFile);
    }
  }

  handleReaderLoaded(e) {
    const RECOGNIZER_TYPE = "MEX_VOTER_ID_FRONT";
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
    this.recognizeRequest = new RecognizeRequest(RECOGNIZER_TYPE,'data:image/png;base64,' + btoa(e.target.result));
    this.rest.recognizeMicroblink(this.recognizeRequest).subscribe(
      recognizeResponse => {
        this.recognizeResponse = recognizeResponse
        this.fullNameData = recognizeResponse.data.result.fullName;
        this.addressData = recognizeResponse.data.result.address;
        this.electoryKeyData = recognizeResponse.data.result.electorKey;
        this.dateOfBirthData = recognizeResponse.data.result.dateOfBirth.originalString;
        this.sexData = recognizeResponse.data.result.sex;
      }
    );
  }

}
