export type SalaryType = "MONTHLY" | "HOURLY";

export interface PayrollInputs {
  salaryType: SalaryType;
  baseSalary?: number;
  hourlyRate?: number;
  workedDays: number;
  requiredDays: number;
  approvedHours: number;
  allowances: number;
  deductions: number;
  overtimeHours: number;
  overtimeMultiplier?: number;
}

export function calculatePayroll(inputs: PayrollInputs) {
  const overtimeMultiplier = inputs.overtimeMultiplier ?? 1.5;

  if (inputs.salaryType === "MONTHLY") {
    const salary = inputs.baseSalary ?? 0;
    const proration = inputs.requiredDays > 0 ? inputs.workedDays / inputs.requiredDays : 0;
    const gross = salary * Math.min(proration, 1);
    const overtimePay = (inputs.hourlyRate ?? salary / (inputs.requiredDays * 8 || 1)) *
      inputs.overtimeHours *
      overtimeMultiplier;
    const totalGross = gross + overtimePay + inputs.allowances;
    const net = totalGross - inputs.deductions;

    return { gross: totalGross, net };
  }

  const baseHourly = inputs.hourlyRate ?? 0;
  const totalGross = baseHourly * inputs.approvedHours + inputs.allowances;
  const net = totalGross - inputs.deductions;

  return { gross: totalGross, net };
}
