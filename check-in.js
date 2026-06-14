document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const targetProduct = productsInventory.find(item => item.id == productId);

    if (targetProduct) {

        document.getElementById('detail-name').innerText = targetProduct.name;
        document.getElementById('detail-price').innerHTML = `<b>${targetProduct.price}</b>`;
        document.getElementById('detail-category').innerText = targetProduct.category;
        document.getElementById('detail-tagline').innerHTML = `<br><br>${targetProduct.tagline}`;
        document.getElementById('detail-description').innerText = targetProduct.description;
        
        document.getElementById('detail-main-img').src = targetProduct.image;
        document.getElementById('detail-sub-img1').src = targetProduct.subImg1;
        document.getElementById('detail-sub-img2').src = targetProduct.subImg2;
        document.getElementById('detail-sub-img3').src = targetProduct.subImg3;

        document.title = `Nike - ${targetProduct.name}`;
    } else {
        document.getElementById('main-detail-wrapper').innerHTML = `
            <div class="text-center py-5">
                <h1>Product Not Found</h1>
                <p>Please return to the <a href="new&featured-section.html">Main Shop Directory</a>.</p>
            </div>
        `;
    }
});