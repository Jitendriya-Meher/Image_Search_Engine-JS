const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('searchbox');
const searchResult = document.getElementById('search-result');
const moreBtn = document.getElementById('show-more-btn');

const key = 'qhS2NcX4tar0CA7DHWeD7Slh_f1NfRRTAgtrnzkCx5U';

let keyword = "";
let page = 1;

async function searchImage(){

    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`;

    const res = await fetch(url);
    const data = await res.json();

    if( page == 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((item) => {

        const image = document.createElement('img');

        image.src = item.urls.small;

        const imgLink = document.createElement('a');

        imgLink.href =  item.links.html;
        imgLink.target = '_blank';

        imgLink.appendChild(image);

        searchResult.appendChild(imgLink);

    });

    moreBtn.style.display = "block";

}

searchForm.addEventListener('submit', (e) => {

    e.preventDefault();

    page = 1;
    searchImage();

});

moreBtn.addEventListener('click', () => {

    page += 1;
    searchImage();

});