import requests
from bs4 import BeautifulSoup
import pandas as pd
import time

# Load the CSV file
df = pd.read_csv('dehradun_schools_detailed.csv')

# Base URL
base_url = "https://www.euttaranchal.com"

# Result list
school_contacts = []

# Loop over each row
for index, row in df.iterrows():
    try:
        profile_url = row["Profile URL"]
        full_url = profile_url if profile_url.startswith("http") else base_url + profile_url
        response = requests.get(full_url)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')

        table = soup.find("table", {"id": "tbl-edu-meta"})
        rows = table.find_all("tr")

        contact_info = {
            "School Name": row.get("Name", ""),
            "Full URL": full_url,
            "Address": "",
            "City": "",
            "District": "",
            "State": "",
            "Phone": "",
            "Email": "",
            "Website": ""
        }

        for r in rows:
            text = r.find_all("td")[1].get_text(strip=True)
            icon = r.find("i").get("class", [])
            if "fa-university" in icon:
                contact_info["Address"] = text
            elif "fa-map-marker" in icon:
                contact_info["City"] = text
            elif "fa-phone" in icon:
                contact_info["Phone"] = text
            elif "fa-envelope" in icon:
                contact_info["Email"] = text
            elif "fa-globe" in icon:
                contact_info["Website"] = text
            elif "text-info" in icon:
                # If multiple lines just marked "text-info", assume District then State
                if not contact_info["District"]:
                    contact_info["District"] = text
                else:
                    contact_info["State"] = text

        school_contacts.append(contact_info)
        time.sleep(1)  # Be polite to the server

    except Exception as e:
        print(f"❌ Failed to fetch {profile_url}: {e}")

# Save to CSV
output_path = "school_contact_details.csv"
pd.DataFrame(school_contacts).to_csv(output_path, index=False, encoding='utf-8')
print(f"✅ Contact info saved to {output_path}")
