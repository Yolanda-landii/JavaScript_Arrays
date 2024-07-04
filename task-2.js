const developers = [
  {
    name: "Vee",
    laptops: [
      "Dell"
    ],
    phones: [
      "Samsung",
      "Xiaomi"
    ],
    computerSetups: [
      {
        brand: "Lenovo",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  },
  {
    name: "Katlego",
    laptops: [
      "HP",
      "Samsung"
    ],
    phones: [
      "Apple",
      "Samsung",
      "Tecno",
      "Samsung"
    ],
    computerSetups: [
      {
        brand: "Lenovo",
        monitors: 2,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  },
  {
    name: "Rethabile",
    laptops: [
      "Samsung"
    ],
    phones: [
      "Samsung",
      "Huawei",
      "Poco"
    ],
    computerSetups: [
      {
        brand: "Asus",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }, 
      {
        brand: "Acer",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }
    ]
  },
  {
    name: "Gift",
    laptops: [],
    phones: [
      "Samsung"
    ],
    computerSetups: [
      {
        brand: "Acer",
        monitors: 3,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "HP",
        monitors: 2,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }
    ]
  },
  {
    name: "Thokozile",
    laptops: [
      "Lenovo"
    ],
    phones: [
      "Apple"
    ],
    computerSetups: [
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "Asus",
        monitors: 1,
        keyboards: 0,
        mice: 1,
        speakers: 1
      }, 
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  }
]

//Array with just the names of all the developers
function getDevNames(developers) {
  return developers.map(function(developer){
    return developer.name;
  });
}
const developerNames = getDevNames(developers);
console.log(developerNames);

//Total number of phones all developers have
function getNumberOfPhones(developers){
  return developers.reduce(function(holder, developer) {
    return holder + developer.phones.length;
  }, 0);
}
const totalPhones = getNumberOfPhones(developers);
console.log("Total phones:", totalPhones);

//Number of incomplete setups
function getSetUp(developers){
  return developers.filter(function(developer){
    return developer.computerSetups.some(function(setup){
      return setup.monitors === 0 || setup.keyboards === 0 || setup.mice === 0 || setup.speakers === 0;
    })
  }).length;
}
const incompleteSetups = getSetUp(developers)
console.log("Number of incomplete setups:", incompleteSetups);

//Most trusted phone brand
// Define a function to find the most trusted phone brand
function getMostTrustedPhoneBrand(developers) {
  // Flatten all phones into a single array
  const allPhones = developers.flatMap(function(developer) {
    return developer.phones;
  });



  // Count occurrences of each phone brand
  const countBrandPhones = allPhones.reduce(function(holder, phone) {
    holder[phone] = (holder[phone] || 0) + 1;
    return holder;
  }, {});



  // Find the brand with the highest count
  const mostTrustedPhoneBrand = Object.keys(countBrandPhones).reduce(function(a, b) {
    return countBrandPhones[a] > countBrandPhones[b] ? a : b;
  });

  return mostTrustedPhoneBrand;

}


// Call the function to get the most trusted phone brand
const mostTrustedPhoneBrand = getMostTrustedPhoneBrand(developers);
console.log("Most trusted phone brand:", mostTrustedPhoneBrand);

// Check what phone brand is least trusted
function getLeastTrustedPhoneBrand(developers) {
  
  const allPhones = developers.flatMap(function(developer) {
    return developer.phones;
  });

  // Count occurrences of each phone brand
  const countBrandPhones = allPhones.reduce(function(holder, phone) {
    holder[phone] = (holder[phone] || 0) + 1;
    return holder;
  }, {});

  const leastTrustedPhoneBrand = Object.keys(countBrandPhones).reduce(function(a, b) {
    return countBrandPhones[a] < countBrandPhones[b]? a : b;
  });
  return leastTrustedPhoneBrand;
}
const leastTrustedPhoneBrand = getLeastTrustedPhoneBrand(developers)
console.log("Least trusted phone brand:", leastTrustedPhoneBrand);


//Number of people who do not have a phone
function getDevWithNoPhones(developers) {
  return developers.filter(function(developer){
    return developer.phones.length === 0;
  }).length;
}
const noPhoneCount = getDevWithNoPhones(developers);
console.log("Number of people without a phone:", noPhoneCount);


// Number of people who do not have a laptop
function getDevWithNoLaptops(developers){
  return developers.filter(function(developer){
    return developer.laptops.length === 0;
  }).length;
}
const noLaptopCount = getDevWithNoLaptops(developers);
console.log("Number of people without a laptop:", noLaptopCount);


//Number of people who do not have a computer setup (desktop)
function getDevWithNoComputerSetups(developers){
  return developers.filter(function(developer){
    return developer.computerSetups.length === 0;
  }).length;
}
const noComputerSetupCount = getDevWithNoComputerSetups(developers);

console.log("Number of people without a computer setup:", noComputerSetupCount);

//Developer with the most total gadgets
function getDevWithNoGadgets(developers){
  const gadgetsCounts = developers.map(function(developer) {
    return {
      name: developer.name,
      totalGadgets: developer.laptops.length + developer.phones.length + developer.computerSetups.length
    };
  });

  // Find developer with the most gadgets using reduce
  const mostGadgetsDeveloper = gadgetsCounts.reduce(function(a, b) {
    return a.totalGadgets > b.totalGadgets ? a : b;
  });

  return mostGadgetsDeveloper;
}

const mostGadgetsDeveloper = getDevWithNoGadgets(developers);
console.log("Developer with the most gadgets:", mostGadgetsDeveloper.name, "with", mostGadgetsDeveloper.totalGadgets, "gadgets");


//Developer with the most phones
function getmostPhones(developers) {
  const phonesCounts = developers.map(function(developer){
    return {
      name: developer.name,
      phoneCount: developer.phones.length
    }
  });
  const mostPhonesDeveloper = phonesCounts.reduce(function(a, b){
    return a.phoneCount > b.phoneCount? a : b;
  });
  return mostPhonesDeveloper;
}


const mostPhonesDeveloper = getmostPhones(developers);
console.log("Developer with the most phones:", mostPhonesDeveloper.name, "with", mostPhonesDeveloper.phoneCount, "phones");


//Developer with the most computer setups
function getMostSetups(developers){
  const setupsCounts = developers.map(function(developer){
    return {
      name: developer.name,
      setupsCount: developer.computerSetups.length
    }
  });

  const mostSetupsDeveloper = setupsCounts.reduce(function(a, b){
    return (a.setupsCount > b.setupsCount) ? a : b;
  });
  return mostSetupsDeveloper;
}
const mostSetupsDeveloper = getMostSetups(developers);
console.log("Developer with the most computer setups:", mostSetupsDeveloper.name, "with", mostSetupsDeveloper.setupsCount, "setups");

//Developer with the most monitors (combining all setups)
function getMostMonitors(developers){
  const monitorCounts = developers.map(function(developer){
    return {
      name: developer.name,
      totalMonitors: developer.computerSetups.reduce(function(holder, setup){
        return holder + setup.monitors;
      }, 0)
    }
  });

  const mostMonitorsDeveloper = monitorCounts.reduce(function(a, b) {
    return (a.totalMonitors > b.totalMonitors) ? a : b;
  });
  return mostMonitorsDeveloper;
}
const mostMonitorsDeveloper = getMostMonitors(developers)

console.log("Developer with the most monitors:", mostMonitorsDeveloper.name, "with", mostMonitorsDeveloper.totalMonitors, "monitors");
