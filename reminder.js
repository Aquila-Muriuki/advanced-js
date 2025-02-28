function solution(message,k){
    const words=message.split(" ")
    let notifiction = " "

    if(words.join(" ").length<=k){
        return message
    }
    for(let i=0;i<words.length;i++){
        const tempNotification=notifiction+(notifiction?"":"")+words[i]

        if(tempNotification.length<=k){
            notifiction=tempNotification
        }
           else{
           
            if(notifiction===0){
                return"..."
            }
            const dots="..."
            const finalSpace = K-Notification.length-dots.length
               if(finalspace>=0){
                return notifiction+" "+d0ts;
               }else{
                let currentString=" "
                let currentLength=0
               }

               for(let j=0; j<words.length;J++){

                const tempString=n
               }

           }

       

    }
}