
# CloudEduSync Lite

A lightweight, low-cost college ERP featuring admissions, fee collection, hostel allocation, and role-based portals.

## Quick Start

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Locally:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (or the port Vite assigns).

3. **Login Credentials (Demo):**
   - **Admin:** `admin` / `admin123`
   - **Faculty:** `faculty` / `teach123`
   - **Student:** `student` / `learn123`

## Backend Integration (Google Apps Script)

To connect the React frontend to a real Google Sheet database:

1. Create a new Google Sheet.
2. Go to `Extensions > Apps Script`.
3. Copy the content of `backend/Code.gs` into the script editor.
4. Create sheets named: `Attendance`, `Grades`, `Students`, `Courses`.
5. Deploy as Web App:
   - Execute as: **Me**
   - Who has access: **Anyone** (for easy CORS handling during MVP)
6. Copy the **Web App URL**.
7. In the frontend, update the API calls (currently mocked in `mockData.ts` and component handlers) to `fetch` this URL with `method: 'POST'` for writes and `method: 'GET'` for reads.

## Features

- **Admissions:** Public form, admin review queue.
- **Fees:** Invoice tracking, receipt generation (simulated).
- **Hostel:** Visual room allocation.
- **Faculty Portal:** Attendance marking, grading, course management.
- **Student Portal:** Personal dashboard, fee status, schedule.
