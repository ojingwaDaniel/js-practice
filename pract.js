// CODE TO PRINT OUT THE PRICE OF ITEMS IN A SUPERMARKET
let item = prompt('what do you want to buy')
switch(item){
    case 'iphone 13':
    case 'hp laptop': console.log('$500')
    break

    case 'mouse': console.log('$50')
    break

    case 'laptop Bag': console.log('$70')
    break

    case ' phone charger': console.log('$10')
    break

    case ' laptop charger': console.log('$60')
    break

    case ' iphone 12': console.log('$300')
    break

    case 'apple laptop': console.log('$700')
    break

    case 'laptop battery': console.log('$40')
    break

    case ' glasses': console.log('$30')
    break

    default : console.log('i cant really say,  please ask the accountant')
}