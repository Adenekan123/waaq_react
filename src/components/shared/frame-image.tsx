import { IFrameImage } from "../../types"

export const FrameImage = ({image}:IFrameImage) => {
  return (
    <div className="w-full h-full p-4 drop-shadow-lg bg-white rounded-2xl">
      <img src={image} alt='frame_image' className="w-full h-full rounded-2xl object-cover" />
    </div>
  )
}

