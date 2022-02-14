import React from 'react';
export const TaskBanner = props => (
    <h4 className='bg-sucess text-white text-center p-4'>
          Welcome {props.userName}  <hr /> Tareas por hacer: {props.taskItem.filter(t  => !t.done).length}
    </h4>
) 