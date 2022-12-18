let inputItemNote = document.querySelectorAll('.inputItem');
let inputItemArr = Array.prototype.slice.call(inputItemNote);

// CHANGE VALUE FUNCTION _____________________________________________________________________________________________________________________________________
let coldWater = 0,
    coldWater1 = 0,
    hotWater = 0,
    hotWater1 = 0,
    hotWater2 = 0,
    hotWater3 = 0,
    hotWater4 = 0,
    sub1 = 0,
    sub2 = 0,
    sub3 = 0,
    sub4 = 0,
    sub5 = 0,
    ele = 0,
    internet1 = 0,
    internet2 = 0,
    parking1 = 0,
    parking2 = 0,
    parking3 = 0;
function changeValue(){
    // WATER
    coldWater = Number(inputItemArr[0].value)
    coldWater1 = Number(inputItemArr[1].value)
    hotWater = Number(inputItemArr[2].value)
    hotWater1 = Number(inputItemArr[3].value)
    hotWater2 = Number(inputItemArr[4].value)
    hotWater3 = Number(inputItemArr[5].value)
    hotWater4 = Number(inputItemArr[6].value)
    // SUBSCRIPTION
    sub1 = Number(inputItemArr[7].value)
    sub2 = Number(inputItemArr[8].value)
    sub3 = Number(inputItemArr[9].value)
    sub4 = Number(inputItemArr[10].value)
    sub5 = Number(inputItemArr[11].value)
    // ELECTRICITY
    ele = Number(inputItemArr[12].value)
    internet1 = Number(inputItemArr[13].value)
    internet2 = Number(inputItemArr[14].value)
    // PARKING
    parking1 = Number(inputItemArr[15].value)
    parking2 = Number(inputItemArr[16].value)
    parking3 = Number(inputItemArr[17].value)
}
// GET COURSE

// FOR ... in _____________________________________________________________________________________________________________________________________
inputItemNote.forEach(item => {
    item.addEventListener('input', event => {
        console.log(item.value)
    })
})
