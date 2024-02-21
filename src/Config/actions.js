export const Add_user=(info)=>{
    return{
        type:'Add',
        payload:info
    }
}
export const Update_user=(info)=>{
    return{
        type:'Update',
        payload:info
    }
}
export const Delete_user=(id)=>{
    return{
        type:'Delete',
        payload:id
    }
}