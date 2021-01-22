function kilometerToMeter(kilo){
    if(kilo<0){
        console.log("Kilometer can not be negative.");
        return false;
    }
    var meter = kilo*1000;
    return meter;
}


function budgetCalculator(watch, phone, laptop){
    if(watch<0 || phone<0 || laptop<0){
        console.log("Elements number can not be negative.");
        return false;
    }
    var watchCost = watch*50;
    var phoneCost = phone*100;
    var laptopCost = laptop*500;
    var totalCost = watchCost+phoneCost+laptopCost;
    return totalCost;
}


function hotelCost(days) {
    var sumMoney = 0;
    if(days<0){
        console.log("Days number can not be negative.");
        return false;
    }
    if(days>=20){
        sumMoney = 1000+800+(days-20)*50;
        return sumMoney;
    }
    else if(days>=10 && days<20){
        sumMoney = 1000+(days-10)*80;
        return sumMoney;
    }
    else if(days>=1 && days<10){
        sumMoney = days*100;
        return sumMoney;
    }
}


function megaFriend(friend) {
    var name;
    var nameStore;
    var lengthStore = 0;
    for (var i = 0; i < friend.length; i++) {
        name = friend[i];
        console.log('name', name);
        console.log('nameLength', name.length);
        if (name.length > lengthStore) {
            nameStore = name;
            lengthStore = name.length;
        }
    }
    return nameStore;
}