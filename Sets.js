var mySet = function () {
  var setArr = [];

  this.has = function (val) {
    if (setArr.indexOf(val) !== -1) {
      return true;
    }
    return false;
  };

  this.add = function (val) {
    if (this.has(val)) {
      return false;
    }

    setArr.push(val);
    return true;
  };

  this.remove = function (value) {
    if (this.has(value)) {
      var index = setArr.indexOf(value);
      setArr.splice(index, 1);
      return setArr;
    }
    return false;
  };

  this.size = function () {
    return setArr.length;
  };

  this.values = function () {
    return setArr;
  };

  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var otherSetVals = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    otherSetVals.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  this.intersection = function (otherSet) {
    var intSet = new mySet();
    var firstSet = this.values();

    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intSet.add(e);
      }
    });
    return intSet;
  };

  this.difference = function (otherSet) {
    var diffSet = new mySet();
    var firstSet = this.values();

    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        diffSet.add(e);
      }
    });
    return diffSet;
  };

  this.subset = function (otherSet) {
    var firstSet = this.values();

    return firstSet.every(function (e) {
      return otherSet.has(e);
    });
  };
};

var set1 = new mySet();

set1.add(1);
set1.add(2);
set1.add(3);
console.log(set1.has(4));
console.log(set1.values());
set1.remove(2);
set1.remove(1);
console.log(set1.size());

console.log(set1.values());

var set2 = new mySet();
set2.add("a");
set2.add(2);
set2.add(3);
set2.remove(3);
console.log(set1.union(set2).values());

console.log(set1.subset(set2));

console.log(set1.difference(set2).values());
console.log(set2.difference(set1).values());
console.log(set2.intersection(set1).values());
