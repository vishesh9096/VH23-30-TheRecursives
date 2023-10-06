import AgoraUIKit from 'agora-rn-uikit';

const VideoCall = () => {
    const connectionData = {
        appId: 'b907762bc06a4b5695a7e12f1e6f6cbd',
        channel: 'test',
        token: '007eJxTYHiqItSYaHlTa4HEqRW1fwN+PppXrNh8/cHRpvyY47s2v5yhwJBkaWBubmaUlGxglmiSZGpmaZponmpolGaYapZmlpyU0mYtl9oQyMjw8LIgMyMDBIL4LAwlqcUlDAwA/qQh5w==', // enter your channel token as a string 
       };
  return(
    <AgoraUIKit connectionData={connectionData} />
   )
}

export default VideoCall;