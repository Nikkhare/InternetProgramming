var url_str = document.URL
var url_split = url_str.split("id=")
var id = parseInt(url_split[1])
var param = 'https://jsonplaceholder.typicode.com/photos'+'?id='+id
// console.log(param)
var display = ''

fetch(param).then(res => {
    return res.json()
}).then(data => {
    console.log(data)
    display = `<h2>Details Information</h2>
                <img src="${data[0].thumbnailUrl}" alt="">
                <h3>${data[0].title}</h3>
                <p>Id = ${data[0].id}</p>
                <p>Album Id = ${data[0].albumId}</p>
                <a href="./index.html">back</a>`
    document.getElementById('detail').innerHTML = display;
})