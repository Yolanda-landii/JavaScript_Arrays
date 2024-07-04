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
const developerNames = developers.map(function(developer){
  return developer.name;
});
console.log(developerNames);

//Total number of phones all developers have
const totalPhones = developers.reduce(function(holder, developer){
  return holder + developer.phones.length;

}, 0); 
console.log("Total phones:", totalPhones);

//Number of incomplete setups
const incompleteSetups = developers.filter(function(developer){
  return developer.computerSetups.some(function(setup){
    return setup.monitors === 0 || setup.keyboards === 0 || setup.mice === 0 || setup.speakers === 0;
  })
}).length;
console.log("Number of incomplete setups:", incompleteSetups);

//Most trusted phone brand
 const AllPhones = developers.flatMap(function(developer){
  return developer.phones;
 });
 const countBrandPhones = AllPhones.reduce(function(holder, phone){

  function countPhone(holder, phone) {
    holder[phone] = (holder[phone] || 0) + 1;
  }
  
  countPhone(holder, phone);
  return holder;
}, {});
const mostTrustedPhoneBrand = Object.keys(countBrandPhones).reduce(function(a, b){
  return  countBrandPhones[a] > countBrandPhones[b] ? a : b;
}
);

// Print out the most trusted phone brand
console.log("Most trusted phone brand:", mostTrustedPhoneBrand);

//

//Number of people who do not have a phone
const noPhoneCount = developers.filter(function(developer){
  return developer.phones.length === 0;
}).length;
console.log("Number of people without a phone:", noPhoneCount);


// Number of people who do not have a laptop
const noLaptopCount = developers.filter(function(developer){
  return developer.laptops.length === 0;
}).length;
console.log("Number of people without a laptop:", noLaptopCount);


//Number of people who do not have a computer setup (desktop)
const noComputerSetupCount = developers.filter(function(developer){
  return developer.computerSetups.length === 0;
}).length;

console.log("Number of people without a computer setup:", noComputerSetupCount);

//Developer with the most total gadgets
const gadgetsCounts = developers.map(function(developer){
  return {
    name: developer.name,
    totalGadgets: developer.laptops.length + developer.phones.length + developer.computerSetups.length
  }
});

//Check which developer has the most total gadgets. In your answer provide the name as well as all the gadgets they have.
const mostGadgetsDeveloper = gadgetsCounts.reduce(function(a, b){
  return a.totalGadgets > b.totalGadgets? a : b;
});
console.log("Developer with the most gadgets:", mostGadgetsDeveloper.name, "with", mostGadgetsDeveloper.totalGadgets, "gadgets");


//Developer with the most phones
const phonesCounts = developers.map(function(developer){
  return {
    name: developer.name,
    phoneCount: developer.phones.length
  }
});

const mostPhonesDeveloper = phonesCounts.reduce(function(a, b){
  return a.phoneCount > b.phoneCount? a : b;
});
console.log("Developer with the most phones:", mostPhonesDeveloper.name, "with", mostPhonesDeveloper.phoneCount, "phones");


//Developer with the most computer setups
const setupsCounts = developers.map(function(developer){
  return {
    name: developer.name,
    setupsCount: developer.computerSetups.length
  }
});

const mostSetupsDeveloper = setupsCounts.reduce(function(a, b){
  return (a.setupsCount > b.setupsCount) ? a : b;
});
console.log("Developer with the most computer setups:", mostSetupsDeveloper.name, "with", mostSetupsDeveloper.setupsCount, "setups");

//Developer with the most monitors (combining all setups)
const monitorCounts = developers.map(function(developer){
  return {
    name: developer.name,
    totalMonitors: developer.computerSetups.reduce(function(acc, setup){
      return acc + setup.monitors;
    }, 0)
  }
});

const mostMonitorsDeveloper = monitorCounts.reduce(function(a, b) {
  return (a.totalMonitors > b.totalMonitors) ? a : b;
});
console.log("Developer with the most monitors:", mostMonitorsDeveloper.name, "with", mostMonitorsDeveloper.totalMonitors, "monitors");
