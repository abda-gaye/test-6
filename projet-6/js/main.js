
class budgetapp{
    constructor(addBudgetBtn,addExpenseBtn,addRevenuBtn,table){
        addBudgetBtn.addEventListener('click',this.addBudget.bind(this))
        addExpenseBtn.addEventListener('click',this.addExpense.bind(this));
        addRevenuBtn.addEventListener('click',this.addIncome.bind(this));

        this.budgetamount = document.querySelector('#label_add_budget');
        this.show_budget=document.querySelector('#label1_add_budget');
        this.show_solde = document.querySelector('#label1_add_solde')
        this.show_expense = document.querySelector('#label1_add_depense');
        this.expense_name = document.querySelector("#expense_title");
        this.expense_price = document.querySelector("#expense_prix");
        this.template = document.querySelector("#expense-row");
        this.template1 = document.querySelector("#revenu-row");
        this.revenu_price = document.querySelector("#revenu_prix");
        this.refTable= document.getElementById('tableau1');
        this.revenu_title = document.querySelector("#revenu_titre")
        this.tbody = document.querySelector("tbody");
        table.addEventListener('click',this.delete_expense.bind(this));
        table.addEventListener('click',this.edit_expense.bind(this));
        this.clone;
        this.myClone;
        this.name;
        this.price;
        this.table = document.querySelector('table');
    }
    addBudget(){
        if(+this.budgetamount < 0 || 
            +this.budgetamount===0 ||
            isNaN(+this.budgetamount.value)){

        }
        else {
        this.show_budget.innerText = +this.budgetamount.value;
        this.show_solde.innerText = +this.budgetamount.value - +this.show_expense.innerText;
        this.show_expense.innerText;
        this.budgetamount.value='';
        }
    }
    addExpense(){
        if(this.expense_name.value === '' ||
        /\d/.test(this.expense_name.value)){
            console.log("erreur");
        }
        else if(+this.expense_price.value <=0 ||
            isNaN(+this.expense_price.value)) {
                console.log("erreur");
        }
        else {

        this.clone = this.template.content.cloneNode(true);
        let td = this.clone.querySelectorAll('td');
        td[0].innerText = this.expense_name.value;
        td[1].innerText = +this.expense_price.value;
        this.tbody.appendChild(this.clone);
        this.show_expense.innerText = +this.show_expense.innerText + +this.expense_price.value;
        this.show_solde.innerText = +this.show_solde.innerText - +this.expense_price.value;
        }
     
    }
    //ajouter revenu
    addIncome(){
        if(this.revenu_title.value === '' ||
        /\d/.test(this.revenu_title.value)){
            console.log("erreur");
        }
        else if(+this.revenu_price.value <=0 ||
            isNaN(+this.revenu_price.value)) {
                console.log("erreur");
        }
        else {
            var nouvelle = this.refTable.insertRow(0);
           
        }

    }


    delete_expense(e){
        if(e.target.classList.contains('delete_row')){
            this.show_solde.innerText = +this.
            show_solde.innerText + +e.target.closest('tr').childreen[1].innerText;
            this.show_expense.innerText = +this.show_expense.innerText - +e.target.closest('tr').childreen[1].innerText;
            e.target.closest.remove();

        }
    }
    edit_expense(e) {
        
    }
}
document.addEventListener('DOMContentLoaded',init);

function init(){
    const addBudgetBtn=document.querySelector('#ajouterbudget');
    const addExpenseBtn =document.querySelector('#btn_add_depense');
    const addRevenuBtn =document.querySelector('#add-revenu');
    const table = document.querySelector('table');

    new budgetapp(addBudgetBtn,addExpenseBtn,addRevenuBtn,table);
}