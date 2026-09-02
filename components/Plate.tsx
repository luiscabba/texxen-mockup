import Image from 'next/image';
import type { Media } from '@/content/projects';

/**
 * Client work brings its own palette, so the frame around it stays neutral.
 * That is the mechanism that lets visually incompatible projects sit together.
 */
export default function Plate({ media }: { media: Media }) {
  return (
    <figure>
      <div className="plate">
        <Image src={media.src} alt={media.caption} width={1400} height={1050} sizes="(max-width: 1160px) 100vw, 1040px" />
      </div>
      <figcaption className="cap">{media.caption}</figcaption>
    </figure>
  );
}
