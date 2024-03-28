export const addPhoneNumber = (number : string) => {
    if (number.includes("+234")){
        return number
    }
    else{
        const stringWithoutFirstLetter = number.substring(1);
        const modifiedString = "+234" + stringWithoutFirstLetter;
        return modifiedString; 
    }
}

export const removeTime = (time : string) => {
    let day = time.split("T")
    return day[0]

}