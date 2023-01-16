
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

        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black-2e2 bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[9999]" onClose={closeModal}>
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
                  <div className='text-center'>
                    <h3 className='text-lg font-bold'>Select You City</h3>
                    <p className='text-base'>to view service</p>
                    <p>We provide services for women only</p>
                  </div>
                  <div className="mt-2 flex gap-5 items-end justify-center">
                    <div><Image src={IMAGES.City1} alt="City1"/><h6 className='text-xs text-center'>Delhi / NCR</h6></div>
                    <div><Image src={IMAGES.City2} alt="City1"/><h6 className='text-xs text-center'>Mumbai</h6></div>
                    <div><Image src={IMAGES.City3} alt="City1"/><h6 className='text-xs text-center'>Ahemadabad</h6></div>
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