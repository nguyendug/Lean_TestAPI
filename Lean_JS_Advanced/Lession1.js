// console.log(1)
// console.log(2)
// setTimeout(()=>{
//     console.log("Run after 3s")
// },3000)
// console.log(3)
// console.log(4)

//request HTTP
// const callback = (err, data) => {
//   if (err) {
//     console.log("Calling callback with err", err);
//   }
//   if (data) {
//     console.log("Calling callback with data: ", data);
//   }
// };

// function getTodo(id, callback) {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       //console.log("Check res:  ", xhttp.responseText);
//       const data = JSON.parse(xhttp.responseText);
//       const datastring = JSON.stringify(data);
//       callback(undefined, data);
//     }

//     if (this.readyState === 4 && this.status !== 200) {
//       console.log("Something wrong ", undefined);
//     }
//   };
//   xhttp.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
//   xhttp.send();
// }

//...
let arr = [1, 2, 3, 4, 5];
console.log("check arr: ", arr);
let arr2 = [...arr, 6];
console.log("check arr 2: ", arr2);

function getTodo(id) {
  return new Promise((resolve, reject) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        //console.log("Check res:  ", xhttp.responseText);
        const data = JSON.parse(xhttp.responseText);
        const datastring = JSON.stringify(data);
        //callback(undefined, data);
        resolve(data);
      }

      if (this.readyState === 4 && this.status !== 200) {
        //console.log("Something wrong ", undefined);
        reject(`something wrongs with id: `);
      }
    };
    xhttp.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
    xhttp.withCredentials = true;
    xhttp.send();
  });
}

// const getNewTodo = async () => {
//   let response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${id}`
//   );
//   console.log("Check response: ", response);
//   if (response && response.status !== 200) {
//     throw new Error("Something wrongs with status code: ", response.status);
//   }
//   let data = await response.json();
//   //console.log(">>>> get data", data);
//   return data;
// };

const getNewTodo = async () => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    //console.log("Check response: ", response);
    if (response && response.status !== 200) {
      throw new Error("Something wrongs with status code: ", response.status);
    }
    let data = await response.json();
    //console.log(">>>> get data", data);
    return data;
  } catch (e) {
    console.log("Check catch: ", e.message);
  }
};

//console.log(getNewTodo());
// getNewTodo("fggd")
//   .then((data) => {
//     console.log(">>>> get data", data);
//   })
//   .catch((err) => {
//     console.log("check error: ", err.message);
//   });

// fetch(`https://jsonplaceholder.typicode.com/todos/1`)
//   .then((Response) => {
//     return Response.json();
//   })
//   .then((data) => {
//     console.log("Response: ", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// getTodo(1)
//   .then((data1) => {
//     console.log("get data 1: ", data1);
//     return getTodo(2);
//   })
//   .then((data2) => {
//     console.log("get data 2: ", data2);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const promiseExp = () => {
//   return new Promise((resolve, reject) => {
//     //resolve("get some data");
//     reject("something wrongs");
//   });
// };
// promiseExp()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//http status code
//200: ok, 201: tao moi,
//400: co loi ve mat cu phap, 404: khong tim thay trang web
//500: loi o phia trong sever, 502: Khong chay duoc sever

//
