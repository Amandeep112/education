import fs from 'fs'

import Path from 'path'

export function buildpath() {
    return Path.join(process.cwd(), 'data', 'signupform.json')

}
export function readData(filepath) {
    const filedata = fs.readFileSync(filepath)
    const data = JSON.parse(filedata)
    return data
}

export default function handler(req, res) {
    if (req.method === 'POST') {
        const fname = req.body
        const pas = JSON.parse(fname);
        const feedbackForm = {
            id: new Date().toISOString(),
            firstname: pas.firstname,
            email:pas.email,
            group:pas.group,
        }

        const filepath = buildpath()
        const data = readData(filepath)
        data.push(feedbackForm)
        fs.writeFileSync(filepath, JSON.stringify(data))
        res.status(201).json({ message: 'Sucessfull', data: feedbackForm })
    }
    else {
        const filepath = buildpath()
        const data = readData(filepath)
        res.status(200).json({ datafeed: data })
    }

}