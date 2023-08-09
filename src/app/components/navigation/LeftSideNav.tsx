"use client"

import "./LeftSideNav.scss"

import Link from 'next/link'
import { FiHome, FiSettings, FiInfo } from 'react-icons/fi';
import { BsThreeDotsVertical} from 'react-icons/bs'

interface NavItem {
  icon: React.ReactNode;
  label: string;
}

const navItems: NavItem[] = [
  { icon: <FiHome />, label: 'Home' },
  { icon: <FiSettings />, label: 'Settings' },
  { icon: <FiInfo />, label: 'About' },
];

const LeftSideNav = () => {

 return (
      <nav className="left-side__nav">
       <div>
        {navItems.map((item) => {
        return(
          <Link className='btn-link' href={`/${item.label.toLocaleLowerCase()}`} key={item.label}>
           <span>{item.icon}</span>
           <h3>{item.label}</h3>
         </Link>
          )
        })}
        <button className="btn-primary">Add Tweet</button>
        </div>
        
        <div className="left-side__user">
          <div className="rounded-full bg-slate-400 w-10 h-10"></div>
          <div className="text-left text-sm">
            <div className="font-semibold">Club Of Coders</div>
            <div className="">@clubofcoderscom</div>
          </div>
          <BsThreeDotsVertical />
        </div>
       
      </nav>
      )

}

export default LeftSideNav