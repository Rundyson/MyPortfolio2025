import useTheme from "./useTheme";

export default function BackgroundVideo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const videoSrc = isDark ? "/images/bg-light.mp4" : "/images/bg-dark.mp4";

  return (
    <>

      <video
        key={videoSrc} 
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>


    </>
  );
}
