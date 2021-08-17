const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const idsArr = [...ids];
  const returnArr = [];

  idsArr.map((id) => species.filter((specie) => {
    if (specie.id === id) {
      returnArr.push(specie);
    }
    return returnArr;
  }));
  return returnArr;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const filteredAnimal = species.filter((specie) => specie.name === animal);

  return filteredAnimal[0].residents.every((anm) => anm.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const empName = employeeName;
  const empArr = employees.filter((emp) => emp.firstName === empName || emp.lastName === empName);
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return empArr[0];
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  // seu código aqui
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

  const empArr = employees.find((emp) => emp.id === id);
  if (empArr.id === stephanieId || empArr.id === olaId || empArr.id === burlId) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specie) {
  // seu código aqui
  if (typeof specie === 'undefined') {
    const speciesQtObj = {};
    species.forEach((animal) => {
      speciesQtObj[animal.name] = animal.residents.length;
    });
    return speciesQtObj;
  }
  const mySpecie = species.find((spec) => spec.name === specie);

  return mySpecie.residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) {
    return 0;
  }

  const pessoasEntrantes = Object.keys(entrants);

  return pessoasEntrantes.reduce((acc, curr) => acc + entrants[curr] * prices[curr], 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
  // consegui ajuda refatorando meu código para atender ao linter através do seguinte link:
  // https://stackoverflow.com/questions/68720622/need-help-reducing-cognitive-complexity-of-a-function-in-js
  const scheduleArr = Object.entries(hours);
  const returnedObj = {};
  const result = {};

  scheduleArr.forEach((day) => {
    returnedObj[day[0]] = (day[1].open === day[1].close)
      ? 'CLOSED'
      : `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
  });

  if (typeof dayName !== 'undefined') {
    result[dayName] = returnedObj[dayName];
    return result;
  }
  return returnedObj;
}
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animalId = employees.find((info) => info.id === id).responsibleFor[0];
  const animalInfo = species.find((iden) => iden.id === animalId);
  const oldData = animalInfo.residents.sort((animalA, animalB) => animalB.age - animalA.age)[0];
  return [oldData.name, oldData.sex, oldData.age];
}

function increasePrices(percentage) {
  // seu código aqui
  const pessoas = Object.keys(prices);
  const myObj = {};

  pessoas.forEach((pessoa) => {
    myObj[pessoa] = Math.ceil(prices[pessoa] * (percentage + 100)) / 100;
  });

  prices.Adult = myObj.Adult;
  prices.Senior = myObj.Senior;
  prices.Child = myObj.Child;
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
