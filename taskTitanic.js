
// class TitanicRescue {
//   constructor(men, women, children, boatCapacity) {
//     this.men = men;
//     this.women = women;
//     this.children = children;
//     this.boatCapacity = boatCapacity;
//   }

//   canSavePeople() {
//     let men = this.men;
//     let women = this.women;
//     let children = this.children;
//     const boatCapacity = this.boatCapacity;
//     let boatLoad = 0;

//     let savedMen = 0;
//     let savedWomen = 0;
//     let savedChildren = 0;

//     // Condition: Every 2 women -> 1 man -> 4 children
//     while (women >= 2 && men >= 1 && children >= 4 && boatLoad + 7 <= boatCapacity) {
//       boatLoad += 7;
//       women -= 2;
//       men -= 1;
//       children -= 4;
//       savedWomen += 2;
//       savedMen += 1;
//       savedChildren += 4;
//     }

//     // Condition: Every 1 man -> 4 children
//     while (men >= 1 && children >= 4 && boatLoad + 5 <= boatCapacity) {
//       boatLoad += 5;
//       men -= 1;
//       children -= 4;
//       savedMen += 1;
//       savedChildren += 4;
//     }

//     // Condition: Every 1 adult (man or woman) -> 4 children
//     while ((men > 0 || women > 0) && children >= 4 && boatLoad + 5 <= boatCapacity) {
//       if (men > 0) {
//         men -= 1;
//         savedMen += 1;
//       } else if (women > 0) {
//         women -= 1;
//         savedWomen += 1;
//       }
//       children -= 4;
//       savedChildren += 4;
//       boatLoad += 5;
//     }

//     // Check remaining capacity for individual men, women, and children
//     while (men > 0 && boatLoad + 1 <= boatCapacity) {
//       boatLoad += 1;
//       men -= 1;
//       savedMen += 1;
//     }

//     while (women > 0 && boatLoad + 1 <= boatCapacity) {
//       boatLoad += 1;
//       women -= 1;
//       savedWomen += 1;
//     }

//     while (children > 0 && boatLoad + 1 <= boatCapacity) {
//       boatLoad += 1;
//       children -= 1;
//       savedChildren += 1;
//     }

//     return {
//       savedMen,
//       savedWomen,
//       savedChildren,
//       totalSaved: savedMen + savedWomen + savedChildren,
//     };
//   }
// }

// // Define the numbers of people and boat capacity
// const men = 0;
// const women = 4;
// const children = 16;
// const boatCapacity = 30
// ;

// // Create an instance of TitanicRescue
// const rescue = new TitanicRescue(men, women, children, boatCapacity);

// // Calculate the number of people that can be saved
// const result = rescue.canSavePeople();
// console.log(`Number of people that can be saved: ${result.totalSaved}`);
// console.log(`Men: ${result.savedMen}`);
// console.log(`Women: ${result.savedWomen}`);
// console.log(`Children: ${result.savedChildren}`);



// // Initial counts
// let men = 20;
// let women = 4;
// let children = 12;
// const boatCapacity = 20;

// // Initialize counts for the boat
// let Mencount = 0;
// let Womencount = 0;
// let Childrencount = 0;

// // Function to add people to the boat based on the given conditions
// function addGroupToBoat() {
//   if (men >= 1 && women >= 2 && children >= 12) {
//     men -= 1;
//     women -= 2;
//     children -= 12;
//     Mencount += 1;
//     Womencount += 2;
//     Childrencount += 12;
//   }
// }

// // Try to add as many groups as possible to the boat
// while ((Mencount + Womencount + Childrencount) + 15 <= boatCapacity) {
//   addGroupToBoat();
// }

// // Output the result
// console.log(`Men on the boat: ${Mencount}`);
// console.log(`Women on the boat: ${Womencount}`);
// console.log(`Children on the boat: ${Childrencount}`);
// console.log(`Total people on the boat: ${Mencount + Womencount + Childrencount}`);


// class TitanicRescue {
//   constructor(men, women, children, boatCapacity) {
//     this.men = men;
//     this.women = women;
//     this.children = children;
//     this.boatCapacity = boatCapacity;
//   }

//   canSavePeople() {
//     let men = this.men;
//     let women = this.women;
//     let children = this.children;
//     const boatCapacity = this.boatCapacity;
//     let boatLoad = 0;

//     let savedMen = 0;
//     let savedWomen = 0;
//     let savedChildren = 0;

//     // If no men, only women and children should be considered
//     if (men === 0) {
//       // Save women with two children each until we run out of women, children, or space
//       while (women > 0 && children >= 2 && boatLoad + 3 <= boatCapacity) {
//         boatLoad += 3;
//         women -= 1;
//         children -= 2;
//         savedWomen += 1;
//         savedChildren += 2;
//       }
//       // After saving all possible women with children, save remaining children if space allows
//       while (children > 0 && boatLoad + 1 <= boatCapacity) {
//         boatLoad += 1;
//         children -= 1;
//         savedChildren += 1;
//       }
//       return {
//         savedMen,
//         savedWomen,
//         savedChildren,
//         totalSaved: savedMen + savedWomen + savedChildren,
//       };
//     }

//     // Condition: Every 2 women -> 1 man -> 4 children
//     while (women >= 2 && men >= 1 && children >= 4 && boatLoad + 7 <= boatCapacity) {
//       boatLoad += 7;
//       women -= 2;
//       men -= 1;
//       children -= 4;
//       savedWomen += 2;
//       savedMen += 1;
//       savedChildren += 4;
//     }

//     // Condition: Every 1 man -> 4 children
//     while (men >= 1 && children >= 4 && boatLoad + 5 <= boatCapacity) {
//       boatLoad += 5;
//       men -= 1;
//       children -= 4;
//       savedMen += 1;
//       savedChildren += 4;
//     }

//     // Condition: Every 1 adult (man or woman) -> 4 children
//     while ((men > 0 || women > 0) && children >= 4 && boatLoad + 5 <= boatCapacity) {
//       if (men > 0) {
//         men -= 1;
//         savedMen += 1;
//       } else if (women > 0) {
//         women -= 1;
//         savedWomen += 1;
//       }
//       children -= 4;
//       savedChildren += 4;
//       boatLoad += 5;
//     }

//     // Check remaining capacity for individual men, women, and children
//     while (men > 0 && boatLoad + 1 <= boatCapacity) {
//       boatLoad += 1;
//       men -= 1;
//       savedMen += 1;
//     }

//     while (women > 0 && boatLoad + 1 <= boatCapacity) {
//       boatLoad += 1;
//       women -= 1;
//       savedWomen += 1;
//     }

//     while (children > 0 && boatLoad + 1 <= boatCapacity) {
//       boatLoad += 1;
//       children -= 1;
//       savedChildren += 1;
//     }

//     return {
//       savedMen,
//       savedWomen,
//       savedChildren,
//       totalSaved: savedMen + savedWomen + savedChildren,
//     };
//   }
// }

// // Define the numbers of people and boat capacity
// const men = 0;
// const women = 4;
// const children = 16;
// const boatCapacity = 30;

// // Create an instance of TitanicRescue
// const rescue = new TitanicRescue(men, women, children, boatCapacity);

// // Calculate the number of people that can be saved
// const result = rescue.canSavePeople();
// console.log(`Number of people that can be saved: ${result.totalSaved}`);
// console.log(`Men: ${result.savedMen}`);
// console.log(`Women: ${result.savedWomen}`);
// console.log(`Children: ${result.savedChildren}`);

class TitanicRescue {
  canSavePeople(men, women, children, boatCapacity) {
    let boatLoad = 0;
    let savedMen = 0;
    let savedWomen = 0;
    let savedChildren = 0;

    // If no men, only women and children should be considered
    if (men === 0) {
      // Save women with two children each until we run out of women, children, or space
      while (women > 0 && children >= 2 && boatLoad + 3 <= boatCapacity) {
        boatLoad += 3;
        women -= 1;
        children -= 2;
        savedWomen += 1;
        savedChildren += 2;
      }
      // After saving all possible women with children, save remaining children if space allows
      while (children > 0 && boatLoad + 1 <= boatCapacity) {
        boatLoad += 1;
        children -= 1;
        savedChildren += 1;
      }
      return {
        savedMen,
        savedWomen,
        savedChildren,
        totalSaved: savedMen + savedWomen + savedChildren,
      };
    }

    // Condition: Every 2 women -> 1 man -> 4 children
    while (women >= 2 && men >= 1 && children >= 4 && boatLoad + 7 <= boatCapacity) {
      boatLoad += 7;
      women -= 2;
      men -= 1;
      children -= 4;
      savedWomen += 2;
      savedMen += 1;
      savedChildren += 4;
    }

    // Condition: Every 1 man -> 4 children
    while (men >= 1 && children >= 4 && boatLoad + 5 <= boatCapacity) {
      boatLoad += 5;
      men -= 1;
      children -= 4;
      savedMen += 1;
      savedChildren += 4;
    }

    // Condition: Every 1 adult (man or woman) -> 4 children
    while ((men > 0 || women > 0) && children >= 4 && boatLoad + 5 <= boatCapacity) {
      if (men > 0) {
        men -= 1;
        savedMen += 1;
      } else if (women > 0) {
        women -= 1;
        savedWomen += 1;
      }
      children -= 4;
      savedChildren += 4;
      boatLoad += 5;
    }

    // Check remaining capacity for individual men, women, and children
    while (men > 0 && boatLoad + 1 <= boatCapacity) {
      boatLoad += 1;
      men -= 1;
      savedMen += 1;
    }

    while (women > 0 && boatLoad + 1 <= boatCapacity) {
      boatLoad += 1;
      women -= 1;
      savedWomen += 1;
    }

    while (children > 0 && boatLoad + 1 <= boatCapacity) {
      boatLoad += 1;
      children -= 1;
      savedChildren += 1;
    }

    return {
      savedMen,
      savedWomen,
      savedChildren,
      totalSaved: savedMen + savedWomen + savedChildren,
    };
  }
}

// Define the numbers of people and boat capacity
const men = 0;
const women = 4;
const children = 16;
const boatCapacity = 30;

// Create an instance of TitanicRescue
const rescue = new TitanicRescue();

// Calculate the number of people that can be saved
const result = rescue.canSavePeople(men, women, children, boatCapacity);
console.log(`Number of people that can be saved: ${result.totalSaved}`);
console.log(`Men: ${result.savedMen}`);
console.log(`Women: ${result.savedWomen}`);
console.log(`Children: ${result.savedChildren}`);
