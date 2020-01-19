export class RecognizeRequest {
    
    private recognizerType: String;
    private imageBase64: String;

    constructor(recognizerType:string, imageBase64:string) {
        this.recognizerType=recognizerType;
        this.imageBase64=imageBase64;
     }
}
