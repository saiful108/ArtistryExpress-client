import {  useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import dark from "../assets/dark.png";
import light from "../assets/light.png";
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];


const Navbar = ({darkMode, setDarkMode}) => {
  const {user,logOut}=useAuth()
  
  const handleLogout=()=>{
        logOut()
    .then(()=>{
     
          Swal.fire({
            title: "User Logout Successfully",
            text: "Successfully",
            icon: "success"
          });
        
      
     
    })
    .catch((error)=>console.log(error))
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const linkCss="text-sm font-semibold leading-6 text-gray-900   -mx-3 block rounded-lg px-3 py-2 sm:text-base  sm:leading-7  hover:bg-gray-50"
  const logoIcon=<>
  <Link to='/' className="-m-1.5 p-1.5 ">
           
           <div className="flex items-center">
           <img
              className="h-8 w-auto"
              src="https://i.ibb.co/d2MnSRR/pav-removebg-preview1.png"
              alt=""
            />
             <p className="">ArtistryExpress</p>
             
           </div>
          </Link></>
          const links=<>
          <NavLink  to='/'  className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#f35582] border-b-4 border-[#FF497C]"
                    : "hover:text-[#6c152d]"
                }>
            Home
          </NavLink>
          <NavLink  to='/a'  className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#f35582] border-b-4 border-[#FF497C]"
                    : "hover:text-[#6c152d]"
                }>
          All Art & craft Items
          </NavLink>
          <NavLink  to='/b'  className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#f35582] border-b-4 border-[#FF497C]"
                    : "hover:text-[#6c152d]"
                }>
          Add Craft Item
          </NavLink>
          <NavLink  to='/features'  className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#f35582] border-b-4 border-[#FF497C]"
                    : "hover:text-[#6c152d]"
                }>
          My Art&Craft List
          </NavLink>

          <div className=" w-[50px]">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className=" p-1 mr-3 flex items-center"
            >
              <img
                className="md:w-full   w-10 object-cover"
                src={darkMode ? light : dark}
                alt=""
              />
            </button>
          </div>
          
          </>

  return (
    <header className="bg-white ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          {/* img */}
          {logoIcon}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 ">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1  text-gray-900 text-sm font-semibold leading-6    -mx-3  rounded-lg px-3 py-2 sm:text-base  sm:leading-7  hover:bg-gray-50">
              Product
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4 ">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
{/* links */}
          {links}
          
          
        </PopoverGroup>
        {
          user?<div className="hidden lg:flex lg:flex-1 lg:justify-end">
            
          <button onClick={()=>handleLogout()} className="btn text-sm font-semibold text-gray-900">
            Log out <span aria-hidden="true">&rarr;</span>
          </button>
          {
            user&& <img src={user.photoURL} alt="user image" data-tooltip-id="my-tooltip"
            data-tooltip-content={user.displayName} className="w-10 h-10 rounded-full " />
          }
          {/* tooltip */}
          <Tooltip id="my-tooltip" />
        </div>:<div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to='/login' className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        }
       
      
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* img */}
            {logoIcon}
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
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                {links}
                
              </div>
              {
                user?<div className="py-6">
                <button onClick={()=>handleLogout()} className="btn -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"                               
                >
                  Logout
                </button>
                
              </div>:<div className="py-6">
                <Link to='/login' className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                   
                >
                  Log in
                </Link>
              </div>
              }
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
