var Stack = function() {
    this.count = 0;
    this.stackObj ={};

    this.push = function(value){
        this.stackObj[this.count] = value;
        this.count++;
    }

    this.pop = function(){
        if(this.count==0) {
        	return undefined;
        }

        this.count--;
        var popped = this.stackObj[this.count];
        
        delete this.stackObj[this.count];
        return popped;
    }

    this.size = function(){
        return this.count;
    }

    this.peek = function(){
        return this.stackObj[this.count-1];
    }
    
    this.stack = function() {
    return this.stackObj;
    }
}

var stk = new Stack();

stk.push(1);
stk.push(2);
stk.push(3);
console.log(stk.peek());
console.log(stk.pop());
console.log(stk.peek());
console.log(stk.size());
stk.push('right');
console.log(stk.stack());