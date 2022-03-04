//fetch all data and listing it
fetch('https://jsonplaceholder.typicode.com/photos').then((response) => {
    return response.json();
}).then((datas) => {
    console.log(datas)
    var template = ''
    datas.forEach(data => {
        template += `<div class="item">
                        <div class="image">
                            <img src="${data.thumbnailUrl}" alt="Book-logo" width="50%">
                        </div>
                        <div class="book_info">
                            <p> ${data.title} </p>
                            <p>Id: ${data.id} </p>
                            <p>AlbumId: ${data.albumId} riels</p>
                            <a href="./detail.html?id=${data.id}">See</a>
                        </div>
                    </div>`
            });
    document.getElementById('list_book').innerHTML += template;  
})




