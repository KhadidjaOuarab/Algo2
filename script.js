let set1 = [1, 2, 3, 5]
let set2 = [8,7,1, 2, 4]

function overlappingFunction(set1, set2) {

    let set = []
    let sum = 0
    let trouv = 0
    for (let i = 0; i < set1.length; i++) {
        for (let j = 0; j < set2.length; j++) {
            if (set1[i] == set2[j]) {
                trouv = 1
            }
        }
        if (trouv == 0) {
            sum = sum + set1[i]
        }
        trouv = 0
    }

    for (let i = 0; i < set2.length; i++) {
        for (let j = 0; j < set1.length; j++) {
            if (set1[j] == set2[i]) {
                trouv = 1
            }
        }
        if (trouv == 0) {
            sum = sum + set2[i]
        }
        trouv = 0
    }

    return sum
}
console.log(overlappingFunction(set1, set2));


//******************************************* */

function overlappingFunction1(set1, set2) {

    let set = []
    let sum = 0
    let trouv = 0
    for (let i = 0; i < set1.length; i++) {
        for (let j = 0; j < set2.length; j++) {
            if (set1[i] == set2[j]) {
                trouv = 1
            }
        }
        if (trouv == 1) {
            sum = sum + set1[i]
        }
        trouv = 0
    }

    for (let i = 0; i < set2.length; i++) {
        for (let j = 0; j < set1.length; j++) {
            if (set1[j] == set2[i]) {
                trouv = 1
            }
        }
        if (trouv == 1) {
            sum = sum + set2[i]
        }
        trouv = 0
    }

    return sum
}
console.log(overlappingFunction1(set1, set2));


