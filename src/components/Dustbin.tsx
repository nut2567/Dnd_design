"use client";
import type { CSSProperties, FC, ReactNode } from 'react'
import { useState, useRef } from 'react'
import { useDrop } from 'react-dnd'

function getStyle(backgroundColor: string): CSSProperties {
    return {
        border: '1px solid rgba(0,0,0,0.2)',
        minHeight: '8rem',
        minWidth: '8rem',
        color: 'white',
        backgroundColor,
        padding: '2rem',
        paddingTop: '1rem',
        margin: '1rem',
        textAlign: 'center',
        float: 'left',
        fontSize: '1rem',
    }
}

export interface DustbinProps {
    greedy?: boolean
    children?: ReactNode
}

export interface DustbinState {
    hasDropped: boolean
    hasDroppedOnChild: boolean
}

export const Dustbin: FC<DustbinProps> = ({ greedy, children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [hasDropped, setHasDropped] = useState(false)
    const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false)
    const [itemDropped, setItemDropped] = useState("")
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
    let backgroundColor = 'rgba(0, 0, 0, .5)'

    if (isOverCurrent || (isOver && greedy)) {
        backgroundColor = 'darkgreen'
    }
    drop(ref); // เชื่อม ref ของ drop เข้ากับ ref ของ div

    return (
        <div ref={ref} style={getStyle(backgroundColor)}>
            {text}
            <br />
            {hasDropped && <span>dropped {hasDroppedOnChild && ' on child'}</span>}

            {formElements.map((el, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                    {el.type === 'FORM_ELEMENT' && <input type={el.name} placeholder={el.label || ""} />}
                </div>
            ))}
            <div>{children}</div>
        </div>
    )
}
