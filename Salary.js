function calculateNetSalary(basicSalary, benefits) {
    // Calculate the payee (tax), NHIF deductions, NSSF deductions
    const payee = calculatePayee(basicSalary);
    const nhifDeductions = calculateNHIFDeductions(basicSalary);
    const nssfDeductions = calculateNSSFDeductions(basicSalary);
  
    // Calculate the gross salary by adding the basic salary and benefits
    const grossSalary = basicSalary + benefits;
  
    // Calculate the net salary by subtracting the deductions from the gross salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  
    // Return the calculated net salary
    return netSalary;
  }
  
  function calculatePayee(basicSalary) {
    // Calculate the payee (tax) based on the basic salary
    // Example calculation: 10% of the basic salary
    return basicSalary * 0.1;
  }
  
  function calculateNHIFDeductions(basicSalary) {
    // Calculate the NHIF deductions based on the basic salary
    // Example calculation: 2.5% of the basic salary
    return basicSalary * 0.025;
  }
  
  function calculateNSSFDeductions(basicSalary) {
    // Calculate the NSSF deductions based on the basic salary
    // Example calculation: 5% of the basic salary
    return basicSalary * 0.05;
  }
  
  // Example usage
  const basicSalary = 50000;
  const benefits = 2000;
  
  const netSalary = calculateNetSalary(basicSalary, benefits);
  console.log("Net Salary: " + netSalary);
  