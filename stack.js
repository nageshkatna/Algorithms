//Stack Algorithm
var Stack = function(){
  this.count = 0;
  this.storage={};
  
  //Display stack
  this.peek=function(value){
    return this.storage[this.count-1]
  };
  
  this.add=function(value){
    this.storage[this.count]=value;
    this.count++;
  };
  
  this.delete=function(){
    if(this.count===0){
      return "Empty Stack"
    }
    this.count --;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result    
  } 
  
  this.size = function(){
    return this.count;
  }
  
}

var mystack = new Stack();
mystack.add(5);
mystack.add(6);
console.log(mystack.peek());
mystack.add(7);
mystack.add(8);
console.log(mystack.peek());
mystack.add(9);
console.log(mystack.size()); 
console.log(mystack.peek());
mystack.delete();
console.log(mystack.peek());