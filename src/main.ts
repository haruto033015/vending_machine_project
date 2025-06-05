
type drink = {merch: string,
            price: number
            qty: number};
let drink = [{merch:"Milk",price:120,qty:0}
            ,{merch:"Cola",price:150,qty:0}
            ,{merch:"Beer",price:220,qty:0}];
/////////////////////////////////////////////////////////////

const display = () =>{                                                  //機能１　画面表示
    console.log(`# Display drinks #`);
    for(let i=0; i<drink.length; i++){
        if(drink[i].qty !== 0){
            console.log(`${drink[i].merch} | ${drink[i].price} |  `);
        }else{
            console.log(`${drink[i].merch} | ${drink[i].price} | Sold Out`);
        }
    }
};

/////////////////////////////////////////////////////////////
const buy = (choice:string,payment:number) =>{                          //機能２　購入
    for(let i=0; i<drink.length; i++){
        if( choice == drink[i].merch ){
            if(drink[i].qty !== 0){
                if( payment >= drink[i].price ){
                    console.log(`OK | ${choice} purchased`);
                    drink[i].qty = drink[i].qty - 1;
                    return;
                }else{
                    console.log(`NG | Not enough paymentAmount for ${choice}`);
                    return;
                }
            }else{
                console.log(`NG | ${choice} is Sold out`);
                return;
            }
        }
    }
    console.log(`NG | ${choice} is not registered`);
};

/////////////////////////////////////////////////////////////
const refill = (addstock:{type:string,quantity:number}[]) =>{           //機能３　在庫補充
    for( let n=0; n < addstock.length; n++ ){
        let match:boolean = false;
        for( let i=0; i<drink.length; i++){
            if( addstock[n].type == drink[i].merch ){
                drink[i].qty = drink[i].qty + addstock[n].quantity;          
                console.log(`OK | ${addstock[n].quantity} ${drink[i].merch} have been refiiled`);
                match = true;
                break;
            }
        }
        if( !match ){
            console.log(`NG | ${addstock[n].type} is not registered`); 
        }    
    }                                                                                                                              //在庫の表示
};

/////////////////////////////////////////////////////////////
refill([
  { type: "Milk", quantity: 2 },
  { type: "Beer", quantity: 3 },
]);
display();
buy("Milk", 100);
buy("Milk", 200);
display();
buy("Cola", 200);
refill([
  { type: "Milk", quantity: 1 },
  { type: "Cola", quantity: 2 },
]);
display();
buy("Cola", 200);
display();                                                              //シナリオ

/////////////////////////////////////////////////////////////
// refill([
//   { type: "Milk", quantity: 1 },
//   { type: "Milk", quantity: 2 },
// ]);                                                                  //追加要件確認用

// refill([
//   { type: "Milk", quantity: 1 },
//   { type: "Sake", quantity: 2 },
// ]);                                                                  //追加要件確認用

//////////////////////////////////////////refill
    // for(let i=0; i<drink.length; i++){
    //     if( addstock[i].merch == drink[i].merch ){
    //         drink[i].qty = drink[i].qty + addstock[i].add;          
    //         console.log(`${addstock[i].add} ${drink[i].merch} have been refiiled`);
    //     }                                                           //在庫の追加
    // }
    /////////////////////////////////////////////////////////////////////////////////
    // let i=0;
    // while( i < addstock.length ){
    //     switch( addstock[i].merch ){
    //         case "Milk":
    //             drink[0].qty = drink[0].qty + addstock[i].add;          
    //             console.log(`${addstock[i].add} Milk have been refiiled`);
    //             break;
    //         case "Cola":
    //             drink[1].qty = drink[1].qty + addstock[i].add;          
    //             console.log(`${addstock[i].add} Cola have been refiiled`);
    //             break;
    //         case "Beer":
    //             drink[2].qty = drink[2].qty + addstock[i].add;          
    //             console.log(`${addstock[i].add} Beer have been refiiled`);
    //             break;
    //     }                                                               //在庫の追加
    //     i++;
    // }

    // for(let i=0; i<drink.length; i++){
    //     console.log(`${drink[i].merch}| ${drink[i].qty} stock`);
    // }   //在庫の表示

    // // const choice = "Milk";
// // const choice = "Cola";
// // const choice = "Sake";
// let choice = "Beer";
// const payment = 220;
// // const payment = 150;         //データ数

// let addstock = [{merch:"Milk",add:2}
//                 ,{merch:"Beer",add:3}]; //追加在庫数の指定


///////////////////////////////////////////////////////////
// console.log(`${drink[i].merch} | ${drink[i].price} | ${drink[i].qty}`);