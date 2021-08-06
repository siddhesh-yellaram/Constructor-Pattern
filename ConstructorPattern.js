function Customer(id, name) {
    var _id, _name;

    if (id > 0) {
        _id = id;
    }

    if (name.length > 0) {
        _name = name;
    }

    this.foo = "I am a foo variable...";

    this.setName = function (name) {
        if (name.length > 0) {
            _name = name;
        }
    }

    this.getName = function () {
        return _name;
    }

    this.getId = function () {
        return _id;
    }
}


var cust1 = new Customer(202, "abc");
console.log({ cust1 });
cust1.setName("Sid");
console.log(cust1.getName());
console.log(cust1.foo);
console.log(cust1.getId());
console.log({ cust1 });