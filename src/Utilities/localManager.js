const getFromLocal = (id)=> {  //recipePending
    const values = localStorage.getItem(id);
    return (values?JSON.parse(values):[]);
}

const saveToLocal = (id, values)=> {
    const vals = JSON.stringify(values);
    localStorage.setItem(id, vals);
}

const setToLocal = (id, value)=> {
    const values = getFromLocal(id);
    saveToLocal(id, [...values,value]);
}

const removeFromLocal = (id, value='all')=>{
    if(value==='all'){
        localStorage.removeItem(id);
    }
    const values = getFromLocal(id);
    saveToLocal(id, [...(values.filter(item => item!==value))]);
}

export {setToLocal, getFromLocal, removeFromLocal}