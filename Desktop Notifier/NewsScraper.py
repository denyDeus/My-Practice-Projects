import re
import requests
import xml.etree.ElementTree as ET

# public RSS feeds that are usually available
RSS_FEED_URLS = [
    "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en",
    "https://feeds.feedburner.com/ndtvnews-top-stories",
]


def loadRSS():
    """Load RSS feed content from a working public source."""
    for url in RSS_FEED_URLS:
        try:
            response = requests.get(url, timeout=15)
            response.raise_for_status()
            if response.content:
                return response.content
        except requests.RequestException:
            continue
    raise RuntimeError("Unable to fetch RSS feed")


def clean_text(value):
    """Convert HTML-rich feed text into readable plain text."""
    if not value:
        return ""
    text = re.sub(r"<[^>]+>", " ", value)
    text = re.sub(r"&nbsp;", " ", text)
    text = re.sub(r"&amp;", "&", text)
    text = re.sub(r"&quot;", '"', text)
    text = re.sub(r"&#39;", "'", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def parseXML(rss):
    """Parse XML format RSS feed into a list of news items."""
    root = ET.fromstring(rss)
    newsitems = []

    for item in root.findall('./channel/item'):
        news = {}
        for child in item:
            tag_name = child.tag.split('}', 1)[-1]
            text = child.text.strip() if child.text else ""
            if tag_name == "media:content" and child.attrib:
                news["media"] = child.attrib.get("url", "")
            else:
                if tag_name in {"description", "summary"}:
                    news[tag_name] = clean_text(text)
                else:
                    news[tag_name] = clean_text(text)
        if "description" in news and news["description"]:
            news["description"] = news["description"]
        else:
            news["description"] = news.get("title", "")
        newsitems.append(news)

    return newsitems


def topStories():
    """Main function to generate and return news items."""
    rss = loadRSS()
    newsitems = parseXML(rss)
    return newsitems