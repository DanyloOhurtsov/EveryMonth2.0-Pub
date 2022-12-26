// ____________________________________________________________________________________________________________________ LET's
    // SELECT COURSE
    let selectorCur = document.querySelector('#selectSourse');
    let courseNowText = document.querySelector('#currencyNow');
    let arr = {};
    let ValueCur = 0;

    // ARRAY's
    let inputItemNote = document.querySelectorAll('.inputItem');
    let inputItemArr = Array.prototype.slice.call(inputItemNote);
    console.log(inputItemArr)
    // LET's values
    let = coldWater = 0,
            coldWater1 = 0,
            hotWater = 0,
            hotWater1 = 0,
            hotWater2 = 0,
            hotWater3 = 0,
            hotWater4 = 0,
            // SUBSCRIBE
            sub1 = 0,
            sub2 = 0,
            sub3 = 0,
            sub4 = 0,
            sub5 = 0,
            // INTERNET
            ele = 0,
            internet1 = 0,
            internet2 = 0,
            // PARKING
            parking1 = 0,
            parking2 = 0,
            parking3 = 0;

    // RESULTS
        // WATER
        let waterResultText = document.querySelector('.waterResultText');
        let waterResultValue = 0;
        // INTERNET
        let internetResultText = document.querySelector('.internetResultText');
        let internetResultValue = 0;
        // SUBSCRIBE
        let subResultTextUSD = document.querySelector('.subResultTextUSD');
        let subResultTextUAH = document.querySelector('.subResultTextUAH');
        let subResultValueUSD = 0;
        let subResultValueUAH = 0;
        // PARKING
        let parkingResultText = document.querySelector('.parkingResultText');
        let parkingResultValue = 0;
        // TOTAL
        let totalResultText = document.querySelector('.totalResultText');
        let totalResultValue = 0;
// ____________________________________________________________________________________________________________________ FUNCTION's
    // CHANGING VALUE
    function changeValue(){
        // WATER
        coldWater = Number(inputItemArr[0].value)
        coldWater1 = Number(inputItemArr[1].value)
        hotWater = Number(inputItemArr[2].value)
        hotWater1 = Number(inputItemArr[3].value)
        hotWater2 = Number(inputItemArr[4].value)
        hotWater3 = Number(inputItemArr[5].value)
        hotWater4 = Number(inputItemArr[6].value)
        // ELECTRICITY
        ele = Number(inputItemArr[12].value)
        internet1 = Number(inputItemArr[13].value)
        internet2 = Number(inputItemArr[14].value)
        // SUBSCRIPTION
        sub1 = Number(inputItemArr[7].value)
        sub2 = Number(inputItemArr[8].value)
        sub3 = Number(inputItemArr[9].value)
        sub4 = Number(inputItemArr[10].value)
        sub5 = Number(inputItemArr[11].value)
        // PARKING
        parking1 = Number(inputItemArr[15].value)
        parking2 = Number(inputItemArr[16].value)
        parking3 = Number(inputItemArr[17].value)
    }
    // SUMMING VALUE
    function sum(){
        // WATER
        waterResultValue = coldWater+coldWater1+hotWater+hotWater1+hotWater2+hotWater3+hotWater4;
        console.log(waterResultValue);
        waterResultText.innerText = waterResultValue.toLocaleString('ru-RU')
        // INTERNET
        internetResultValue = ele+internet1+internet2;
        console.log(internetResultValue);
        internetResultText.innerText = internetResultValue.toLocaleString('ru-RU')
        // SUBSCRIBE
        subResultValueUSD = sub1+sub2+sub3+sub4+sub5;
        console.log(subResultValueUSD);
        subResultTextUSD.innerText = subResultValueUSD.toLocaleString('ru-RU')
        // PARKING
        parkingResultValue = parking1+parking2+parking3;
        console.log(parkingResultValue);
        parkingResultText.innerText = parkingResultValue.toLocaleString('ru-RU')
        // TOTAL
        totalResultValue = waterResultValue+internetResultValue+subResultValueUAH+parkingResultValue
        console.log(totalResultValue)
        totalResultText.innerHTML = totalResultValue.toLocaleString('ru-RU')
    }
    // GET COURSE
    async function getCourse(){
        if(selectorCur.value == 'NBU'){
            let resNBU = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
            let data = await resNBU.json();
            let result = await data;
            arr.USD = result[25];
            ValueCur = arr.USD.rate;
            courseNowText.value = ValueCur;
            console.log(ValueCur);
        }
        if(selectorCur.value == 'MONO'){
            let resMono = await fetch('https://api.monobank.ua/bank/currency');
            let data = await resMono.json();
            let result = await data;
            arr.USD = result[0];
            ValueCur = arr.USD.rateSell;
            courseNowText.value = ValueCur;
            console.log(ValueCur);
        }
        if(selectorCur.value == 'PRIVAT'){
            let resNBU = await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
            let data = await resNBU.json();
            let result = await data;
            arr.USD = result[0];
            ValueCur = arr.USD.sale;
            courseNowText.value = ValueCur;
            console.log(ValueCur);
        }
    }
    
    // ____________________________________________________________________________________________________________________ DOING FUNCTION's
    getCourse();
    changeValue();
    sum()
    inputItemNote.forEach(item => {
        item.addEventListener('click', event => {
            item.select();
        })
        item.addEventListener('input', event => {
            changeValue();
            sum();
        })
    })
    selectorCur.addEventListener('change', function(){
        getCourse();
    })
