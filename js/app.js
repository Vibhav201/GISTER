myurl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7f7175167ce84b7eba8a0ee816e1e471";
$.get(myurl, (response) => {
    for (i = 0; i < 12; i += 3) {
        var html = `<div class="hot-topic">

        <img src="${response.articles[i].urlToImage}" alt="">

        <div class="hot-topic-content">
            <h2>${response.articles[i].title}</h2>

            <h3>${response.articles[i].source.name}</h3>
            
            <p>${response.articles[i].description}</p>
            
            <a href="#" onclick='window.open("${response.articles[i].url}");return false;'>Read More</a>
        </div>
    </div>`;

        $(".posts").append(html);
    }
});

myurl1 = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=7f7175167ce84b7eba8a0ee816e1e471";
$.get(myurl1, (response1) => {
    for (i = 4; i > 0; i--) {
        var html1 = `<a href="#" onclick='window.open("${response1.articles[i].url}");return false;'>${response1.articles[i].title}<span>- by ${response1.articles[i].author}</span></a>`;

        $(".techposts").append(html1);
    }
});

myurl2 = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=7f7175167ce84b7eba8a0ee816e1e471";
$.get(myurl2, (response2) => {
    var html2 = `<article>
    <img src="${response2.articles[0].urlToImage}">

    <div>
        <h3>${response2.articles[0].title}</h3>

        <p>${response2.articles[0].description}</p>

        <a href="#" onclick='window.open("${response2.articles[0].url}");return false;'>Read More <span>>></span></a>
    </div>
</article>`;

    $(".container-top-left").append(html2);
});

$.get(myurl2, (response3) => {
    for (i = 3; i > 1; i--) {
        var html3 = `<article>
        <img src="${response3.articles[i].urlToImage}">

        <div>
            <h3>${response3.articles[i].title}</h3>

            <p>${response3.articles[i].description}</p>

            <a href="#" onclick='window.open("${response3.articles[i].url}");return false;'>Read More <span>>></span></a>
        </div>
    </article>`;

        $(".container-bottom-left").append(html3);
    }
});

myurl3 = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7f7175167ce84b7eba8a0ee816e1e471";
$.get(myurl3, (response4) => {
    for (i = 0; i < 5; i++) {
        var html4 = `<article>
        <h4>just in </h4>

        <div>
            <h2>${response4.articles[i].title}</h2>

            <p>${response4.articles[i].description}</p>

            <a href="#" onclick='window.open("${response4.articles[i].url}");return false;'>Read More <span>>></span></a>
        </div>

        <img src="${response4.articles[i].urlToImage}">
    </article>`;

        $(".main-container-right").append(html4);
    }
});