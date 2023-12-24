import { Fragment, useState } from 'react'
import { InputSwitch } from 'primereact/inputswitch';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react'

export default function NavbarComp(props) {
    const [checked, setChecked] = useState(false);
    const handleOnChange = () => {
      setChecked(!checked); 
      props.toggleStyle();
    }
    // const [myStyle, setStyle] = useState(
    //   {
    //     backgroundColor: 'red-800'
    //   }
    // );
    // let toggleStyle = () => {
    //   if(myStyle.backgroundColor === 'red-800' && checked === false)
    //   {
    //     setStyle ({
    //       backgroundColor: 'black'
    //     });
    //   }
    //   else{
    //     setStyle({
    //       backgroundColor: 'red-800'
    //     });
    //   }
    // }

  return (
    <>
      <Disclosure as="nav" className={`bg-${props.mode === 'gray-800' ? 'gray-800' : 'gray-800'}`}>
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
               
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to="/"> <h1 className={`text-2xl font-bold italic text-${props.mode === 'gray-800' ? 'white' : 'white'}`}>Text-Conveter</h1> </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <Link to="/" className={`text-${props.mode === 'gray-800' ? 'white' : 'white'} hover:bg-gray-700 cursor-pointer rounded-md px-3 py-2 text-md font-medium`}>
                        {props.page1}
                      </Link>
                      <Link to="/about" className={`text-${props.mode === 'gray-800' ? 'white' : 'white'} hover:bg-gray-700 cursor-pointer rounded-md px-3 py-2 text-md font-medium`}>
                        {props.page2}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <InputSwitch checked={checked} onChange={handleOnChange}/>
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </>
      </Disclosure>
    </>
  );
}