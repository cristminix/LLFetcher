import axios from 'axios';

class Proxy{
    static async create(url:string,method:string,postData:any){
        
        let headers = {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin' : '*'
        };
        let options = {
            method:method,
            url: url,
            headers: headers,
        };
        if(method == 'post'){
            var formData = new FormData();
            for(let key in postData){
                formData.append(key, postData[key]);
            }  
            options.headers['Content-Type']='multipart/form-data';
            options['data'] = formData;  
        }
        let response = await axios(options).then((response)=>{
            return response;
        }).then((response)=>{
            return response;
        });

        return response;
    }

    static get(url:string, cbSuccess?:any, cbError?:any){
        axios({
            method:'get',
            url: url,
            headers: {
                'Access-Control-Allow-Origin' : '*'
            },

        })
        .then((response) => {
            if('function' === typeof cbSuccess){
                cbSuccess(response.data);
            }
        })
        .catch((error) => {
            if('function' === typeof cbError){
                cbError(error);
            }
            console.log(error)
        });
    }
    static post(url:string,postData:any,cbSuccess:any,cbError:any,optArgs:any){
        var formData = new FormData();

        for(let key in postData){
            formData.append(key, postData[key]);
        }
        // if(Config.debug){
        //     console.log(`NET,POST:${url}\n`);       
        // }
        try{
            if(typeof optArgs === 'object'){
                for(let n in optArgs){
                    let f = optArgs[n];
                    formData.append(n,f);
                }
            }
        }catch(e){
            console.log(e);
        }
        axios({
            method:'post',
            url: url,
            data:formData,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin' : '*'
            },

        })
        .then((response) => {
            if('function' === typeof cbSuccess){
                cbSuccess(response.data);
            }
        })
        .catch((error) => {
            if('function' === typeof cbError){
                cbError(error);
            }
            console.log(error)
        });
   
    }
}

export default Proxy;