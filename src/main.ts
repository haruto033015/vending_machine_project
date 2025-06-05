
type drink = {
  merch: string,
  price: number
  qty: number
  choice: string;
};
let drink = [{merch:"Milk",price:120,qty:4}
            ,{merch:"Cola",price:150,qty:0}
            ,{merch:"Beer",price:220,qty:2}];

const display = () =>{          //機能１　画面表示
//     console.log(`# Display drinks #
// Milk | 220 |
// Cola | 150 | Sold out
// Beer | 220 |`);
    console.log(`# Display drinks #`);
    // for(let i=0; i<drink.length; i++){
    //     console.log(drink[i]);
    // }
    for(let i=0; i<drink.length; i++){
        if(drink[i].qty !== 0){
            console.log(`${drink[i].merch} | ${drink[i].price} | `);
        }else{
            console.log(`${drink[i].merch} | ${drink[i].price} | Sold Out`);
        }
    }
};
display();


// let choice = "Milk";
let choice = "Cola";
// let choice = "Beer";
const buy = () =>{              //機能２　購入
    for(let i=0; i<drink.length; i++){
        if( choice == drink[i].merch ){
            if(drink[i].qty !== 0){
                console.log(`OK | Milk purchased`);
                break;
            }else{
                console.log(`NG | Milk is Sold out`);
                //チョイスを表示に入れ込む
                //支払いの変数を作成してチョイスでNGパターンを作成
            }
        }
    }
};
buy();

const refill = () =>{           //機能３　在庫補充

};
refill();

// console.log(display());

// const Gandam = () => {
//     console.log("よくわかんないけど、なんかわかった!");
// };

// Gandam();


