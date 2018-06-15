import axios from 'axios';

var baseURL = '';
var headers = {'X-Custom-Header': 'foobar'};

export default function getDataFromServer(url,methodType,paramData, successCallBack, errorCallBack){
    axios({
        method: methodType,
        url:baseURL + url,
        responseType:'stream',
        data : paramData ? paramData : '',
        headers : headers
      })
        .then(function(response) {
            successCallBack(response.status, response.data);
        })
        .catch(function(response){
            errorCallBack('ERROR',response);
        })
}