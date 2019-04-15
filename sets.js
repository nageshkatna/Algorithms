//Sets

function mySet(){
  var collection = [];
  
  this.has = function(value){
    if(collection.indexOf(value)!== -1){
      return true
    }
    return false
  }
  
  this.values = function(){
    return collection;
  }
  
  this.add = function(value){
    if(this.has(value)){
      return false
    }
    collection.push(value);
    return true
  }
  
  this.delete = function(value){
    if(this.has(value)){
      index = collection.indexOf(value)
      collection.splice(index,1);
      return true
    }
    collection.pop(value);
    return true
  }
  
  this.size = function(){
    return collection.length()
  }
  
  this.union = function(another){
    var anotherCollection = new mySet();
    var firstSet = this.values();
    var secondSet = another.values();
    firstSet.forEach(function(e){
      anotherCollection.add(e)
    });
    secondSet.forEach(function(e){
      anotherCollection.add(e)
    });
    return anotherCollection    
    
  }
  
  this.intersection = function(another){
    var intersaction = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function(e){
      if(another.has(e)){
        intersaction.add(e)
      }
    });
    return intersaction
  }
  
  this.difference = function (another){
    var difference = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function(e){
      if(!another.has(e)){
        difference.add(e)
      }
    });
    return difference
  }
  
  this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(value) {
          return otherSet.has(value);
        });
    };
}

var seta = new mySet();
var setb = new mySet();

seta.add('1');
seta.add('2');
seta.add('3');
setb.add('1');
setb.add('2');
setb.add('4');
setb.add('5');
setb.add('3');
console.log(seta.subset(setb));
console.log(seta.intersection(setb).values())
console.log(seta.union(setb).values())
console.log(seta.values())
console.log(setb.values())