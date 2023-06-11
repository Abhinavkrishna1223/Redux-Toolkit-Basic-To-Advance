import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {MdDeleteForever} from 'react-icons/all.js'
import { removeUser } from '../store/slices/UserSlice';

const Displayusers =()=> {

    const dispatch = useDispatch();

    const data = useSelector((state)=>{  // Through the state passed in useSelector we can axis state of store //

        return state.users;

    })

    console.log(data)

    const deleteUser = (id) =>{
       dispatch(removeUser(id))
    }

  return (
    <div>
        {data.map((user, id)=>{
            return(
                <ul key={id}>
                <li>{user}</li>
                <button onClick={()=> deleteUser(id)} className=' btn-delete'>
                    <MdDeleteForever className='delete-icon'/>
                </button>
                </ul>
            )
        })}
    </div>
  )
}

export default Displayusers;