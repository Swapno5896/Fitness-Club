import { combineReducers } from 'redux'
import {fakeDataClass, fakedataEquipment} from '../components/Sheared/Sheared'

 const classReducer =  (classState=fakeDataClass, action) =>{
    if(action.type == 'ADD_CLASS'){
        return fakeDataClass
    }
    return fakeDataClass
}

 const equipmentReducer = (equipmentState=fakedataEquipment,action) =>{
    if(action.type=='ADD_EQUIPMENT'){
        return fakedataEquipment
    }
    return fakedataEquipment
}

export const Reducer = combineReducers({
    fakeDataClass:classReducer,
    fakedataEquipment:equipmentReducer
})