const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const historyList = document.getElementById('history-list');

// معالجة الإدخالات
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (value) {
            appendValue(value);
        } else if (button.id === 'clear') {
            clearDisplay();
        } else if (button.id === 'equals') {
            calculate();
        } else if (button.id === 'delete') {
            deleteLast();
        }
    });
});

// إضافة قيمة جديدة إلى الشاشة
function appendValue(value) {
    if (display.value === '0') display.value = '';
    display.value += value;
}

// مسح الشاشة
function clearDisplay() {
    display.value = '0';
}

// إجراء العملية الحسابية
function calculate() {
    try {
        const result = eval(display.value);
        addToHistory(`${display.value} = ${result}`);
        display.value = result;
    } catch (error) {
        display.value = 'خطأ';
    }
}

// حذف الإدخال الأخير
function deleteLast() {
    display.value = display.value.slice(0, -1) || '0';
}

// إضافة العملية إلى السجل
function addToHistory(operation) {
    const li = document.createElement('li');
    li.textContent = operation;
    historyList.appendChild(li);

    if (historyList.children.length > 10) {
        historyList.removeChild(historyList.firstChild);
    }
}
