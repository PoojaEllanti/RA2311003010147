# Notification System Design

## Stage 1

## Objective

Build a Priority Inbox that shows top important notifications.

## Priority Rules

Notifications ranked by business importance:

1. Placement
2. Result
3. Event

If same type, latest timestamp gets higher priority.

## Algorithm Used

- Fetch notifications from API
- Assign weight based on type
- Sort by weight descending
- Sort by timestamp descending
- Display top 10 notifications

## Time Complexity

Sorting n notifications:

O(n log n)

## Frontend Implementation

Built using React + Material UI.

Features:
- Responsive dashboard
- Filter by notification type
- Priority Inbox
- All notifications list
- New notification highlighting

## Logging Middleware

Reusable function:

Log(stack, level, package, message)

Used for centralized logs to server.s