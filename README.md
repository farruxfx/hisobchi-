# Hisobchi MVP

Minimal accounting + HR operations suite with employee self-service, built on Next.js App Router.

## Features
- Company setup, employees, departments, positions
- Attendance + timesheets with approvals
- Payroll runs with allowances, deductions, and pro-rating
- Expenses + invoices tracking with CSV export placeholders
- Requests & approvals flow
- Reports for payroll, attendance, expenses, and cashflow

## Tech Stack
- **Frontend:** Next.js (App Router) + TypeScript + TailwindCSS
- **Backend:** Next.js API routes + Prisma ORM
- **DB:** PostgreSQL
- **Auth:** NextAuth (Credentials + RBAC)
- **Charts:** Recharts
- **Validation:** Zod

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and update values.
3. Run Prisma migration:
   ```bash
   npm run prisma:migrate
   ```
4. Seed data (admin user + sample employees):
   ```bash
   npm run seed
   ```
5. Start the dev server:
   ```bash
   npm run dev
   ```

## Default admin credentials
- **Email:** `admin@hisobchi.local`
- **Password:** `admin123`

## Prisma
- Generate client: `npm run prisma:generate`
- Open studio: `npm run prisma:studio`

## Notes
- Currency defaults to UZS in the UI.
- Payroll calculation logic lives in `src/lib/payroll.ts`.
