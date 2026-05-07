# FG - Webb application development - Assignment 1 - CSS Libraries - Tailwind#

## Introduction ##
For this school assignment I have built a SPA React website to test my knowledge of TypeScript, CSS Libraries and core React fundamentals.
The topic of the website is to explore the facts in three categories (cats, dogs and useless facts) with data fecthed from APIs.

## Live Demo ##
Check out my [website](https://fg-assignment-tailwind.vercel.app/).

## Tech Stack ##
- HTML5
- CSS
- Vanilla Javascript
- React
- Tailwind

## Used APIs##
- [Cat facts](https://catfact.ninja/fact)
- [Dog Facts](https://dogapi.dog/api/v2/facts)
- [Useless Facts](https://uselessfacts.jsph.pl/api/v2/facts/random)

## Project Structure ##
- **Project root**:
  - main.tsx (main application entry point)
  - App.tsx (the root component of the application)
  - package.json (project metadata and dependencies)
  - .gitignore (files excluded from the git)
  - index.css (global css file)

- **data**:
  - data.ts (data file with continents and their coordinates)
    
- **public**:
  - favicon image
      
- **assets**
  - icon files

- **hooks**
  - useGetCatFact.tsx (custom React hook that fetches data from the API)
  - useGetDogFact.tsx (custom React hook that fetches data from the API)
  - useGetUselessFact.tsx (custom React hook that fetches data from the API)
    
- **components**:
  - Button (component for button elements for the website)
  - ConsoleBody (component displaying a console)
  - Footer (component for the footer section)