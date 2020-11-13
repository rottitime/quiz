import React, { useEffect } from "react";
import Pusher from "pusher-js";

const PusherTest: React.FC = () => {

    useEffect(() => {

        //only log for dev environemnt
        Pusher.logToConsole = process.env.NODE_ENV === 'development' && true;

        const pusher = new Pusher('89387c1cc4f46e31352b', {
            //encrypted: true,
            cluster: 'eu'
        });

        const channel = pusher.subscribe('my-channel1');
        channel.bind('my-event', (data: any) => {
            // console.log(JSON.stringify(data));
        });
    }, [])

    return <div>
        <h1 className="">Pusher Test component</h1>
        <p>
            <a href="http://localhost:5000/pusher-test">http://localhost:5000/pusher-test</a>
        </p>
    </div>

}

export default PusherTest