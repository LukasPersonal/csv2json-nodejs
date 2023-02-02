# csv2json-nodejs
This script is used to convert a **CSV** file into a **JSON** file.
This is useful if you have a large csv export of data, and need to ingest it into a system that requires a JSON object.

## PREREQS

You need to have the following to run this script successfully:

- **nodejs** installed on the machine running the query

## Input file

The `input file` should be in the format:

```csv
HEADER1,HEADER2,HEADER3,etc
value1,value2,value3,etc
value1,value2,value3,etc
value1,value2,value3,etc
```

The script will read the input file line by line and convert it into a JSON object. It will also skip over empty values and headers to produce a valid JSON object.

## Usage

`node index.js test.csv output.json`

### Output

```bash
node index.js test.csv output.json

st-gravley1:csv2json-nodejs gravley$ node index.js small-test.csv output.json
[
  { header1: '1', header2: '2', header3: '3', header4: '4' },
  { header1: 'a', header2: 'b', header3: 'c', header4: 'd' },
  { header1: 'here', header2: 'there', header4: 'again' },
  { header1: '1', header2: '2', header3: '3', header4: '4' },
  { header1: 'a', header2: 'b', header3: 'c', header4: 'd' },
  { header1: 'here', header2: 'there', header4: 'again' },
  { header1: '1', header2: '2', header3: '3', header4: '4' },
  { header1: 'a', header2: 'b', header3: 'c', header4: 'd' },
  { header1: 'here', header2: 'there', header4: 'again' },
  { header1: '1', header2: '2', header3: '3', header4: '4' },
  { header1: 'a', header2: 'b', header3: 'c', header4: 'd' },
  { header1: 'here', header2: 'there', header4: 'again' }
]
```

The script will write the data to the console, as well to the output file.