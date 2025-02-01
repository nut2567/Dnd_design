"use client";
import { useRef } from 'react'
import { useDrag } from 'react-dnd'

const style = {
    cursor: 'move',
}

export function Box({ component }: { component: { icon: React.ElementType; type: string, name: string } }) {
    const { icon: Icon, type, name } = component;
    const [{ isDragging }, drag] = useDrag(() => ({
        type: type,
        item: { Icon, type, name },
        isDragging(monitor) {
            const item = monitor.getItem()
            return Icon === item.Icon
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }))

    const opacity = isDragging ? 0.4 : 1

    const ref = useRef<HTMLDivElement>(null);

    drag(ref); // เชื่อม ref ของ drop เข้ากับ ref ของ div
    return (
        <div ref={ref} className='bg-gray-500 border-gray-100 border-2 p-2 m-2 inline-block'
            style={{ ...style, opacity }} >
            <Icon />
        </div>
    )
}
