export class Url {
    
    basic: String;
    api: String;

    constructor() {

        this.basic = 'http://luisguillen.amerigas.mx/';
        // this.basic = 'http://localhost:8000/';

        this.api = this.basic + 'api/';

    }

}