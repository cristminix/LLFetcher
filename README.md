# ™ LLFetcher
Linked Learning Fetcher

- Open google chrome
- Go to settings -->  extensions
- In the extensions tab click Enable developer mode
- Then click in the Load Unpacked  
- Next locate to project directory and Choose chrome_extension folder

# ∑ Logic

# © content script
- Retrieve data from current emberjs app
- Save data to datacodes element

# ∞ extension script
- Retrieve data from datacodes content script
- Extract data to relational model
- Save to local storage
- init app
 
# ¶ App State
- 0 : no datacodes exists on db
- 1 : datacodes exists but not fetched
- 2 : datacodes exists and fetched but incomplete
- 3 : datacodes exists and fetched and complete
- 4 : datacodes exists and download started
- 5 : datacodes exists and download started but uncomplete
- 6 : datacodes exists and download complete