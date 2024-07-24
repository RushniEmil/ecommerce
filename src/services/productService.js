
//Transforms product data to a format with necessary fields.

export const transformProductData = (product) => ({
    id: product.id,
    price: product.price,
    quantity: 1, // Default quantity
    title: product.title.length > 25 ? product.title.substring(0, 28) + '...' : product.title,
    thumbnail:product.thumbnail, 
    rating:product.rating
});
