import React from 'react'
import './view/App.css'
import Spacer from './view/Spacer'
import ProjectHeadings from './view/ProjectHeadings'
import LinkButton from './view/LinkButton'
import ImageView from './view/ImageView'
import VideoView from './view/VideoView'
import DarkGreenClockSuite from './media/GreenClockDark.png'
import ContactCardsMain from './media/ContactCardsMain.png'
import ContactCardsDetail from './media/ContactCardsDetail.png'
import ContactCardsQRCode from './media/ContactCardsQRCode.png'
import TeeHeeVideo from './media/Tee-Hee.mp4'
import TeeHeeScreenShot from './media/Tee-Hee_start_screen.png'
import BookmarkPageScreenShot from './media/bookmark_page_dark_mode.png'
import CeleritasAppsHomePage from './media/CeleritasAppsHomePage.png'

function App() {
  return (
    <body>
    <main>
      {/* title and GitHub link */}
      <h1 className="title text-color"> Matthew Roberts: Software Developer and Tutor </h1>
      <a className="link-button grid-button" href="https://github.com/matthewrobertsdev">My GitHub</a>
      <Spacer/>
      {/* Contact Cards */}
      <ProjectHeadings title='Contact Cards for iOS, iPadOS, macOS, and watchOS' description=
      'A iOS, iPadOS, macOS, and watchOS app that lets you have named and color-coded contact 
      cards with different contact info about yourself so that you can share, what you 
      want with who you want.'/>
      <ImageView src={ContactCardsMain}
      alt="Contact Cards cards list"
      classProp='iOS-media'/>
      <ImageView src={ContactCardsDetail}
      alt="Contact Cards cards detail"
      classProp='iOS-media'/>
      <ImageView src={ContactCardsQRCode}
      alt="Contact Cards QR code"
      classProp='iOS-media'/>
      <LinkButton url='https://matthewrobertsdev.github.io/celeritasapps/#/contactcards'
      name='Contact Cards Homepage'/>
      <LinkButton url='https://apps.apple.com/us/app/contact-cards/id1544693179'
      name='Contact Cards on the App Store'/>
      {/* Clock Suite */}
      <ProjectHeadings title='Clock Suite for macOS' description='A macOS app that has alarms, 
      timers, a resizable clock, and a dock clock.  Highly customizable with great 
      use of color for light mode and dark mode.'/>
      <ImageView src={DarkGreenClockSuite}
      alt="Clock Suite with clock, timers, and alarms showing"
      classProp='large-image'/>
      <LinkButton url='https://matthewrobertsdev.github.io/Clock-Suite/#/'
      name='Clock Suite Homepage'/>
      <LinkButton url='https://apps.apple.com/us/app/clock-suite/id1531519063?mt=12'
      name='Clock Suite on the App Store'/>
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
      <br/>
      <LinkButton url='https://matthewrobertsdev.github.io/BookmarkPage/index'
      name='Bookmark Page'/>
      <LinkButton url='https://github.com/matthewrobertsdev/bookmark-page'
      name='Bookmark Page GitHub Repo'/>
      <Spacer/>
      <ProjectHeadings title='Celeritas Apps Homepage' 
      description="A responsive React homepage for my apps with dark mode and light mode."/>
      <ImageView src={CeleritasAppsHomePage}
      alt="Celeritas Apps homepage"
      classProp='large-image'/>
      <br/>
      <LinkButton url='https://matthewrobertsdev.github.io/celeritasapps/#/'
      name='Celeritas Apps Homepage'/>
      <LinkButton url='https://github.com/matthewrobertsdev/portfolio-homepage'
      name='Celeritas Apps Homepage GitHub Repo'/>
    </main>
    <footer>
      <h3 className='text-color'>Copyright © 2020-2021 Matt Roberts</h3>
      <br/><br/>
    </footer>
    </body>
  );
}

export default App;
