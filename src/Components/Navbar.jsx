import React from 'react'
import {AnimatePresence, motion} from "motion/react"
import { easeIn } from 'motion'

function Navbar() {
  return (
    <div className=' sticky w-11/12 tracking-wider p-4 m-3 justify-between text-neutral-200 mx-auto flex items-center'>
        <div className='text-2xl'>
            CodeTech
        </div>

        <div className='flex gap-10 py-3 px-10 relative group rounded-md text-neutral-400 overflow-hidden  bg-neutral-800 p-2'>
            {
                ["Home", "Contact","Testimonials"].map((ele, index) => (
                    index == 2 ?
                    (
                        <div className="h-6 overflow-hidden w-fit">
                            {/* Default text */}
                            <motion.div
                                initial={{y:0}}
                                whileHover={{ y: "-50%" ,
                                    duration:0.4,
                                    transition:[.33, 1, 0.68, 1]
                                }}
                                
                                className="flex group flex-col"
                            >
                                <span className="text-neutral-400">{ele}</span>
                                <span className="text-neutral-200">{ele}</span>


                            </motion.div>
                            
                        </div>
                    )
                    :
                    (<div
                     className='h-6 border-r-[0.1px] border-neutral-700 pr-10 overflow-hidden w-fit'>
                        <motion.div 
                        initial={{y:0}}
                        whileHover={{
                            y:"-50%",
                            transition:[0.33, 1, 0.68, 1],
                            duration:0.4
                        }}
                        className='flex flex-col'>
                            <span className='text-neutral-400'>{ele}</span>

                            <span className='text-neutral-200'>{ele}</span> 
                        </motion.div>
                        

                    </div>)
                    
                ))
            }
        </div>

        <div className='flex gap-4 px-4'>
            
            <button className='px-6 py-1 rounded-md'>
                Login
            </button>

            <button className='px-6 py-1 rounded-md bg-neutral-500 text-black'>
                Signup
            </button>
        </div>
    </div>
  )
}

export default Navbar