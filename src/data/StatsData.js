import React from 'react'
import { GiEarthAmerica } from 'react-icons/gi'
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'

export const StatsData = [
    {
        icon: ( 
            <GiEarthAmerica 
                css={`
                    color: #047bf1;
                `}
            />
         ),
        title: "Over 100 destinations",
        desc: "Travel around the wolrd...",
    },
    {
        icon: ( 
            <MdAirplanemodeActive
                css={`
                    color: #047bf1;
                `} 
            />
        ), 
        title: "Discover the world",
        desc: "Travel around the wolrd...",
    },
    {
        icon: ( <MdTimer css={`color: #047bf1;`} /> ),
        title: "VIP destinations",
        desc: "Luxurious places...",
    },
    {
        icon: ( <FaMoneyCheck css={`color: #047bf1;`} /> ),
        title: "Over 100 destinations",
        desc: "Travel around the wolrd...",
    },
]