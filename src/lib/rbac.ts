export type Role = "ADMIN" | "MANAGER" | "EMPLOYEE";

export const roleLabels: Record<Role, string> = {
  ADMIN: "Admin/Owner",
  MANAGER: "Accountant/Manager",
  EMPLOYEE: "Employee"
};

export const routePermissions: Record<string, Role[]> = {
  "/dashboard": ["ADMIN", "MANAGER", "EMPLOYEE"],
  "/employees": ["ADMIN", "MANAGER"],
  "/attendance": ["ADMIN", "MANAGER", "EMPLOYEE"],
  "/payroll": ["ADMIN", "MANAGER"],
  "/expenses": ["ADMIN", "MANAGER"],
  "/invoices": ["ADMIN", "MANAGER"],
  "/requests": ["ADMIN", "MANAGER", "EMPLOYEE"],
  "/reports": ["ADMIN", "MANAGER"]
};

export function canAccessPath(role: Role, path: string) {
  const permission = routePermissions[path];
  if (!permission) {
    return true;
  }
  return permission.includes(role);
}
