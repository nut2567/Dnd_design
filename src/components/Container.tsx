"use client";
import { Box } from './Box'
import { Dustbin } from './Dustbin'

export default function Container() {
    return (
        <div className=''>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Dustbin greedy={true}>
                    <Dustbin greedy={true}>
                        <Dustbin greedy={true} />
                    </Dustbin>
                </Dustbin>
                <Dustbin>
                    <Dustbin>
                        <Dustbin />
                    </Dustbin>
                </Dustbin>
            </div>
        </div>
    )
}
