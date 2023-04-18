interface EmbedProps {
  embedKey: string;
}
const YoutubeEmbed = (props: EmbedProps) => {
  const { embedKey: key } = props;
  return (
    <div className="">
      <iframe
        width=""
        height=""
        src={`https://www.youtube.com/embed/${key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="m-auto aspect-video w-[60%] border-4 border-secondary"
      />
    </div>
  );
};
export default YoutubeEmbed;
