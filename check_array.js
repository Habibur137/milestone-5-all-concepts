function checkArray(friends){
    if(Array.isArray(friends) == false){
        return 'please give a array'
    }
    let mega = friends[0].length
    for(const friend of friends){
        if(friend.length > mega){
            mega = friend
        }
    }
    return mega;
}

const friends = ['habib', 'hamim', 'ajmul hoda']

const friend = checkArray('friends')
console.log(friend)