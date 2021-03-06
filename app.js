/**
 * Created by Saloni on 2/17/2017.
 */


(function(){
    var app=angular.module('store',['store-products']);

    app.controller('StoreController',function(){
        this.products=gems;


    });

    var gems=[
        {
            name:'Dodecahedron',
            price:2,
            description:'Some gems have hidden qualities beyond their lustre, beyond their shine. Dodeca is one of those gems',
            canPurchase:true,
            soldOut:true,
            images:[
                {
                    full:'download.jpg'
                },
            ],
            reviews:[
                {
                    stars:5,
                    body:'I love this product',
                    author:'joe@thomas.com'
                },
                {
                    stars:4,
                    body:'',
                    author:'peter@halter.com'
                },
            ],
        },
        {
            name:'Pentagonal Gem',
            price:5.95,
            description:'Some gems have hidden qualities beyond their lustre, beyond their shine. Penta is one of those gems',
            canPurchase:false,
            soldOut:false,
            images:[
                {
                    full:'download (1).jpg'
                },
            ],
            reviews:[
                {
                    stars:1,
                    body:'I dislike this product',
                    author:'joanne@miffy.com'
                },
            ]
        }
    ];


    app.controller('ReviewController',function(){
        this.review={};
        this.review.createdOn=Date.now();
        this.addReview=function(product){
            product.reviews.push(this.review);
            this.review={};
        };
    });




})();
