console.log("Fetch API")


async function getAPI(){
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1') //this api in url is to get data(for fetching data)
    console.log(api,"API")
    const json = await api.json()  // it will be easily readable after converting to JSON
    console.log(json,"json")        //output in json 
}

async function postAPI(){
    const api = await fetch('https://jsonplaceholder.typicode.com/posts', {      // to post data we write additional part in fetch after ,
        method: 'POST',
        body: JSON.stringify({
            title: 'BOOTCAMP' ,
            body: 'javasscript' ,
            userId: 1                //whatever object Passed in JSON.stringify will be converted to string

        }),
        headers: {                  // when sending data we tell server about context type 
            "content-type": "application/json; charset=UTF-8"
        }                                                           
    })

    console.log(api,"API")
    const json = await api.json()  // it will be easily readable after converting to JSON
    console.log(json,"json")

}

getAPI()
postAPI()
console.log("end") 

