import { question } from "./question";
import { display,buy,refill } from "./main";

const answer_merch = `` ;
const answer_payment = 0;
const answer_type = ``;
const answer_quantity = 0;
let answer_addstock:any[] = [];

async function main() {
    let wakeup = true;
    while(wakeup){
        console.log(`  \n\n  番号を入力してください`);
        console.log(`  \u001b[36m[1.商品をみる]\n  \u001b[32m[2.商品を購入する]\n  \u001b[31m[3.在庫を補充する]`);
        console.log(`  \u001b[0m※ それ以外を入力すれば操作を終了します\n\n`);
        const answer = await question(`>`);
        console.log(` `);
        switch(answer){
            case `1`:
                display();
                console.log(`  閲覧を終了する場合にはEnterを入力してください\n `);
                const answer_exit1 = await question(">");
                console.log(` `);
                if( answer_exit1 == `` ){
                    continue;
                }
            case `2`:
                console.log(`  購入したい商品を入力してください\n `);
                const answer_merch = await question(`>`);
                console.log(` `);
                console.log(`  購入に使用する金額を入力してください\n `);
                const answer_payment = await question(`>`);
                console.log(` `);

                let result = answer_payment.match(/[0-9]/);
                if(!result){
                    console.log("ERROR | 数字を入力してください\n");
                    continue;
                }

                buy(String(answer_merch),Number(answer_payment));
                console.log(` `);
                console.log(`  購入を終了する場合にはEnterを入力してください\n `);
                const answer_exit2 = await question(">");
                console.log(` `);
                if( answer_exit2 == `` ){
                    continue;
                }

            case `3`:
                let flag = true;
                while(true){
                    /////////
                    if( flag == true ){
                        console.log(`  補充したい商品を入力してください\n `);
                        const answer_type = await question(`>`);
                        console.log(` `);
                        console.log(`  補充する数を入力してください\n `);
                        const answer_quantity = await question(`>`);
                        console.log(` `);
                        answer_addstock.push({type:String(answer_type),quantity:Number(answer_quantity)});
                    }
                    /////////
                    console.log(`  補充を終了する場合にはEnterを`);
                    console.log(`  補充を継続する場合にはSpaceを入力してください\n `);
                    const answer_exit3 = await question(">");
                    console.log(` `);
                    switch(answer_exit3){
                        case ` `:
                            continue;
                        case ``:
                            refill(answer_addstock);
                            console.log(` `);
                            answer_addstock = [];
                            break;
                        default:
                            console.log(`ERROR | 正しい操作を行ってください\n `);
                            flag = false;
                            continue;///改良の余地あり                               
                    }
                    break;
                }
                continue;
            default :
                wakeup = false;
                break;
        }
    }
}

(async ()=>{
    await main();
})();
