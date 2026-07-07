# Attendance Tracker & Reminder System

A Python-based automated attendance tracking and notification system that monitors student attendance and sends email alerts when attendance thresholds are breached.

## Overview

This system manages student attendance records and automatically sends email reminders to students and staff members when attendance falls below acceptable limits. It integrates with Excel spreadsheets for data management and uses SMTP to send email notifications.

## Features

- 📊 **Excel-Based Data Management** - Track attendance using spreadsheet format
- 📧 **Automated Email Alerts** - Sends warning emails to students at critical attendance levels
- ⚠️ **Multi-Level Warnings** - First warning at 2 absences, escalation with staff notification at 3+ absences
- 👥 **Staff Notifications** - Alerts staff members when student attendance is critical
- 🔒 **Data Persistence** - Automatically saves attendance records

## Requirements

- Python 3.x
- `openpyxl` - For Excel file operations
- `smtplib` - For sending emails
- `email` - For email formatting

## Installation

1. Clone or download this project
2. Install required dependencies:
```bash
pip install openpyxl
```

## Configuration

### Email Setup

Before running the system, configure the email settings in `attendance.py`:

```python
sender_email = 'your_email@gmail.com'
sender_password = 'your_app_password'  # Use Gmail App Password
```

**Note:** For Gmail, you need to:
1. Enable 2-Factor Authentication
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Use the 16-character password in the script

### Staff Mail Assignments

Update the `staff_mails` dictionary to assign staff email addresses to subjects:

```python
staff_mails = {
    1: 'staff_ci@example.com',
    2: 'staff_python@example.com',
    3: 'staff_dm@example.com'
}
```

## Dataset Structure

The Excel file (`attendance.xlsx`) should have the following structure:

| Column A | Column B | Column C | Column D | Column E |
|----------|----------|----------|----------|----------|
| Roll Number | Student Email | Subject 1 Leaves | Subject 2 Leaves | Subject 3 Leaves |
| 001 | student1@email.com | 0 | 1 | 0 |
| 002 | student2@email.com | 2 | 0 | 1 |

## Subject Codes

The system supports the following subjects with their corresponding codes:

- **1** - Computer Intelligence (CI)
- **2** - Python
- **3** - Data Mining (DM)

## How It Works

1. **Data Input** - Enter the absent student's roll number and subject code
2. **First Warning** - When a student reaches 2 absences, an email warning is sent
3. **Critical Alert** - When absences exceed 2:
   - Email sent to the student with critical warning
   - Email sent to the corresponding subject staff member with student details
4. **Record Update** - All changes are automatically saved to the Excel file

## Usage

```python
# Run the script
python attendance.py

# Follow the prompts to:
# 1. Enter subject code (1, 2, or 3)
# 2. Enter roll number of absent student
# 3. Script automatically sends emails and updates records
```

## Attendance Rules

- Students can take up to **3 leaves per subject** before exam ineligibility
- **Warning email** sent after 2nd leave
- **Critical email** sent to student and staff after 3rd leave or more

## Error Handling

The system includes error handling for:
- Locked or in-use Excel files
- Email sending failures
- Invalid input data

If the Excel file is locked, close it and rerun the script.

## Future Enhancements

- Web-based interface for easier data entry
- Database integration instead of Excel
- SMS notifications as alternative to email
- Attendance dashboard and analytics
- Bulk import from student information systems

## Author

Created as a practice project for Python automation and email management.

## License

This project is open source and available for educational purposes.
