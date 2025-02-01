'use client'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

import { Box } from '@/components/Box'
import { BsInputCursor } from "react-icons/bs";
import { HiCodeBracket } from "react-icons/hi2";
import { AiOutlineFontSize } from "react-icons/ai";
import { AiFillPicture } from "react-icons/ai";
export default function SideNavigation({ }) {

  const router = useRouter()

  return (
    <div
      className={`z-50 fixed inset-0 w-20 bg-slate-800 text-white flex flex-col transform  
      duration-600 transition-all items-center p-10`}
    > Use Drag

      <nav className="flex flex-col space-y-2">

        <div style={{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }} title='text-input'>
          <Box component={{ icon: BsInputCursor, type: "FORM_ELEMENT", name: "text" }} />
        </div>
        <div style={{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }} title='text-input'>
          <Box component={{ icon: HiCodeBracket, type: "FORM_ELEMENT", name: "checkbox" }} />
        </div>
        <div style={{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }} title='text-input'>
          <Box component={{ icon: AiOutlineFontSize, type: "FORM_ELEMENT", name: "number" }} />
        </div>
        <div style={{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }} title='text-input'>
          <Box component={{ icon: AiFillPicture, type: "BOX", name: "text_input" }} />
        </div>

      </nav>
    </div>
  )
}
