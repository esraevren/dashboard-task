export default function Divider({ vertical = false }) {
    return(
        <span className={`${vertical ? 'h-6 w-[1px]': 'h-[1px] w-6'} bg-gray-300 my-2` } />

        
    )
}