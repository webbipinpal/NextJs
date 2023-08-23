import React, {useRef} from "react";
import Image from "next/image";
import Link from "next/link"
import { AiOutlineMenu, AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/Ai';
const Navbar = ({cart, addToCart, clearCart, removeFromCart, subTotal}) => {
    const ref = useRef();
    const toggleCart = () => {
        if(ref.current.classList.contains('transform')){
            ref.current.classList.remove('transform')
        } else if(!ref.current.classList.contains('transform')){
            ref.current.classList.add('transform')
        }
    }
    
    return (
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 shadow-sm">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    <Image src="/logo.webp" width='256' height='48' alt='codeswear logo' />
                </a>
                <div className="flex md:order-2">
                    <div className="cursor-pointer" onClick={toggleCart}>
                        <AiOutlineShoppingCart className="text-4xl" />
                    </div>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <AiOutlineMenu className="text-2xl" />
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                        <li>
                            <Link href="/about" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About 
                            </Link>
                        </li>
                        <li>
                            <Link href="/tshirt" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">T-Shirt 
                            </Link>
                        </li>
                        <li>
                            <Link href="/hoodies" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Hoddies
                            </Link>
                        </li>
                        <li>
                            <Link href="/mugs" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Mugs     </Link>
                        </li>
                        <li>
                            <Link href="stickers" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Stickers</Link>
                        </li>
                        <li>
                            <Link href="contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div ref={ref} className="relative z-10 transform" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <div className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button type="button" className="-m-2 p-2 text-3xl text-pink-400 hover:text-pink-500" onClick={toggleCart}>
                                                        <span className="sr-only">Close panel</span>
                                                        <AiFillCloseCircle className="text-3xl" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ol role="list" className="-my-6 divide-y divide-gray-200"> 
                                                    {Object.keys(cart).length==0 && <div className="my-4">Cart is empty. Please add the item.</div>

                                                    }
                                                        {Object.keys(cart).map((k) => {
                                                            return <li key={k} className="flex py-6">
                                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                                            </div>

                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <a href="#">{cart[k].name}</a>
                                                                        </h3>
                                                                        <p className="ml-4">₹499.00</p>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <p className="text-gray-500 flex">
                                                                        Qty
                                                                        <span className="px-2 text-pink-400 hover:text-pink-500 text-lg"><AiFillMinusCircle onClick={() => {
                                                                           removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)
                                                                        }}/></span>
                                                                        <span> {cart[k].qty} </span>
                                                                        <span className="px-2 text-pink-400 hover:text-pink-500 text-lg"><AiFillPlusCircle onClick={() => {
                                                                           addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)
                                                                        }} /> </span>
                                                                    </p>

                                                                    <div className="flex">
                                                                        <button type="button" className="font-medium text-pink-600 hover:text-pink-500">Remove</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </li>
                                                        })}
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>Subtotal</p>
                                                <p>₹499.00</p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                            <div className="mt-6">
                                                <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-pink-700">Checkout</a>
                                            </div>
                                            <div className="mt-6">
                                                <Link onClick={clearCart} href="#" className="flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-pink-700">Clear Cart</Link>
                                            </div>
                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    or
                                                    <button type="button" className="font-medium text-pink-600 hover:text-pink-500">
                                                        Continue Shopping
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}
export default Navbar;