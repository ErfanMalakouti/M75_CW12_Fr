class Person {
  constructor(
    firstName,
    family,
    birthday,
    phoneNumber,
    nationalId,
    gender,
    address,
    email
  ) {
    this.firstName = firstName;
    this.family = family;
    this.birthday = birthday;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.nationalId = nationalId;
    this.gender = gender;
    this.email = email;
  }
  /*firstName */
  set firstName(str) {
    if (str.length >= 2 && str.length <= 12) {
      this._firstName = str;
    } else {
      console.log("firstName is not valid");
      this._firstName = "";
    }
  }
  get firstName() {
    return this._firstName;
  }
  /*family */
  set family(str) {
    if (str.length >= 6 && str.length <= 15) {
      this._family = str;
    } else {
      console.log("family is not valid");
      this._family = "";
    }
  }
  get family() {
    return this._family;
  }
  /*phoneNumber*/
  set phoneNumber(str) {
    if (str.length === 11 && str[0] === "0" && str[1] === "0") {
      this._phoneNumber = str;
    } else {
      console.log("phoneNumber must 11 digit and it include 09");
      this._nationalId = "";
    }
  }
  get phoneNumber() {
    return this._phoneNumber;
  }
  /*nationalId */
  set nationalId(str) {
    if (str.length === 10) {
      this._nationalId = str;
    } else {
      console.log("nationalId must 10 digit");
      this._nationalId = "";
    }
  }
  get nationalId() {
    return this._nationalId;
  }
  /*gender */
  set gender(str) {
    if (str === "male" || str === "female") {
      this._gender = str;
    } else {
      console.log("gender is not valid");
      this._gender = "";
    }
  }
  get gender() {
    return this._gender;
  }
  /*address */
  set address(str) {
    let temp = str.split("&").join(",").split("=").join(",").split(",");
    let result = {};
    for (let key in temp) {
      if (key % 2 !== 0) {
        result[temp[key - 1]] = temp[key];
      }
    }
    this._address = result;
  }
  get address() {
    return this._address;
  }
  /*email */
  set email(str) {
    if (str.includes("@")) {
      this._email = str;
    } else {
      console.log("email is not valid");
      this._email = "";
    }
  }
}
let person1 = new Person(
  "mehran",
  "khalili",
  "a",
  "a",
  "a",
  "b",
  "Country=Iran&State=Isfahan&City=Isfahan&Alley=ShahidRajaee&Block=3",
  "d"
);
person1.firstName = "mehdasdxzcv";
console.log(person1);

class Student extends Person {
  constructor(
    firstName,
    family,
    birthday,
    phoneNumber,
    nationalId,
    gender,
    address,
    email,
    grade,
    fathersName,
    fatherPhoneNumber,
    schoolName,
    classNumber,
    teacherName
  ) {
    super(
      firstName,
      family,
      birthday,
      phoneNumber,
      nationalId,
      gender,
      address,
      email
    );
    this.grade = grade;
    this.fathersName = fathersName;
    this.fatherPhoneNumber = fatherPhoneNumber;
    this.schoolName = schoolName;
    this.classNumber = classNumber;
    this.teacherName = teacherName;
  }
  set age(birthday) {
    let todayYear = birthday.getFullYear();
    let age2 = todayYear - this.birthday.getFullYear();
    if (age2 > 2 && age2 < 19) {
      this._age = age2;
    } else {
      console.log("age is not valid");
      this._age = "";
    }
  }
  get age() {
    return this._age;
  }
}
let student1 = new Student(
  "mehran",
  "khalili",
  new Date(2012, 9, 20),
  "09120000000",
  "1234640212",
  "male",
  "Country=Iran&State=Isfahan&City=Isfahan&Alley=ShahidRajaee&Block=3",
  "me.dr@gamil.com",
  23,
  "sohrab",
  "09190000000",
  "ahmaghha",
  3,
  "kokabi"
);
console.log(student1);
