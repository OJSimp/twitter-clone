
import styles from './page.module.css'

// Components
import LeftSideNav from './components/navigation/LeftSideNav';
import NewsFeed from './components/body/NewsFeed';
import RightSideNav from './components/navigation/RightSideNav';

// Supabase
import { Database } from '@/lib/supabase.types';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'

export default async function Home() {

  const supabase = createServerComponentClient<Database>({ 
    cookies, 
  })

  const {data, error} = await supabase.auth.getUser();

  console.log({ data, error })


  return (
    <div className='body'>
      
      < LeftSideNav />
      < NewsFeed />
      < RightSideNav />

      
    </div>
  )
}
