fetch("https://time.hidemyacc.com/")
  .then((res) => res.json())
  .then((data) => console.log(data));
//JSON sẽ dễ hiểu hơn XML

//Tìm hiểu thêm các phương thức get, push, post, delete 
//get: lấy về
//post: Tạo mới
//push: cập nhật
//delete: xóa
// function myFetch(url, type, data) {

//     /* GET */
//     if (type === "GET") {
//     return fetch(url, {
//     method: type,
//     headers: {
//         'Content-type': 'application/json'
//     }
//     })
//     .then(res => {
//         if (res.ok) { console.log("HTTP request successful") }
//         else { console.log("HTTP request unsuccessful") }
//         return res
//     })
//     .then(res => res.json())
//     .then((data) => console.log(data))
//     .catch(error => error)
//     }
 
    /* DELETE */
    // if (type === "DELETE") {
    // return fetch(url, {
    // method: type,
    // headers: {
    //     'Content-type': 'application/json'
    // }
    // })
    // .then(res => {
    //     if (res.ok) { console.log("HTTP request successful") }
    //     else { console.log("HTTP request unsuccessful") }
    //     return res
    // })
    // .catch(error => error)
    // }
 
    // /* POST or PUT */
    // if (type === "POST" | type === "PUT") {
    // return fetch(url, {
    // method: type,
    // headers: {
    //     'Content-type': 'application/json'
    // },
    // body: JSON.stringify(data)
    // })
    // .then(res => {
    //     if (res.ok) { console.log("HTTP request successful") }
    //     else { console.log("HTTP request unsuccessful") }
    //     return res
    // })
    // .then(res => res.json())
    // .then((data) => console.log(data))
    // .catch(error => error)
    // }
//}

//myFetch("https://time.hidemyacc.com/", "DELETE")