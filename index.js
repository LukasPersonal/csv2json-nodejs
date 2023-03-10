/** CSV file to JSON file converter
 * @param {string} csvFilePath - Path to CSV file
 * @param {string} jsonFilePath - Path to JSON file
 * @param {function} callback - Callback function
*/

// Requirments
const csv = require('csvtojson')
const fs = require('fs')
const main = async () => {
/**
 * Variables
*/
  // Get the path to the CSV file from parameters
  const csvFilePath = process.argv[2]
  // Get the path to the JSON file from parameters
  let jsonFilePath = process.argv[3]

  /**
 * Validate the parameters
*/
  if (!csvFilePath) {
    console.log('ERROR: Please provide a valid path to the CSV file...')
    // exit the program
    process.exit(1)
  }
  if (!jsonFilePath) {
    console.log('WARN: No JSON file path given, defaulting to "output.json"...')
    // Set the default JSON file path
    jsonFilePath = 'output.json'
  }
  /**
 * Convert the CSV file to JSON file
 */
  csv({ trim: true, ignoreEmpty: true })
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      console.log(jsonObj)
    /**
     * [
     * \s{a:"1", b:"2", c:"3"},
     * \s{a:"4", b:"5". c:"6"}
     * ]
    */
    })

  // Async / await usage
  const jsonArray = await csv().fromFile(csvFilePath)
  // Write the jsonArry to the JSON file
  const file = fs.createWriteStream(jsonFilePath)
  file.write('[')
  // error handling
  file.on('error', function (err) { console.log(err) })
  jsonArray.forEach(function (v) {
    // check if its the last item in the array
    if (jsonArray.indexOf(v) === jsonArray.length - 1) {
      file.write(`${JSON.stringify(v)}\n`)
    } else {
      file.write(`${JSON.stringify(v)},\n`)
    }
  })

  // close the file
  file.write(']')
  file.end()
}

main()
