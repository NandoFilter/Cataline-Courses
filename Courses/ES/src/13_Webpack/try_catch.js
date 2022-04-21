const myPromise = () => new Promise((resolve, reject) => {
    return setTimeout(() => {
        resolve('Error')
    }, 2000)
})

// myPromise().then(() => {
//     console.log('Sucesso');
// }).catch((error) => {
//     console.error(error);
// })

const exec = async () => {
    try {
        await myPromise()
        console.log('Sucesso');
    } catch (error) {
        console.error(error);
    } finally {
        console.log('Finalizado');
    }
}

exec()