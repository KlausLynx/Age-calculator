const enter = document.getElementById('arrow');
const inputs = document.getElementsByTagName('input');
const box = document.getElementById('remain');
const text = document.getElementById('text');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const inputDay = document.getElementById('day');
const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');
const errorNote = document.getElementById('errorNote');
const errorNote1 = document.getElementById('errorNote1');
const errorNote2 = document.getElementById('errorNote2');

const d = new Date();
const currentDay = (dy) => {
    return dy.getDate()
}
console.log(currentDay(d))

function validateDay() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    if (day.length === 0) {
        errorNote.style.display = 'flex';
        box.style.marginTop = '0';
        text.style.color = '#ff5757';
        inputDay.style.borderColor = '#ff5757';
        return false
    }
    if(day > 29 && month == 2) {
        document.getElementById('errorNote').textContent = 'Must be a valid day';
        document.getElementById('demo1').textContent = '- -';
        document.getElementById('demo').textContent = '- -';
        errorNote.style.display = 'flex';
        box.style.marginTop = '0';
        text.style.color = '#ff5757';
        inputDay.style.borderColor = '#ff5757';
        return false
    }
    if(day > 30 && month == 4 || day > 30 && month == 6 || day > 30 && month == 9 || day > 30 && month == 11) {
        document.getElementById('errorNote').textContent = 'Must be a valid day'
        document.getElementById('demo1').textContent = '- -';
        document.getElementById('demo').textContent = '- -';
        errorNote.style.display = 'flex';
        box.style.marginTop = '0';
        text.style.color = '#ff5757';
        inputDay.style.borderColor = '#ff5757';
        return false
    }
    if(day > 31) {
        document.getElementById('errorNote').textContent = 'Must be a valid day'
        document.getElementById('demo1').textContent = '- -';
        document.getElementById('demo').textContent = '- -';
        errorNote.style.display = 'flex';
        box.style.marginTop = '0';
        text.style.color = '#ff5757';
        inputDay.style.borderColor = '#ff5757';
        return false
    }
    if (!day.match(/^\d{1,2}$/)) {
        document.getElementById('errorNote').textContent = 'Must be a valid day'
        document.getElementById('demo1').textContent = '- -';
        document.getElementById('demo').textContent = '- -';
        errorNote.style.display = 'flex';
        box.style.marginTop = '0';
        text.style.color = '#ff5757';
        inputDay.style.borderColor = '#ff5757';
        return false
    }
    if (day <= currentDay(d)) {
        document.getElementById('demo2').textContent = currentDay(d) - day ;
        if(currentDay(d) - day <= 1) {
            document.getElementById('demo2').textContent = currentDay(d) - day;
            document.getElementById('demo2a').textContent = 'day';
        }
        return false
    }
    if (day > currentDay(d)) {
        document.getElementById('demo2').textContent = day -  currentDay(d);
        if(day -  currentDay(d) <= 1) {
            document.getElementById('demo2').textContent = day -  currentDay(d);
            document.getElementById('demo2a').textContent = 'day';
        }
        return false
    }
    return true
}

const m = new Date();
const currentMonth = (mnth) => {
    return mnth.getMonth() + 1
}
console.log(currentMonth(m))

function validateMonth() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    if (month.length === 0) {
        errorNote1.style.display = 'flex';
        box.style.marginTop = '0';
        text1.style.color = '#ff5757';
        inputMonth.style.borderColor = '#ff5757';
        return false
    }
    if(month > 12) {
        document.getElementById('errorNote1').textContent = 'Must be a valid month'
        document.getElementById('demo2').textContent = '- -';
        document.getElementById('demo').textContent = '- -';
        errorNote1.style.display = 'flex';
        box.style.marginTop = '0';
        text1.style.color = '#ff5757';
        inputMonth.style.borderColor = '#ff5757';
        return false
    }
    if(day > 31) {
        document.getElementById('errorNote').textContent = 'Must be a valid day'
        document.getElementById('demo1').textContent = '- -';
        document.getElementById('demo').textContent = '- -';
        return false
    }
    if(day > 29 && month == 2) {
        document.getElementById('errorNote').textContent = 'Must be a valid day';
        document.getElementById('demo1').textContent = '- -';
        document.getElementById('demo').textContent = '- -';
        return false
    }
    if(day > 30 && month == 4 || day > 30 && month == 6 || day > 30 && month == 9 || day > 30 && month == 11) {
        document.getElementById('errorNote').textContent = 'Must be a valid day'
        document.getElementById('demo1').textContent = '- -';
        document.getElementById('demo').textContent = '- -';
        return false
    }
    if (!month.match(/^\d{1,}$/)) {
        document.getElementById('errorNote').textContent = 'Must be a valid day';
        document.getElementById('demo1').textContent = '- -';
        document.getElementById('demo').textContent = '- -';
        return false
    }
    if(month >= currentMonth(m)) {
        document.getElementById('demo1').textContent = (month - 12) + currentMonth(m);
        if((month - 12) + currentMonth(m) >= 1) {
            document.getElementById('demo1').textContent = (month - 12) + currentMonth(m);
            document.getElementById('demo1a').textContent = 'months';
        }
        if((month - 12) + currentMonth(m) <= 1) {
            document.getElementById('demo1').textContent = (month - 12) + currentMonth(m);
            document.getElementById('demo1a').textContent = 'month';
        }
        return false
    }
    if(currentMonth(m) >= month) {
        document.getElementById('demo1').textContent = currentMonth(m) - month;
        if(currentMonth(m) - month <= 1) {
            document.getElementById('demo1').textContent = currentMonth(m) - month;
            document.getElementById('demo1a').textContent = 'month';
        }
        return false
    }
    return true
}

const e = new Date();
const currentYear = (yrs) => {
    return yrs.getFullYear()
}
console.log(currentYear(e))

function validateYear() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    if (year.length === 0) {
        errorNote2.style.display = 'flex';
        box.style.marginTop = '0';
        text2.style.color = '#ff5757';
        inputYear.style.borderColor = '#ff5757';
        return false
    }
    if (!year.match(/^\d{4}$/)) {
        document.getElementById('errorNote2').textContent = 'Must be a valid year';
        document.getElementById('demo1').textContent = '- -';
        document.getElementById('demo2').textContent = '- -';
        errorNote2.style.display = 'flex';
        box.style.marginTop = '0';
        text2.style.color = '#ff5757';
        inputYear.style.borderColor = '#ff5757';
        return false
    }
    if(month > 12) {
        document.getElementById('demo2').textContent = '- -';
        document.getElementById('demo').textContent = '- -';
        errorNote1.style.display = 'flex';
        box.style.marginTop = '0';
        text1.style.color = '#ff5757';
        inputMonth.style.borderColor = '#ff5757';
        return false
    }
    if(year > currentYear(e)) {
        document.getElementById('errorNote2').textContent = 'Must be a year in the past';
        document.getElementById('demo1').textContent = '- -';
        document.getElementById('demo2').textContent = '- -';
        document.getElementById('demo').textContent = '- -';
        errorNote2.style.display = 'flex';
        box.style.marginTop = '0';
        text2.style.color = '#ff5757';
        inputYear.style.borderColor = '#ff5757';
        return false
    }
    if(day > currentDay(d) && month >= currentMonth(m)) {
        document.getElementById('demo').textContent = (currentYear(e) - year) - 1;
        if (currentYear(e) - year <= 1) {
            document.getElementById('demoa').textContent = 'year';
        }
        return false
    }
    if(year <= currentYear(e)) {
        document.getElementById('demo').textContent = currentYear(e) - year;
        if (currentYear(e) - year <= 1) {
            document.getElementById('demoa').textContent = 'year';
        }
        return false
    }
    if(day > 31) {
        document.getElementById('errorNote').textContent = 'Must be a valid day'
        document.getElementById('demo1').textContent = '- -';
        document.getElementById('demo').textContent = '- -';
        errorNote2.style.display = 'flex';
        box.style.marginTop = '0';
        text2.style.color = '#ff5757';
        inputYear.style.borderColor = '#ff5757';
        return false
    }
    if(day > 29 && month == 2) {
        document.getElementById('errorNote').textContent = 'Must be a valid day';
        document.getElementById('demo1').textContent = '- -';
        document.getElementById('demo').textContent = '- -';
        errorNote2.style.display = 'flex';
        box.style.marginTop = '0';
        text2.style.color = '#ff5757';
        inputYear.style.borderColor = '#ff5757';
        return false
    }
    return true
}

function validateAge() {
    if(validateDay() || validateMonth() || validateYear() == true) {
        return false
       }
    return true
}

enter.onclick = function () {
    validateAge()
    enter.classList.add('clicked')
    box.classList.add('clicked')
    setTimeout(function(){
        enter.classList.remove('clicked')
        box.style.marginTop = '1rem';
        text.style.color = 'black';
        text1.style.color = 'black';
        text2.style.color = 'black';
        inputDay.style.borderColor = 'black';
        inputMonth.style.borderColor = 'black';
        inputYear.style.borderColor = 'black';
        errorNote.style.display = 'none';
        errorNote1.style.display = 'none';
        errorNote2.style.display = 'none';
    }, 1500);
    return false
}