/** CSV file to JSON file converter
 * @param {string} csvFilePath - Path to CSV file
 * @param {string} jsonFilePath - Path to JSON file
 * @param {function} callback - Callback function
*/

// Requirments
const csv=require('csvtojson')

/** 
 * Variables
*/
// Get the path to the CSV file from parameters
const csvFilePath=process.argv[2]
// Get the path to the JSON file from parameters
const jsonFilePath=process.argv[3]

/**
 * Validate the parameters
*/
if(!csvFilePath){
    console.log('Please provide a valid path to the CSV file')
}
if(jsonFilePath){
    console.log('A file named '+jsonFilePath+' already exists')
    console.log('Please provide a valid path to the JSON file')
}
/**
 * Convert the CSV file to JSON file
 */
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
	console.log(jsonObj);
	/**
	 * [
	 * 	{a:"1", b:"2", c:"3"},
	 * 	{a:"4", b:"5". c:"6"}
	 * ]
	 */ 
})

// Async / await usage
const jsonArray=await csv().fromFile(csvFilePath);