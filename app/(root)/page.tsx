import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {
  return (
    <section className="home">
<div className="home-content">
    <header className="content-heae">
<HeaderBox
type="greeting"
title="Welcome"
user={loggedIn?.firstName || 'Guest'}
subtext="Access and manage your account and transactions efficiently"
/>
    </header>
</div>
    </section>
  )
}

export default Home