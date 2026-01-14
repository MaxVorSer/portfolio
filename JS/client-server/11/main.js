const main = document.querySelector('.article');
const page = document.querySelector('.page');
const divH1 = document.querySelector('.h1');
console.log(divH1)
const url = new URL(location.href);
console.log(url);
const pageId = url.searchParams.get('page') || 1;
console.log(pageId);
const postId = url.searchParams.get('post');
console.log(postId);


function createLink(article) {
    const link = document.createElement('a');

    link.style.display = `block`;
    link.style.marginTop = `20px`;
    link.textContent = article.title;
    link.href = `post.html?post=${article.id}`;

    return link
}


const renderPost = (data) => {
    main.textContent = '';
    const links = data.map(item => createLink(item));
    main.append(...links);

}

const createPages = (pagination) => {
    const listPage = document.createElement('lu');
    listPage.style.display = 'flex';
    listPage.style.flexWrap = 'wrap';
    listPage.style.width = '1000px';
    listPage.style.marginTop = `30px`;

    for (let i = 1; i <= pagination.pages; i++) {
        const itemPage = document.createElement('li');
        const linkPage = document.createElement('a');
        linkPage.href = `?page=${i}`;
        linkPage.textContent = i;
        itemPage.style.listStyleType = 'none';
        itemPage.style.marginLeft = '10px';
        itemPage.append(linkPage);
        listPage.append(itemPage);

        linkPage.addEventListener('click', function(e) {
            e.preventDefault();
            history.pushState(null, null, `?page=${i}`);
            getPage(i)
        })

    };
    page.append(listPage);

}


const elementsPost = (data) => {
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    h1.textContent = data.title;
    p.textContent = data.body;
    console.log(h1);
    console.log(p);
    divH1.append(h1);
    divH1.append(p);
}

const itemCommenst = (data) => {
    const ulComenst = document.createElement('ul');
    const liName = document.createElement('li');
    const liEmail = document.createElement('li');
    const liBody = document.createElement('li');

    ulComenst.style.display = 'flex';
    ulComenst.style.flexWrap = 'wrap';
    ulComenst.style.width = '1200px';
    ulComenst.style.listStyleType = 'none';
    ulComenst.style.margin = '50px';
    liEmail.style.paddingLeft = '30px';
    liBody.style.paddingLeft = '30px';


    liName.textContent = data.name;
    liEmail.textContent = data.email;
    liBody.textContent = data.body;

    ulComenst.append(liName, liEmail, liBody);
    divH1.append(ulComenst);

}


async function comment(post) {
    const response = await fetch(`https://gorest.co.in/public-api/comments?post_id=${post}`)
    const request = await response.json();

    request.data.forEach(element => itemCommenst(element));
    console.log(request);

}


async function getPost(post) {
    const response = await fetch(`https://gorest.co.in/public-api/posts/${post}`)
    const request = await response.json();
    console.log(request);
    elementsPost(request.data);
    console.log(request.data);
    comment(post);
}


async function getPage(page, cb) {
    const response = await fetch(`https://gorest.co.in/public-api/posts?page=${page}`)
    const request = await response.json();
    console.log(request);
    console.log(pageId);
    renderPost(request.data)
    if (cb) {
        cb(request.meta.pagination);
    }

}



const init = () => {
    if (postId) {
        getPost(postId);
    } else {
        getPage(pageId, createPages);
    }
}


init();
