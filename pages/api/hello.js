 
import fs from 'fs'
import Path from 'path'

export function buildPath(){
  return Path.join(process.cwd(),'data','Subjectsdata.json')
}

 export function getdata(filepath){
  const filedata=fs.readFileSync(filepath)
  const data=JSON.parse(filedata)
  return data

 }

export default function handler(req, res) {
  const filepath=buildPath()
  const data=getdata(filepath)
  res.status(200).json({  name: data })
}
