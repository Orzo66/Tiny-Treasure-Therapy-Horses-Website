# Tiny-Treasure-Therapy-Horses-Website

This is a website I built for my first client. It is a mainly static website with 7 total pages. The site is responsive and will work well on pretty much any device (phone, tablet, PC monitor). It does look a bit small on a 4K screen, but 
I believe as more content is brought in to be added, the site will grow into something much more grand. This was my first client and their second website for their small business. They had built something in Canva and the site did not work the way it was supposed to. I offered to rebuild the site for them and they could use their current hosting (GoDaddy, which I'm not a fan of) to adjust and relaunch.


Version 1.0:

There are 7 total HTML pages, with over 400 lines of CSS. I did use a Clearfix technique and a CSS reset (respect and reference to Eric Meyer: http://meyerweb.com/eric/tools/css/reset/ for the reset code) and then broke the CSS down by Global Typography and Layout, Navigation (Desktop and Mobile), Page Specific Styles, the Footer, and finally the Media Queries for use on different devices. I also broke areas down in each dedpending on the page and what was needed for ease of use if by chance the client was unhappy or decided to go to someone else to continue the work I have done. At least the developer will have a much easier time making out the work I did.

The only JavaScript used in this currently is a function for the Hamburger Menu when the site is sized for smaller devices (small tablets or phones). Otherwise, there currently is no JS in this site. As it grows and more gets added, there may be more need to add JS, but currently it works well as is.


Version 1.1

Version 1.1 has some new changes. I took out the navigatio bar and footer from each HTML page and put them each in their own HTML documents. I then created some new functions using JS that pulls them into each page when the webpage loads. This way, if I ever need to make changes to the footer or navigation bar, I (or another developer) only need to make the change once. I also added some CSS to the media query to fix the footer, as it looked quite brokent in mobile mode, and the brown coloring was filling the whole page if you zoomed out. I also fixed the issue where the text was not all visible in mobile viewing on the **support.html** and the **contact.html**. I also fixed a couple grammmatical mistakes. I added a robots.txt file (even thought there is little to be blocked by crawlers) and sitemap.xml document (so search engines can find and index the content). Website is now live at https://tinytreasurestherapyhorses.com.
