import { builderProductsFirst, stopPageLoage } from "./helpers.js";

const homeDatas = {
    banner: db?.products.sort(() => Math.random() - 0.5).slice(0, 3) ?? [],
    pub: db?.products[0],
    bestSeller: db?.products?.slice(0, 3) ?? [],
    bestProducts: db?.products?.sort((p1, p2) => p2.rate - p1.rate).slice(0, 12) ?? [],
    categories: db?.categories
}
console.log(homeDatas)

const htmlBanerItems = document.querySelector('#swiper-wrapper-banner')
const htmlBestSellerContent = document.querySelector('#best-seller-content')
const htmlPubProduct = document.querySelector('#pub-product')
const htmlBestProduct = document.querySelector('#best-product-content')
const htmlCategoryContent = document.querySelector('#category-grid-content')

function initBanner() {
    htmlBanerItems.innerHTML = ''
    const html = ''
    homeDatas?.banner.forEach((p, index) => {
        let rateHtml = ''
        for (let i = 1; i <= 5; i++) {
            rateHtml += `<i class="fa-${i < p.rate ? 'solid' : 'regular'} fa-star"></i>`
        }
        const _html = `
                    <div class=" swiper-slide">
                        <div class="banner ${index % 2 == 0 ? '' : 'second'}">
                            <div class="banner-content ">
                                <h1>Bienvenue sur Buy More</h1>
                                <h2>${p.nom}</h2>
                                <p>Découvrez nos meilleures offres et promotions du moment.</p>
                                <p>${sliceText(p.description, 300)}</p>
                                <div class="rate-content">
                                    ${rateHtml}
                                </div>
                                <a href="/pages/produit.html?id=${p.id}" class="btn btn-primary">Découvrir</a>
                            </div>
                            <div class="banner-image">
                                <div class="slider">
                                    <img src="${p.img}"
                                        alt="casque_sans_fil_-_oraimo_boompop_2s">
                                    <img src="/assets/img/other/iphone15pro.jpeg" alt="Iphone 15 Pro">
                                </div>
                            </div>
                        </div>
                    </div>
        `
        htmlBanerItems.innerHTML += _html
    });
}


function initBestSellerProduct() {
    htmlBestSellerContent.innerHTML = ''
    const html = ''
    const products = homeDatas?.bestSeller

    products.forEach((product, i) => {
        let _html = builderProductsFirst(product)
        htmlBestSellerContent.innerHTML += _html
    })
}

function initPubProduct() {
    htmlPubProduct.innerHTML = ''
    const html = ''
    const product = homeDatas?.pub
    let rateHtml = ''
    for (let i = 1; i <= 5; i++) {
        rateHtml += `<i class="fa-${i < product.rate ? 'solid' : 'regular'} fa-star"></i>`
    }
    const _html = `
            <div class="pub-card">
                <img src="${product.img}"
                    alt="Promo ${product.nom}">
                <div class="pub-text">
                    <h3>Promo ${product.nom}</h3>
                    <p>-${product?.reduction} sur le ${product.nom} jusqu'à dimanche !</p>
                    <a href="/pages/produit.html?id=${product.id}" class="btn btn-secondary">Profiter de l'offre</a>
                </div>
            </div>
        `
    htmlPubProduct.innerHTML += _html
}

function initBestProduct() {
    htmlBestProduct.innerHTML = ''
    const html = ''
    const products = homeDatas?.bestProducts
    products.forEach((p, index) => {
        let rateHtml = ''
        for (let i = 1; i <= 5; i++) {
            rateHtml += `<i class="fa-${i < p.rate ? 'solid' : 'regular'} fa-star"></i>`
        }
        const _html = `
                    <div class="box-product">
                    <div class="image"><a href="/pages/produit.html?id=${p.id}"><img src="${p.img}" alt="Livre 1"></a>
                    </div>
                    <div class="content">
                        <div class="description">
                            <h3><a href="/pages/produit.html?id=${p.id}">${p.nom}</a></h3>
                            <p>${sliceText(p.description, 50)}</p>
                            ${isNew(p.date_add) ? '<p class="type">New</p>' : ''}
                            <div>
            <div class="rating"><i class="fa-solid fa-star"></i>
                ${rateHtml}
            </div>
            <button class="like-btn"><i class="fa-regular fa-heart"></i></button>
        </div>
        <p class="price">${p.prix} FCFA</p>
                        </div >
        <a href="/pages/produit.html?id=${p.id}" class="btn btn-secondary position-btn">Decouvrir</a>
                    </div >
                </div >
        `
        htmlBestProduct.innerHTML += _html
    });
}

function initCategories() {
    htmlCategoryContent.innerHTML = ''
    const html = ''
    const cats = homeDatas?.categories
    cats.forEach((c, index) => {
        const _html = `
                 <a href="/pages/listeProduits.html?id_cat=${c.id}" class="category-card">
                    <img src="${c.img}" alt="${c.title}">
                    <h4>${c.title}</h4>
                </a>
        `
        htmlCategoryContent.innerHTML += _html
    });
}



initBanner()
initBestSellerProduct()
initPubProduct()
initBestProduct()
initCategories()


const mySwiper = new Swiper('.swiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 800,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

stopPageLoage()

