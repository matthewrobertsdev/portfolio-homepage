import React from 'react'
import './view/App.css'
import Spacer from './view/Spacer'
import ProjectHeadings from './view/ProjectHeadings'
import LinkButton from './view/LinkButton'
import ImageView from './view/ImageView'
import VideoView from './view/VideoView'
import DarkGreenClockSuite from './media/GreenClockDark.png'
import TeeHeeVideo from './media/Tee-Hee.mp4'
import TeeHeeScreenShot from './media/Tee-Hee_start_screen.png'
import BookmarkPageScreenShot from './media/bookmark_page_dark_mode.png'

function App() {
  return (
    <body>
    <main>
      {/* title and GitHub link */}
      <h1 className="title text-color"> Matthew Roberts: Software Developer and Tutor </h1>
      <a className="link-button grid-button" href="https://github.com/matthewrobertsdev">My GitHub</a>
      <Spacer/>
      {/* Clock Suite */}
      <ProjectHeadings title='Clock Suite for macOS' description='A macOS app that has alarms, 
      timers, a resizable clock, and a dock clock.  Highly customizable with great 
      use of color for light mode and dark mode.'/>
      <ImageView src={DarkGreenClockSuite}
      alt="Clock Suite with clock, timers, and alarms showing"
      classProp='large-image'/>
      <LinkButton url='https://matthewrobertsdev.github.io/Clock-Suite/#/'
      name='Clock Suite Homepage'/>
      {/* Tee Hee for A&X Analytics */}
      <Spacer/>
      <ProjectHeadings title='Tee-Hee for A&X Analytics' description=
        'An iPhone app programmed with Swift that lets you view and filter local 
        events for children, search for events, and which can save, read, and 
        delete events to and from an in-app calendar'/>
      <VideoView posterSrc={TeeHeeScreenShot} src={TeeHeeVideo} classProp='iOS-media'/>
      {/* Bookmark Page */}
      <Spacer/>
      <ProjectHeadings title='Bookmark Page' description="A react and redux application 
        that let's you add, edit, delete, rearrange, save, and load bookmarks, with dark 
        mode and light mode"/>
      <ImageView src={BookmarkPageScreenShot}
      alt="Bookmark page with links in dark mode"
      classProp='large-image'/>
      <LinkButton url='https://matthewrobertsdev.github.io/BookmarkPage/index'
      name='Bookmark Page'/>
      <LinkButton url='https://github.com/matthewrobertsdev/bookmark-page'
      name='Bookmark Page GitHub Repo'/>
      <Spacer/>
    </main>
    <footer>
      <h3 className='text-color'>Copyright © 2020-2021 Matt Roberts</h3>
      <br/><br/>
    </footer>
    </body>
  );
}

export default App;
