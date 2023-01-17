
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import IMAGES from '../../constant/images'

export default function SelectCity() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[9999]" onClose={()=> null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black-2e2 bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center text-[#100E0E]">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-[0px_3px_6px_#00000029] transition-all">
                  <div className='flex relative mb-3'>
                      <input type="text" className="form-control" placeholder='Delhi' />
                      <button className="custom_button -ml-3">SEARCH</button>
                  </div>
                  <div className='text-center'>
                    <h3 className='text-lg font-semibold'>Select You City</h3>
                    <p>to view service</p>
                    <p className='text-xs mt-2'>We provide services for women only</p>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-6 items-end">
                    <div><Image src={IMAGES.City1} alt="City1" className='scale_img max-w-[60%]'/><h6 className='text-xs text-center'>Delhi / NCR</h6></div>
                    <div><Image src={IMAGES.City2} alt="City1" className='scale_img max-w-[60%]'/><h6 className='text-xs text-center'>Mumbai</h6></div>
                    <div><Image src={IMAGES.City3} alt="City1" className='scale_img max-w-[60%]'/><h6 className='text-xs text-center'>Ahemadabad</h6></div>
                  </div>
                  <div className="form_check mt-6">
                      <input type="checkbox" id="s_city" />
                      <label className='whitespace-nowrap'>
                      My city is not listed
                      </label>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}