console.clear();

const makeRequest=(method,url,data)=>{
    const xhr=new XMLHttpRequest();
    xhr.open(method,url);
    xhr.onload=()=>{
        let data=xhr.response;
        console.log(JSON.parse(data));
    }
     xhr.setRequestHeader('content-Type','application/json');

    xhr.onerror=()=>{
        console.log('error is here');
    }
    xhr.send(JSON.stringify(data));

}

const getData=()=>{
    makeRequest('GET','https://jsonplaceholder.typicode.com/posts');
 
}
const sendData=()=>{
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
        title: 'foo',
    body: 'bar',
    userId: 1,
    });
 
}

const upDate=()=>{
    makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
    id:1,    
    title: 'fooMa',
    body: 'barMa',
    userId: 1,
    });
}
upDate();

// const singleUpDate=()=>{
//     makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
        
//     title: 'This is Single',
   
//     });
// }
// const singleDeleteDate=()=>{
//     makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{

//     })
// }

// singleDeleteDate();