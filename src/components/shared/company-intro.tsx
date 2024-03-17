import { BsCheck } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa6'
import { Container, CustomButton, Stack } from '../ui'
import { FrameImage } from '.'
import { Body, Heading } from '../typography'

export const CompanyIntro = () => {
  return (
    <Container styles="py-12 md:py-24 bg-[url('/images/dashed.png')] bg-no-repeat bg-contain bg-right-bottom">
    <Stack gap="gap-12 md:gap-28">
      <div className="basis-6/12 relative">
        <div className="flex items-center justify-center play w-20 h-20 md:w-24 md:h-24 text-white rounded-full bg-gradient-to-r from-red-500 to-orange-500 absolute  top-2/4 -translate-y-2/4 md:-right-10 right-2/4 translate-x-2/4 md:translate-x-0   z-10">
          <FaPlay size={24} />
        </div>
        <FrameImage image="/images/kids-with-tablet.jpg" />
      </div>
      <div className="basis-6/12">
        <Stack direction="flex-col" styles="gap-8">
          <Heading title="Unleashing the Power of Robotics for Young Innovators." />
          <Body title=" WAAQ Fusion Integrated Services is a Lagos-based Ed-Tech startup founded in 2020 that aims to improve the existing education system with focus on educational consultancy which includes; Curriculum Development, School Strategic Planning, School Finance Training and Technology Integration." />

          <Body title="Besides, WAAQ Fusion is also a strong advocate of real-world and hands-on learning methodology, with strong bias for the followings;" />

          <Stack direction="flex-col" gap="gap-6">
            <div className="flex gap-3">
              <div className="text-green-500">
                <BsCheck size={24} />
              </div>
              <Body title="Coding" />
            </div>
            <div className="flex gap-3">
              <div className="text-green-500">
                <BsCheck size={24} />
              </div>
              <Body title="Robotics" />
            </div>
            <div className="flex gap-3">
              <div className="text-green-500">
                <BsCheck size={24} />
              </div>
              <Body title="Artificial Intelligence" />
            </div>
            <div className="flex gap-3">
              <div className="text-green-500">
                <BsCheck size={24} />
              </div>
              <Body title="Internet of Things (IoT)" />
            </div>
            <div className="flex gap-3">
              <div className="text-green-500">
                <BsCheck size={24} />
              </div>
              <Body title="3D Printing" />
            </div>
          </Stack>
          <div>
            <CustomButton
              title="learn more"
              styles="shadow-2xl uppercase font-bold"
            />
          </div>
        </Stack>
      </div>
    </Stack>
  </Container>
  )
}

