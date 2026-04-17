export function Video({ src, ...props }: React.VideoHTMLAttributes<HTMLVideoElement> & { src: string }) {
  return (
    <video
      src={src}
      controls
      className="w-full rounded-lg"
      {...props}
    />
  );
}
