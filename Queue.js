var myQueue = function() {
    var queArr = [];

    this.enqueue = function(val){
        queArr.push(val);
    }

    this.dequeue = function(){
        queArr.shift();
    }

    this.print = function(){
        return queArr;
    }

    this.size = function(){
        return queArr.length;
    }

    this.front = function(){
        return queArr[0];
    }
}

var que1 = new myQueue();
que1.enqueue(1);
que1.enqueue(2);
que1.enqueue(3);
console.log(que1.print());
que1.dequeue();
console.log(que1.print());
console.log(que1.size());
console.log(que1.front());




var myPriorityQueue = function() {
    var queArr = [];

    this.enqueue = function(ele){
        if(queArr.length==0){
            queArr.push(ele);
        } else {
            var added = false;
            for(let i =0;i<queArr.length;i++){
                if(ele[1]<queArr[i][1]){
                    queArr.splice(i,0,ele);
                    added=true;
                    break;
                }
            }
            if(!added){
                queArr.push(ele);
            }
        }
    }

    this.dequeue = function(){
        var value = queArr.shift();
        return value[0];
    }

    this.print = function(){
        return queArr;
    }

    this.size = function(){
        return queArr.length;
    }

    this.front = function(){
        return queArr[0];
    }
}

var que2 = new myPriorityQueue();
que2.enqueue(['A',1]);
que2.enqueue(['B',2]);
que2.enqueue(['C',3]);
que2.enqueue(['D',2]);
que2.enqueue(['D',1]);
console.log(que2.print());
que2.dequeue();
console.log(que2.print());
console.log(que2.size());
console.log(que2.front());