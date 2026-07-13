import os
import time
import tkinter as tk
from tkinter import messagebox

try:
    import notify2
except ImportError:
    notify2 = None

from NewsScraper import topStories

# path to notification window icon
ICON_PATH = os.path.join(os.path.dirname(__file__), "icon.png")


def show_notification(title, message):
    if notify2 is not None:
        try:
            notify2.init("News Notifier")
            notification = notify2.Notification(
                title,
                message,
                icon=ICON_PATH if os.path.exists(ICON_PATH) else "",
            )
            notification.set_urgency(notify2.URGENCY_NORMAL)
            notification.set_timeout(10000)
            notification.show()
            return
        except Exception:
            pass

    root = tk.Tk()
    root.withdraw()
    root.attributes("-topmost", True)
    messagebox.showinfo(title, message)
    root.update_idletasks()
    root.destroy()


def main():
    try:
        newsitems = topStories()
    except Exception as exc:
        print(f"Unable to fetch news: {exc}")
        newsitems = []

    if not newsitems:
        show_notification("News Notifier", "No news articles available right now.")
        return

    for newsitem in newsitems[:5]:
        title = newsitem.get("title", "News")
        description = newsitem.get("description", "")

        if isinstance(title, bytes):
            title = title.decode("utf-8", errors="ignore")
        if isinstance(description, bytes):
            description = description.decode("utf-8", errors="ignore")

        if not description or len(description) > 220 or "http" in description:
            description = title

        show_notification(title, description)
        time.sleep(2)


if __name__ == "__main__":
    main()