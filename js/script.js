const incomeSection = document.querySelector('.income-area')
const expensesSection = document.querySelector('.expenses-area')
const availableMoney = document.querySelector('.available-money')
const addTransactionPanel = document.querySelector('.add-transaction-panel')

const nameInput = document.querySelector('#name')
const amountInput = document.querySelector('#amount')
const categorySelect = document.querySelector('#category')

const addTransactionBtn = document.querySelector('.add-transaction')
const deleteAllBtn = document.querySelector('.delete-all')
const deleteBtn = document.querySelector('.delete')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const lightStyleBtn = document.querySelector('.light')
const darkStyleBtn = document.querySelector('.dark')



let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArr = [0]

const showPanel = () =>{
    addTransactionPanel.style.display = 'flex';
}
const cancelPanel = () =>{
    addTransactionPanel.style.display = 'none'
    nameInput.value = ''
    amountInput.value = ''
    categorySelect.selectedIndex = 0
}

const checkForm = () =>{



    if(nameInput.value !== '' && amountInput.value !== '' && categorySelect.value !== 'none'){
        // cancelPanel()
        createNewTransaction()
        // checkCategory()
    } else {
        alert('Wypełnij wszystkie pola!!!')
    }
}

const createNewTransaction = () => {
    const  newTransaction = document.createElement('div');
    newTransaction.classList.add('transaction');
newTransaction.setAttribute('id', ID);
checkCategory(selectedCategory);


newTransaction.innerHTML = `<p class="transaction-name">${categoryIcon} ${nameInput.value}</p>
    <p class="transaction-amount">${amountInput.value}zł<button class="delete" onclick="deleteTransaction(${ID})"><i class="fas fa-times"></i></button></p>`


    amountInput.value > 0
    ? incomeSection.appendChild(newTransaction) && newTransaction.classList.add('income') 
    : expensesSection.appendChild(newTransaction) && newTransaction.classList.add('expense');
    //  : expensesSection.appendChild(newTransaction) && newTransaction.classList.add('expense');

    moneyArr.push(parseFloat(amountInput.value))
  
countMoney(moneyArr)
cancelPanel();
ID++;

}

const countMoney = money =>{
    const newMoney = money.reduce((x,y) => x + y);
    availableMoney.textContent = `${newMoney}zł`
}
const selectCategory = () =>{
    selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;
}
const checkCategory = transaction =>{
switch(transaction){
    case '[+] Przychód':
    categoryIcon = '<i class="fas fa-money-bill-wave"></i> '
    break;
    case '[-] Zakupy':
    categoryIcon = '<i class="fas fa-cart-arrow-down"></i> '
    break;
    case '[-] Jedzenie':
    categoryIcon = '<i class="fas fa-hamburger"></i> '
    break;
    case '[-] Kino':
    categoryIcon  = '<i class="fas fa-film"></i> '
    break;
}
}

const deleteTransaction = id =>{
const  transactionToDelete = document.getElementById(id)

const transactionAmount = parseFloat(transactionToDelete.childNodes[2].innerText);
const indexOfTransaction = moneyArr.indexOf(transactionAmount)
console.log(moneyArr.indexOf(transactionAmount));
moneyArr.splice(indexOfTransaction,1)
countMoney(moneyArr)

transactionToDelete.classList.contains('income')
? incomeSection.removeChild(transactionToDelete)
: expensesSection.removeChild(transactionToDelete)
}

const deleteAllTransaction = () =>{
    incomeSection.innerHTML = '<h3>Przychód</h3>';
    expensesSection.innerHTML = '<h3>Wydatki:</h3>';
    availableMoney.textContent = '0zł';
    moneyArr = [0]
}

const changeStyleToLight = () => {
    root.style.setProperty('--first-color', '#F9F9F9');
    root.style.setProperty('--second-color', '#14161F');
    root.style.setProperty('--border-color', 'rgba(0,0,0,0.2)');   
}

const changeStyleToDark = () => {
    root.style.setProperty('--first-color', '#14161F');
    root.style.setProperty('--second-color', '#F9F9F9');
    root.style.setProperty('--border-color', 'rgba(255,255,255.4)');   
}
deleteAllBtn.addEventListener('click', deleteAllTransaction)
saveBtn.addEventListener('click', checkForm)
cancelBtn.addEventListener('click', cancelPanel)
addTransactionBtn.addEventListener('click', showPanel)
lightStyleBtn.addEventListener('click', changeStyleToLight)
darkStyleBtn.addEventListener('click', changeStyleToDark)




