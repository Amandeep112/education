import fs from 'fs' 
import Path from 'path'

export function buildpath() {
    return Path.join(process.cwd(), 'data', 'subjectDetails.json')

}
export function readData(filepath) {
    const filedata = fs.readFileSync(filepath)
    const data = JSON.parse(filedata)
    return data
}

export default function handler(req, res) {
    const filepath=buildpath()
    const data=readData(filepath)
    res.status(201).json({details:data})
}
   