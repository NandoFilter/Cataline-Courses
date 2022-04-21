const myPromise = () => new Promise((resolve, reject) => {
    return setTimeout(() => {
        resolve('Hello, World')
    }, 2000)
})

// myPromise().then(() => {
//     console.log('Primeira vez');

//     myPromise().then(() => {
//         console.log('Segunda vez');

//         myPromise().then(() => {
//             console.log('Terceira vez');
//         })
//     })
// })

const exec = async () => {
    await myPromise()
    console.log('Primeira vez');

    await myPromise()
    console.log('Segunda vez');

    await myPromise()
    console.log('Terceira vez');
}

exec()