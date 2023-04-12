interface EmbedProps {
  embedKey: string | undefined;
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
        className="m-auto aspect-video w-[70%]"
      />
    </div>
  );
};
export default YoutubeEmbed;
