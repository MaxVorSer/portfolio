export function calculateDiscount(price, percent) {
    if (typeof price !== "number" || typeof percent !== "number")
        throw TypeError("аргументы не числа");
    return (price / 100) * percent;
}

export function getMarketingPrice(product) {
    try {
        const productObject = JSON.parse(product)
        if (!productObject.prices || !productObject.prices.hasOwnProperty("marketingPrice")) return null
        return productObject.prices.marketingPrice
    } catch (err) {
        throw err
    }
}

// Функция имитирует неудачный запрос за картинкой
function fetchAvatarImage(userId) {
    return new Promise((resolve, reject) => {
        reject(new Error(`Error while fetching image for user with id ${userId}`));
    });
}

export async function getAvatarUrl(userId) {
    try {
        const image = await fetchAvatarImage(userId);
        return image.url;
    } catch (e) {
        return '/images/default.jpg';
    }
}
