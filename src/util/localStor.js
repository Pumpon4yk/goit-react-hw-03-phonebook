const CONTACT_KEY = 'contact'


function setLocal(arr){
try {
    localStorage.setItem(CONTACT_KEY, JSON.stringify(arr))
} catch (error) {
    console.log(error)
}
}

function getLocal(){
try {
   const res = JSON.parse(localStorage.getItem(CONTACT_KEY))
    if(res){
        return res
    }
} catch (error) {
    console.log(error)
}
    }

    export {setLocal, getLocal};