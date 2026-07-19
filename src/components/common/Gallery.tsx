import { useEffect, useRef, useState } from 'react'
import type { Project, ProjectImage } from '../../types/portfolio'

type MediaFrameProps = {
  image: ProjectImage
  index: number
  projectName: string
  onOpen: (index: number) => void
}

function MediaFrame({ image, index, projectName, onOpen }: MediaFrameProps) {
  return (
    <figure className={`media-frame ${image.featured ? 'is-featured' : ''}`}>
      <button type="button" onClick={() => onOpen(index)} aria-label={`Enlarge ${image.caption ?? `image ${index + 1}`} from ${projectName}`}>
        <img src={image.src} alt={image.alt} loading="lazy" />
      </button>
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  )
}

export function Gallery({ project }: { project: Project }) {
  const [active, setActive] = useState<number | null>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const desktopImages = project.images.map((image, index) => ({ image, index })).filter(({ image }) => image.type === 'desktop')
  const mobileImages = project.images.map((image, index) => ({ image, index })).filter(({ image }) => image.type === 'mobile')

  useEffect(() => {
    if (active !== null) closeButton.current?.focus()
  }, [active])

  return (
    <>
      <div className="gallery" aria-label={`${project.name} screenshots`}>
        {desktopImages.length > 0 && (
          <div className="desktop-gallery">
            {desktopImages.map(({ image, index }) => <MediaFrame key={image.src} image={image} index={index} projectName={project.name} onOpen={setActive} />)}
          </div>
        )}
        {mobileImages.length > 0 && (
          <div className={`mobile-gallery mobile-gallery-${mobileImages.length}`}>
            {mobileImages.map(({ image, index }) => <MediaFrame key={image.src} image={image} index={index} projectName={project.name} onOpen={setActive} />)}
          </div>
        )}
      </div>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${project.name} screenshot`} onClick={() => setActive(null)} onKeyDown={(event) => { if (event.key === 'Escape') setActive(null) }}>
          <button ref={closeButton} className="lightbox-close" type="button" onClick={() => setActive(null)}>Close ×</button>
          <img src={project.images[active].src} alt={project.images[active].alt} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </>
  )
}
