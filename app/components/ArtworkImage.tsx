import type { OptionalText } from "../lib/types";

type ArtworkImageProps = {
    src: OptionalText;
    title: string;
};

export default function ArtworkImage({ src, title }: ArtworkImageProps) {
    if (!src) {
        return <p className="no-image">No image available</p>;
    }

    return (
        <img src={src} alt={title} loading="lazy" className="artwork-image" />
    );
}