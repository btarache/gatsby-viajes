import React from 'react'
import { GiEarthAmerica } from 'react-icons/gi'
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'
import '../components/styles/Iconos.css'

export const StatsData = [
    {
        icon: ( 
            <GiEarthAmerica className="icono-uno"
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
            <MdAirplanemodeActive className="icono-dos"
                css={`
                    color: #047bf1;
                `} 
            />
        ), 
        title: "Discover the world",
        desc: "Travel around the wolrd...",
    },
    {
        icon: ( <MdTimer className="icono-uno" css={`color: #047bf1;`} /> ),
        title: "VIP destinations",
        desc: "Luxurious places...",
    },
    {
        icon: ( <FaMoneyCheck className="icono-dos" css={`color: #047bf1;`} /> ),
        title: "Over 100 destinations",
        desc: "Travel around the wolrd...",
    },
]