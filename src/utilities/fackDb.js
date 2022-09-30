const addToDb=(breakTime)=>{
    let breakTimes={};

    //gate break-time from local storage
    const storedCart=localStorage.getItem('break-time');
    if(storedCart){
        breakTimes=JSON.parse(storedCart)
    }

    //add to db
    breakTimes['breakTime']=breakTime;
    localStorage.setItem('break-time', JSON.stringify(breakTimes))
}

const getStoredCart=()=>{
    let breakTimes={};

    //gate break-time from local storage
    const storedCart=localStorage.getItem('break-time');
    if(storedCart){
        breakTimes=JSON.parse(storedCart)
    }
    return breakTimes;
}
export{addToDb, getStoredCart};