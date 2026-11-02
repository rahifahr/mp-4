export default function ArtworkImage({ src, title }) {
    if (!src) {
        return <p className="no-image">No image available</p>;
    }

    return (
        <img src={src} alt={title} loading="lazy" className="artwork-image" />
    );
}