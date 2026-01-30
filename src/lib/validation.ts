import { z } from "zod";

export const employeeSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().optional(),
  departmentId: z.string().optional(),
  positionId: z.string().optional(),
  hireDate: z.coerce.date(),
  salaryType: z.enum(["MONTHLY", "HOURLY"]),
  baseSalary: z.number().optional(),
  hourlyRate: z.number().optional(),
  isActive: z.boolean().default(true)
});

export const expenseSchema = z.object({
  date: z.coerce.date(),
  category: z.string().min(2),
  amount: z.number().positive(),
  vendorId: z.string().optional(),
  note: z.string().optional()
});

export const requestSchema = z.object({
  employeeId: z.string(),
  type: z.enum(["leave", "advance", "reimbursement"]),
  fromDate: z.coerce.date().optional(),
  toDate: z.coerce.date().optional(),
  amount: z.number().optional(),
  reason: z.string().min(2)
});
