var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + " is dancing");
    };
    return Person;
}());
var bran = new Person("Santy");
bran.dance();
var AwesomPerson = /** @class */ (function (_super) {
    __extends(AwesomPerson, _super);
    function AwesomPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwesomPerson.prototype.dance = function () {
        _super.prototype.dance.call(this);
        console.log("SO AWESOME!");
    };
    return AwesomPerson;
}(Person));
var jaz = new AwesomPerson("Jaz");
jaz.dance();
