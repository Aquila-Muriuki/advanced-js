//notification truncate

//have to split the message

function solution(message,k){
    const words= message.split(' ')
    let notification=" "

    if(words.join('').length<=k){
        return message
    }

    //creating a loop 
    for(let i=0;i<words.length;i++){

        const tempNotfication=notification+(notification?" ":" ")+words[i]


        if(tempNotfication.length<=K){
            notification=tempNotfication
        }
        else{

            if(notification.length===0)
                return "..." 

            const dots= "..."
            const remainingSpace=k-notification.length-1-dots.length

            if(remainingSpace>=0){
                return notification+""+dots
            }

            else{
                let currentString=""
                let currentLength=0

                for(let j=0; j<words.length;j++){

                    const tempString=currentString+(currentString?"":"")+words[j]


                    if(tempString.length<=K-4){
                        currentString=tempString
                        
             }
             else{
                if(currentString===0){
                     return"...."
                }
                return currentString+ '....'
                   
             }


                }
            } 


        }

    }
    return notification


}