export class RecognizeResponse {

    code: String;
    summary: String;
    executionId: String;
    data: 
    {
        recognizer: String;
        version: String;
        startTime: String;
        finishTime: String;
        durationTimeInSeconds: String;
        taskId: String;
        workerId: String;
        result: 
        {
            address: String;
            curp: String;
            dateOfBirth: 
            {
                day: String;
                month: String;
                year: String;
                originalString: String;
            };
            electorKey: String;
            fullName: String;
            sex: String;
            type: String;
        };
    };
   
}
