const basicSalary = parseFloat(prompt("Enter the basic salary:"));
const benefits = parseFloat(prompt("Enter the benefits:"));
  
const payee = basicSalary * taxRate;
const nhifDeductions = basicSalary * nhifRate;
const nssfDeductions = basicSalary * nssfRate;
const grossSalary = basicSalary + benefits;
const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

console.log("Payee (Tax):", payee);
console.log("NHIF Deductions:", nhifDeductions);
console.log("NSSF Deductions:", nssfDeductions);
console.log("Gross Salary:", grossSalary);
console.log("Net Salary:", netSalary);
