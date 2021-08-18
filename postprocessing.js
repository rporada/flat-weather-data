// based on https://github.com/githubocto/flat-demo-bitcoin-price/blob/main/postprocess.js

// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
import { readJSON, writeJSON, removeFile } from 'https://deno.land/x/flat@0.0.11/mod.ts' 

// Step 1: Read the downloaded_filename JSON
const filename = 'forecast.json' // const filename = Deno.args[0] 
const json = await readJSON(filename)
// console.log(json)

// Step 2: Filter specific data we want to keep and write to a new JSON file
const updated = json.properties.updated; // get updated value
console.log(updated)
const periods = Object.values(json.properties.periods); // get the periods
periods.forEach((item) => {
    // console.log(item)
    delete item.number
    delete item.name
    item.updated = updated
    // console.log(item)
})

console.log(periods)


// Step 3. Write a new JSON file with our filtered data
const newFilename = `forecast-postprocessed.json` // name of a new file to be saved
await writeJSON(newFilename,periods)
// await writeJSON(newFilename, filteredCurrencyRates) // create a new JSON file with just the Bitcoin price
console.log("Wrote a post process file")

// Optionally delete the original file
// await removeFile('./forecast.json') // equivalent to removeFile('btc-price.json')
