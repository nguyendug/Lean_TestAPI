fetch("https://time.hidemyacc.com/")
  .then((res) => res.json()) 
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

//then(onSuccess, onError): nhận 2 hàm onSuccess (hàm gọi khi promise hoàn thành), onError (hàm gọi khi promise có lỗi)
//catch(): 
// async/await là cơ chế giúp thực hiện các thao tác bất đồng bộ

// axios.get("https://time.hidemyacc.com/")
//   .then(response => console.log("response", response.data))

// async function() {
//   try {
//     const user = await api.getUser('sun_user');
//     const posts = await api.getPostsOfUser(user);
//     const comments = await api.getCommentsOfPosts(posts);

//     console.log(comments;
//   } catch (err) {
//     console.log(err);
//   }
// }

//Tìm hiểu thêm các phương thức get, put, post, delete 
//get: lấy về
//post: Tạo mới
//put: cập nhật
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