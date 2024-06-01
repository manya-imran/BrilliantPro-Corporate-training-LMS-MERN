import React from 'react'
import MaterialInd from './MaterialInd'

const Materials = ({MaterialList, onDelete, onToggle}) => {
  return (
    <>
         {MaterialList.map((material,index)=>(
         <MaterialInd key={index}
          mInd = {material}
          onDelete={onDelete} 
          onToggle={onToggle}/>
         ))}
         </>
  )
}

export default Materials
