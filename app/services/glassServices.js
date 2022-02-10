export default class GlassSerVices {
    constructor(){
    }
    layDSGlass(){
        return axios({
            method: 'get',
            url: 'https://61dffe810f3bdb0017934ce0.mockapi.io/Glasses',
        });
    }
}