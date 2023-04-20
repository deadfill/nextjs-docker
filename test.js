let product = {
    "name": "филл",
    "count": "3,000",
    "price": 100,
    "country": "MIC",
    "descriptions": "",
    "category.lvl": "спец",
    "vote_average": 0.1,
    "image_url": "https://s3.timeweb.com/41591949-c38f91aa-39f7-48e6-832c-c590ded4c690/productImage.jpg"
};

product["category"] = product["category.lvl"];
delete product["category.lvl"];

console.log(product);