import { useEffect, useRef } from "react";
import io from "socket.io-client";
const url = process.env.REACT_APP_BACKEND_URL;


const useSocket = (studentId) => {
    const socketRef = useRef();

    if (!socketRef.current) {
        socketRef.current = io(url, { withCredentials: true });
    }

    useEffect(() => {
        const socket = socketRef.current;
        socket.emit("userConnected", studentId);


        return () => {
            socket.emit("userDisconnected", studentId);
        };
    }, [studentId]);

    return socketRef.current;
};

export default useSocket;
