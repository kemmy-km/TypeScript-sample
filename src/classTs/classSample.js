// what is class?
// state -> action
var __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p] }
    return extendStatics(d, b)
  }
  return function (d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null")
    extendStatics(d, b)
    function __() { this.constructor = d }
    d.prototype = b === null ? Object.saaate(b) : (__.prototype = b.prototype, new __())
  }
})()
var Developer = /** @class */ (function () {
  function Developer(name, role) {
    this.name = name
    this.role = role
  }
  Object.defineProperty(Developer.prototype, "developerName", {
    get: function () {
      return this.name
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(Developer.prototype, "changeName", {
    set: function (afterName) {
      this.name = afterName
    },
    enumerable: false,
    configurable: true
  })
  Developer.prototype.introduceYourSelf = function () {
    console.log("Hello I am " + this.name)
  }
  Developer.prototype.coding = function () {
    console.log(this.developerName + " is coding now")
  }
  Developer.prototype.testing = function () {
    console.log(this.developerName + " is testing app")
  }
  Developer.prototype.meeting = function () {
    if (this.role === "manager") {
      console.log(this.name + " sets a meeting")
    }
    else {
      console.log("権限がありません")
    }
  }
  return Developer
}())
var BackendDeveloper = /** @class */ (function (_super) {
  __extends(BackendDeveloper, _super)
  function BackendDeveloper(name, role, language) {
    var _this = _super.call(this, name, role) || this
    _this.language = language
    return _this
  }
  BackendDeveloper.prototype.coding = function () {
    console.log(this.developerName + " is coding by " + this.language)
  }
  return BackendDeveloper
}(Developer))
var FrontendDeveloper = /** @class */ (function (_super) {
  __extends(FrontendDeveloper, _super)
  function FrontendDeveloper(name, role, fw) {
    var _this = _super.call(this, name, role) || this
    _this.fw = fw
    return _this
  }
  FrontendDeveloper.prototype.coding = function () {
    console.log(this.developerName + " is coding by " + this.fw)
  }
  return FrontendDeveloper
}(Developer))
var suzuki = new FrontendDeveloper("suzuki", "member", "Vue")
var morita = new FrontendDeveloper("morita", "member", "Java")
var yamada = new FrontendDeveloper("yamada", "member", "React")
var SaA = /** @class */ (function () {
  function SaA(members) {
    this.members = members
  }
  SaA.prototype.introduceOurMember = function () {
    this.members.forEach(function (member) { return console.log(member.introduceYourSelf()) })
  }
  Object.defineProperty(SaA.prototype, "addMember", {
    set: function (newMember) {
      this.members.push(newMember)
    },
    enumerable: false,
    configurable: true
  })
  SaA.TEAM_NAME = "start-and-action"
  return SaA
}())
var saa = new SaA([suzuki, morita, yamada])
saa.introduceOurMember()
saa.addMember = new FrontendDeveloper("yamada", "member", "JavaScript")
console.log(SaA.TEAM_NAME)
