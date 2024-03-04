import VideoJS from "./VideoJs";
const VideoPlayer = () => {
  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    poster: "https://savanna-next.vercel.app/sliders/1.jpg",
    sources: [
      {
        src: "https://savanna-trust-api.up.railway.app/api/v1/previews/65dcae2c2ca57129c781ee8c",
        type: "video/mp4",
      },
    ],
  };

  return <VideoJS options={videoJsOptions} />;
};

export default VideoPlayer;
