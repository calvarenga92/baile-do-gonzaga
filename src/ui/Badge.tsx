import {cn} from '@/lib/cn'; 

export default function Badge({className,...r}:any){
    return <div className={cn('badge',className)} {...r}/>
} 
