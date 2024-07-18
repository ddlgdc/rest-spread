// All answers in ES2015 version 

//filterOutOdds
const filterOutOdds = (...nums) => {
    return nums.filter(num => num % 2 === 0);
}

//findMin
const findMin = (...nums) => {
    return Math.min(...nums);
}

//mergeObjects
const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
} 

// doubledAndAReturnArgs
const doubleAndReturnArgs = (arr, ...nums) => {
    const doubledNums = nums.map(num => {
        num * 2;
        return [...arr, ...doubledNums];
    });
};

// Slice and dice 
const removeRandom = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);

    return [
        ...items.slice(0, randomIndex),
        ...items.slice(randomIndex + 1)
    ];
};

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => {
    return {...obj, [key]: val};
}

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

const update = (obj, key, val) => {
    return {...obj, [key]: val};
}