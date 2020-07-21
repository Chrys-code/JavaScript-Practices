// Create UI class
class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
  //UI functions

  //Add budget
  addBudget() {
    const budgetInputValue = this.budgetInput.value;
    if (budgetInputValue === null || budgetInputValue == "") {
      this.budgetFeedback.textContent = "Please provide budget";
      this.budgetFeedback.classList.add("showItem");

      setTimeout(() => {
        this.budgetFeedback.classList.remove("showItem");
      }, 3000);
    } else {
      this.budgetAmount.textContent = budgetInputValue;
      this.budgetInput.value = "";
      //call this.writeBalance()
      this.expensesTotal();
      this.writeBalance();
    }
  }

  //Add expenses
  addExpenses() {
    const expenseInputValue = this.expenseInput.value;
    const amountInputValue = this.amountInput.value;

    if (
      expenseInputValue === null ||
      expenseInputValue == "" ||
      amountInputValue === null ||
      amountInputValue == ""
    ) {
      this.expenseFeedback.textContent =
        "Please provide expense expense amount";
      this.expenseFeedback.classList.add("showItem");

      setTimeout(() => {
        this.expenseFeedback.classList.remove("showItem");
      }, 3000);
    } else {
      this.expenseInput.value = "";
      this.amountInput.value = "";
      let amount = parseInt(amountInputValue);
      //Create Expense
      let expense = {
        id: this.itemID,
        title: expenseInputValue,
        amount: amount,
      };
      this.itemID++;
      this.itemList.push(expense);
      this.expensesList(expense);
      this.writeBalance();
      console.log(this.itemList);
    }
  }

  //Write expenses
  expensesList(expense) {
    const div = document.createElement("div");
    div.setAttribute("class", "expense-container");
    div.innerHTML = `<div class="expense">
    <div class="expense-item d-flex justify-content-between align-items-baseline">
     <h6 class="expense-title mb-0 text-uppercase list-item"> ${expense.title}</h6>
     <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>
     <div class="expense-icons list-item">
      <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
       <i class="fas fa-edit"></i>
      </a>
      <a href="#" class="delete-icon" data-id="${expense.id}">
       <i class="fas fa-trash"></i>
      </a>
     </div>
    </div>
   </div>`;
    this.expenseList.appendChild(div);
  }

  expensesTotal() {
    let total = 0;
    if (this.itemList.length > 0) {
      total = this.itemList.reduce((accumulator, current) => {
        accumulator += current.amount;
        return accumulator;
      }, 0);
    }
    this.expenseAmount.textContent = total;
    return total;
  }

  //Balance
  writeBalance() {
    const expenses = this.expensesTotal();
    const total = parseInt(this.budgetAmount.textContent) - expenses;
    this.balanceAmount.textContent = total;
  }

  /*
  //Expense functions
  // Eventlistener added to the whole list, whenever an expense eventlisteners is clicked
  // it runs as many times as many Item is present in the whole list
  //This would work on a separated eventListener on each list item

  editExpense(element) {
    let parent = element.parentElement.parentElement.parentElement;
    this.expenseList.removeChild(parent);
    // The hell is the problem with this....
    let expense = this.itemList.filter(function (item) {
      console.log(item);

      return item;
    });
    const expenseid = expense[0].id;
    //Find index based on matching id
    console.log(expenseid);
    this.itemList.splice(
      this.itemList.findIndex((x) => x.id === expenseid),
      1
    );
    console.log(this.itemList);

    this.writeBalance();
  }
  
*/

  //This wont work
  editExpense(element) {
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement;
    //remove from DOM
    this.expenseList.removeChild(parent);
    //remove from the list
    let expense = this.itemList.filter(function (item) {
      return item.id === id;
    });
    //show values
    this.expenseInput.value = expense[0].title;
    this.amountInput.value = expense[0].amount;
    //remove from the list
    let tempList = this.itemList.filter(function (item) {
      return item.id !== id;
    });
    this.itemList = tempList;
    this.writeBalance();
  }

  //delete expense
  deleteExpense(element) {
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement;
    //remove from DOM
    this.expenseList.removeChild(parent);
    //remove from the list
    let tempList = this.itemList.filter(function (item) {
      return item.id !== id;
    });
    this.itemList = tempList;
    this.writeBalance();
  }
  //This wont work END
}

const budgetForm = document.getElementById("budget-form");
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");

const ui = new UI();

//AddBudget
budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  ui.addBudget();
});

//AddExpenses
expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  ui.addExpenses();
});

//Expense functions
expenseList.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("edit-icon")) {
    ui.editExpense(target.parentElement);
  } else if (target.classList.contains("delete-icon")) {
    ui.deleteExpense(target.parentElement);
  }
});
