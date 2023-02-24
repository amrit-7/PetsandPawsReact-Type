export const fetchData = async <T> (url:string):Promise<T> =>{
    const response = await fetch(url)
    return await response.json()
}


/*
export const getData = async <T>(url:string):Promise<T> =>{
    const response = await fetch(url)
    return await response.json();
}
*/