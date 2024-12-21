const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(error)
        return
    }
    const fist = result

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(error)
            return
        }
        const second = result
        
        writeFile('./content/result-async.txt', `Here is the result ${fist}, ${second}`, (err, result) => {
            if(err){
                console.log(error)
                return
            }
            console.log(result)
        })
    })

})
