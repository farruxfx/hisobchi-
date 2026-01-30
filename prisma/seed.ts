import { Prisma } from "@prisma/client";
import { prisma } from "../src/lib/prisma";
import { hashPassword } from "../src/lib/password";

async function main() {
  const adminEmail = "admin@hisobchi.local";
  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });

  if (!existingAdmin) {
    const finance = await prisma.department.create({ data: { name: "Finance" } });
    const ops = await prisma.department.create({ data: { name: "Operations" } });
    const accountant = await prisma.position.create({ data: { title: "Accountant" } });
    const manager = await prisma.position.create({ data: { title: "Manager" } });

    const adminEmployee = await prisma.employee.create({
      data: {
        fullName: "Admin Owner",
        phone: "+998901234567",
        departmentId: finance.id,
        positionId: manager.id,
        hireDate: new Date("2024-01-05"),
        salaryType: "MONTHLY",
        baseSalary: new Prisma.Decimal(8000000),
        isActive: true
      }
    });

    await prisma.employee.create({
      data: {
        fullName: "Dilshod Akramov",
        phone: "+998901112233",
        departmentId: finance.id,
        positionId: accountant.id,
        hireDate: new Date("2024-02-01"),
        salaryType: "MONTHLY",
        baseSalary: new Prisma.Decimal(6200000),
        isActive: true
      }
    });

    await prisma.employee.create({
      data: {
        fullName: "Aziza Muminova",
        phone: "+998909876543",
        departmentId: ops.id,
        positionId: manager.id,
        hireDate: new Date("2023-11-15"),
        salaryType: "HOURLY",
        hourlyRate: new Prisma.Decimal(60000),
        isActive: true
      }
    });

    await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash: hashPassword("admin123"),
        role: "ADMIN",
        employeeId: adminEmployee.id
      }
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
