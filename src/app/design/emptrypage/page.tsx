"use client";
import { useState, useRef } from 'react'
import { useDrop } from 'react-dnd'

export interface DustbinProps {
  greedy?: boolean
  children?: React.ReactNode
}

const Dustbin: React.FC<DustbinProps> = ({ greedy, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hasDropped, setHasDropped] = useState(false)
  const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false)
  const [formElements, setFormElements] = useState<any[]>([]);

  const [{ isOver, isOverCurrent }, drop] = useDrop(
    () => ({
      accept: ['BOX', 'FORM_ELEMENT'],
      drop(_item: unknown, monitor) {
        const didDrop = monitor.didDrop()
        if (didDrop && !greedy) {
          return
        }
        setFormElements((prev) => [...prev, _item]); // 📌 เพิ่ม input ใหม่ลงไป
        console.log('item', _item)
        setHasDropped(true)
        setHasDroppedOnChild(didDrop)
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
    }),
    [greedy, setHasDropped, setHasDroppedOnChild],
  )

  const text = greedy ? 'greedy' : 'not greedy'
  let backgroundColor = 'bg-based'

  if (isOverCurrent || (isOver && greedy)) {
    backgroundColor = 'bg-orange-200'
  }
  drop(ref); // เชื่อม ref ของ drop เข้ากับ ref ของ div

  return (
    <div ref={ref} className={`min-h-full w-full  ${backgroundColor} `}>
      <br />
      {/* {hasDropped && <span>dropped {hasDroppedOnChild && ' on child'}</span>} */}

      {formElements.map((el, index) => (
        <div key={index} >
          {el.type === 'FORM_ELEMENT' && <input type={el.name} placeholder={el.label || ""} />}
        </div>
      ))}
      <div>{children}</div>
    </div>
  )
}

export default function DragAndDropExample() {

  return (
    <main className="flex-1 grid items-center justify-items-center h-full p-10">
      <div className=" bg-gray-200 min-h-full w-10/12 text-black flex flex-1 ">

        <Dustbin>
        </Dustbin>
      </div>

    </main>
  );
}
