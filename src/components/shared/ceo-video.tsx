import { FrameImage } from '.'
import { Heading } from '../typography'
import { Container, Stack } from '../ui'
import { FaPlay } from 'react-icons/fa6'

export const CeoVideo = () => {
  return (
    <div className="ceo-video">
    <Container
     styles="py-12 md:py-24 ">
      <div className="md:flex items-center">
        <div className="basis-7/12 text-center md:text-left">
          <Stack gap="gap-4" direction="flex-col">
            <Heading type={1} title="Why?" styles="text-orange-500" />
            <Heading type={1} title="What?" styles="text-violet-500" />
            <Heading type={1} title="How?" styles="text-green-500" />
          </Stack>
          <p className="text-md md:text-xl mt-4 mb-12">
            Hear about our Approach from the founders themselves...
          </p>
        </div>
        <div className="basis-5/12 relative">
          <FrameImage image="/images/why-what-how-desktop.webp" />
          <div className="flex items-center justify-center play w-20 h-20 md:w-24 md:h-24 text-white rounded-full bg-gradient-to-r from-red-500 to-orange-500 absolute  top-2/4 -translate-y-2/4 md:-left-10 left-2/4 -translate-x-2/4 md:translate-x-0 z-10">
            <FaPlay size={24} />
          </div>
        </div>
      </div>
    </Container>
  </div>
  )
}

