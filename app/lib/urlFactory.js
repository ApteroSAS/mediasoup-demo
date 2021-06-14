
export function getProtooUrl({ roomId, peerId},hostname,protooPort)
{
	if(!hostname){
		hostname = window.location.hostname;
	}
	if(!protooPort){
		protooPort = 443
	}
	return `wss://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}`;
}

