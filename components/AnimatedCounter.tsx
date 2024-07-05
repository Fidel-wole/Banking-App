import React from 'react'
import CountUp from 'react-countup/build/CountUp'

const AnimatedCounter = ({amount}:{amount: number}) => {
  return (
    <div>
        $<CountUp
        decimals={2}
        decimal=','
        prefix='$'
        end={amount} />
    </div>
  )
}

export default AnimatedCounter