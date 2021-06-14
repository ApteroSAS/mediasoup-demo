let protooPort = 4443;

if (window.location.hostname === 'test.mediasoup.org')
	protooPort = 4444;

export function getProtooUrl({ roomId, peerId })
{
	//const hostname = window.location.hostname;
	//return `wss://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}`;
	//return `wss://dedicatedwebrtc4.aptero.co:443/?roomId=${roomId}&peerId=${peerId}`;
	//return 'wss://dedicatedwebrtc5.aptero.co/?roomId='+roomId+'&peerId='+peerId+'';
	return 'wss://dedicatedwebrtc5.aptero.co:6443/?roomId='+roomId+'&peerId='+peerId+'';

}

