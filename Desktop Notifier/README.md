# Desktop Notifier

A simple Python project that fetches news headlines from a public RSS feed and displays them as desktop notifications.

## Features
- Fetches latest news items from an RSS source
- Shows notifications on Windows using a popup fallback
- Cleans up feed text so the message is easier to read
- Works without requiring Linux-specific notification libraries

## Project Files
- DesktopNotifier.py - Main script that shows the notifications
- NewsScraper.py - Fetches and parses the RSS feed

## Requirements
- Python 3.8 or higher
- requests
- tkinter (included with most Python installations)

Install the required package:

```bash
pip install requests
```

## How to Run
1. Open the project folder:
   ```bash
   cd "Desktop Notifier"
   ```
2. Run the script:
   ```bash
   python DesktopNotifier.py
   ```

## Notes
- The script currently uses a public RSS feed, so it may change over time if the source becomes unavailable.
- If you want to use a different news source, update the feed URLs in NewsScraper.py.
