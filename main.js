// Your code here.

function getFirstName(obj){
  return obj.firstName
}

function getLastName(obj){
  return obj.lastName
}

function getFullName(obj){
  return `${obj.firstName} ${obj.lastName}`
}

function setFirstName(obj, name){
  obj.firstName = name
  return obj
}

function setAge(obj, age){
  obj.age = age
  return obj
}

function giveBirthday(obj){
  obj.age ? obj.age += 1 : obj.age = 1
  return obj
}

function marry(p1, p2){
  p1.married = true
  p2.married = true
  p1.spouseName = `${p2.firstName} ${p2.lastName}`
  p2.spouseName = `${p1.firstName} ${p1.lastName}`
  return p1, p2
}

function divorce(p1, p2){
  p1.married = false
  p2.married = false
  delete p1.spouseName
  delete p2.spouseName
  return p1, p2
}


// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
