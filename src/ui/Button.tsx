import {cn} from '@/lib/cn'; export default function Button({variant='primary',className,...r}:any){return <button className={cn(variant==='primary'?'btn-primary':'btn-ghost',className)} {...r}/>}
