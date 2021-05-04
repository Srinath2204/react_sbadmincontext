import {useContext} from "react";
import UserContext from '../userContext';

export default function Card(props){
    let data=useContext(UserContext)
    return <>
    <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            {props.data.earnings}
                        </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{props.data.amount}</div>
                    </div>
                        <div class="col-auto">
                            <i class={props.data.icon}></i>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </>
}