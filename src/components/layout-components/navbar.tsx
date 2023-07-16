import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#' },
    { name: 'Our Story', href: '#' },
    { name: 'Know the Chef', href: '#' },
    { name: 'Awards', href: '#' },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="absolute container mx-auto inset-x-0 top-0 z-50 " >
            <nav className="flex items-center gap-x-6 p-6 px-5 md:px-10 lg:px-8 justify-between">
                <div className="flex lg:flex-1">
                    <a href="#" className="lg:-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img src="./logo.png" alt="Yaba-Logo"  />
                    </a>
                </div>
                <div className="hidden md:flex gap-x-8 lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm leading-6 text-white  hover:text-primary">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="flex lg:flex-1 items-center justify-end gap-x-6 lg:gap-x-2">
                    <div className="hidden md:block lg:hidden h-[20px] w-px bg-white"></div>
                    <a href="#" className="hidden md:block text-sm font-semibold leading-6 text-white hover:text-primary">En</a>
                    <div className="hidden lg:block h-[20px] w-px bg-white"></div>
                    <a
                        href="#"
                        className="hidden lg:block bg-primary px-6 py-2 ml-4 text-sm font-semibold text-black hover:text-primary hover:bg-black">Contact us</a>
                </div>
                <div className="flex md:hidden items-center gap-x-3">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                    </button>
                    <div className="block lg:hidden h-[20px] w-px bg-white"></div>
                    <a href="#" className="text-sm font-semibold leading-6 text-white">En</a>
                </div>
            </nav>
            <Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center gap-x-6">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">YABA Company</span>
                            <img src="./logo.png" alt="Yaba-Logo" className='h-8 w-auto' />
                        </a>
                        <a
                            href="#"
                            className="ml-auto bg-primary px-3 py-2 text-sm font-semibold text-black"
                        >
                            Contact us
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
