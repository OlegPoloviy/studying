class Department{
    // private id: string;
    // private name: string;
    protected employees: string[]  = [];

    constructor(private readonly id: string,private name: string){
        // this.id = id;
        // this.name = name;
    }

    addEmployee(name: string){
        this.employees.push(name);
    }

    describe(this: Department){
        console.log(this.name,this.id);
    }

    printEmployeeInfo(this: Department){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("d1","first_department");
accounting.addEmployee('Adolf');
accounting.addEmployee('sigma');
accounting.printEmployeeInfo();

accounting.printEmployeeInfo();

class ITDepartment extends Department{
    admins : string[];

    constructor(id: string,admins: string[]){
        super(id,"IT");
        this.admins = admins;
    }

    addEmployee(name: string): void {
        if(name == 'Nigger'){
            console.log('got ot the field!');
            return;
        }else{
            this.employees.push(name)
        }
    }

}

const it1 = new ITDepartment('12',['idiot','ogo']);
it1.describe();
console.log(it1);
it1.addEmployee("Allah");
it1.printEmployeeInfo();

class AccountingDepartmet extends Department{
    private lastReport: string;

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }else{
            throw new Error("No report found!")
        }
    }

    set mostRecentReport(value: string){
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]){
        super(id,"Accounting");
        this.lastReport = reports[0];
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }

    getReports(){
        console.log(this.reports);
    }
}


const accounting2 = new AccountingDepartmet("12",[]);
accounting2.mostRecentReport = 'some text';
accounting2.mostRecentReport;
accounting2.getReports();

