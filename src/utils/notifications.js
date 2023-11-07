import {NotificationManager} from "react-notifications";

export const toastSuccessMessage = (message)=>{
    NotificationManager.success(message, "", 1000)
}
export const toastErrorMessage = (message)=>{
    NotificationManager.error(message, "", 1000)
}