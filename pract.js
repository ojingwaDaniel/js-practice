// CODE TO PRINT OUT THE PRICE OF ITEMS IN A SUPERMARKET
let item = prompt('what do you want to buy i will get the price for you')
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
//TERNARY OPREATION 
let githubUser = 'poor'
let activity = githubUser ==='Busy' ? 'this user is on fire ' : 'this user has not been pushing code regularly'
console.log(activity)
let bigPremierLeagueClubs = ['chelsea','liverpool','Man City','Arsenal','Manchester United']
let smallPremierLeagueClubs = ['Everton','Tottenham','Brighton','Westham','Southampton','Fulham']
let premierLeagueClubs = bigPremierLeagueClubs.concat(smallPremierLeagueClubs)
premierLeagueClubs.push('crystal Palace')
premierLeagueClubs.pop()
premierLeagueClubs.shift('Brentford')
premierLeagueClubs.unshift()
premierLeagueClubs.slice(0,4)
premierLeagueClubs.splice(5,3,'Brentford')
let laligaTeams = ['Real Madrid','Villereal','Eibar','Alectico Madrid','chelsea','liverpool','Man City','Arsenal']
laligaTeams.sort()

// ARRAYS IN ARRAYS 
let bigClubs = [
    ['Liverpool','Manchester United','Arsenal','Chelsea'],
    ['Barcelona','Real Madrid','Alectico Madrid','Sevilla','Everton'],
    ['AC Milan','Inter Milan','Juventus','Roma']
]
bigClubs[1].pop()
// OBJECTS
let bigTeams = {
    england : ['chelsea','liverpool','Man City','Arsenal','Manchester United'],
    spain : ['Barcelona','Real Madrid','Alectico Madrid','Sevilla'],
    italy : ['AC Milan','Inter Milan','Juventus','Roma']

}
    