

const movie = async () => {
    const promiseWifeBringingTicks = new Promise( (resolve,reject) => {
        setTimeout(() => {
            resolve('ticket shows');
        }, 3000);
    })
    
    const getPopcorn = new Promise( (resolve,reject) => {
        console.log('husband : we should go in');
        console.log('wife : no i am hungry');
        resolve(`popcorn`);
    })

    const getButter = new Promise( (resolve,reject) => {
        console.log("husband : We should go in");
        console.log("wife : No i need butter on my popcorn")
        resolve(`butter`);
    })

    const getColdrinks = new Promise( (resolve,reject) => {
        console.log("husband : We should go in");
        console.log("wife : No i need coldrinks")
        resolve(`cold drink`);
    })

    let data = await Promise.all([promiseWifeBringingTicks,getPopcorn,getButter,getColdrinks])

    
    return Promise.reject(data)
}

movie().catch(data=>console.log(data))