// import React from "react";
export function createConnection(serverUrl, roomId) {
    return {
        connect() {
            console.log(
                "✅Connecting to" + roomId + "room at the" + serverUrl + "..."
            );
        },
        disconnect() {
            console.log("❌ Disconnect from" + roomId + "room at" + serverUrl);
        },
    };
}


