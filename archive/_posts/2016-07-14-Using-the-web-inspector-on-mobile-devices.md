---
title: "Using web inspector on mobile devices"
permalink: /blog/:title
quote: Ghost is an open source publishing platform which is easy to use, and free for everyone.
image: /img/media/cover.jpg
background_position: top
---



<h1 id="{{ post.title}}">{{post.title}}</h1>

Remote debugging tools provide an interface to connect to a mobile device from a desktop computer. Doing this, you can debug for a mobile device using the development tools on a more powerful, easier-to-use desktop machine.

### Android

  - Download and install [Chrome Canary](https://www.google.com/intl/en/chrome/browser/canary.html) on your desktop.
  (it will not interfere with your regular Chrome)
  - On [Linux, the Chromium Dev channel](http://www.chromium.org/getting-involved/dev-channel) is similar to Canary.
  - Learn about [Remote Debugging](https://developer.chrome.com/devtools/docs/remote-debugging) on Android with Chrome

  __On the Android device__
  - turn on developer mode, via settings ( click on build number 7x  -- yes actually 7 times )
  - Connect your device and choose, turn on usb debugging

__Setup process for Mobile__
  - On your mobile device install [Chrome beta](https://play.google.com/store/apps/details?id=com.chrome.beta&hl=en")
  - Turn on, [Remote debugging Android devices with Chrome](https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging?hl=en)
  - In Chrome beta on your desktop enter: <code>chrome://inspect</code>


### iOS

The `ios_webkit_debug_proxy` (aka iwdp) allows developers to inspect MobileSafari and UIWebViews on real and simulated iOS devices via the Chrome DevTools UI and Chrome Remote Debugging Protocol. DevTools requests are translated into Apple's Remote Web Inspector service calls.

__On a Mac,__

  - Install with homebrew:<br>
          &nbsp; &nbsp; `brew install ios-webkit-debug-proxy`
  - Enable remote debugging on your iOS and device by going to “Settings” → “Safari” → “Advanced” and enabling “Web Inspector.”
  - Physically connect your phone or tablet to your machine using a USB cable.
  - Start the proxy via your terminal <br>
    `Ios_webkit_debug_proxy`<br>
      --debug for verbose output. <br>
      --frontend to specify a frontend <br>
      --help for more options. <br>
    Ctrl-C to quit. Also, the proxy can be left running as a background process.

Then, open Safari (version 6.0 or higher), and in “Preferences” → “Advanced,” select “Show Develop menu in menu bar.” Now, in the “Develop” menu you should see your iOS device, along with any open pages in mobile Safari.

Referances:
  [ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy)
