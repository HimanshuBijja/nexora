export default function InputBox({Label, type, placeholder}: {Label: string, type: string, placeholder: string}){
    return(
        <div>
            <input className="border-2 px-6 py-2 rounded-lg" type={type} placeholder={placeholder} />

            
        </div>
    )}