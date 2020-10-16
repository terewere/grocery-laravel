import can from './can'
export default function gate (param){

   
   return ({ next, from, }) => {
        
        if( can(param) ) next()
        else next( from.fullPath)
        
    }

 
            
         
     }
  
    
    