import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

export default function Room() {
    const {id}=useParams()

    const MyRoom=async(element)=>{
        const appId= 1232962649;
        const serverSecret="f2be454e1865d4c26bdc3c1fbf7384ef";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serverSecret,id,Date.now().toString(),id)
          const zc=ZegoUIKitPrebuilt.create(kitToken)

          zc.joinRoom({
            container:element,
            sharedLinks:[
                {
                    name:"Copy Link",
                    url:`http://localhost:5173/room/${id}`
                }
                
            ],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall
            },
           showScreenSharingButton:false
          })


    }
  return (
    <div>
      <div ref={MyRoom}/>

    </div>
  )
}
