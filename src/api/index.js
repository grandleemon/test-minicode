
export const getInsuranceTypes = () => {
    return fetch("http://localhost:3000/insurance")
    .then(response => response.json())
}

export const getInfo = () => {
    return fetch("http://localhost:3000/insurance")
    .then(response => response.json())
}