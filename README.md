# RA2311003010147 – Campus Hiring Evaluation Submission

This repository contains my submission for the Campus Hiring Evaluation.

## Repository Structure

RA2311003010147/

- logging_middleware/
- notification_app_fe/
- notification_system_design.md
- README.md

---

## 1. Logging Middleware

Reusable logging middleware created as required in the pre-test setup.

### Function Signature

`Log(stack, level, package, message)`

### Features

- Sends logs to evaluation server
- Centralized reusable logger
- Node.js + Axios based implementation

---

## 2. Frontend Application

React + Material UI based Campus Notifications Dashboard.

### Features

- Responsive UI
- Priority Inbox
- Notification Type Filter
- Color coded notifications
- New notification badge
- Total notification count

### Tech Stack

- React
- Vite
- Material UI
- JavaScript

---

## 3. Priority Logic

Notifications are ranked by importance:

1. Placement
2. Result
3. Event

If two notifications have same type, latest timestamp gets higher priority.

---

## 4. Stage 1 Algorithm

- Fetch notifications
- Assign priority weight
- Sort by weight descending
- Sort by timestamp descending
- Display top notifications

**Time Complexity:** `O(n log n)`

---

## 5. How to Run Frontend

`cd notification_app_fe`

`npm install`

`npm run dev`

Runs on:

`http://localhost:3000`

---

## 6. How to Run Middleware Test

`cd logging_middleware`

`npm install`

`node test.js`

---

## 7. Notes

Some browser API calls may face CORS restrictions from evaluation server.  
However, logging middleware and API integration were successfully tested.

---

## Submitted By

**Roll Number:** RA2311003010147
