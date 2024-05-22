import VideoJS from "./VideoJs";
const VideoPlayer = () => {
  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    poster: "https://dljr4bana07x0.cloudfront.net/1716368138230-screenshot-2024-05-22-105358.png",
    sources: [
      {
        src: "https://dno88kzu8qkxq.cloudfront.net/1716367618932-shammah-jackson-rugby-highlights-2023/shammah-jackson-rugby-highlights-2023.m3u8",
        type:"application/x-mpegURL"
      },
    ],
  };

  return <VideoJS options={videoJsOptions} />;
};

export default VideoPlayer;
