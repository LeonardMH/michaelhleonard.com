---
layout: post
title:  "Raspberry Pi Or Beaglebone Black"
date:   2013-07-18 17:00:00 -0600
categories: beaglebone raspberry-pi
---
**Trying to choose between the Raspberry Pi or BeagleBone Black? This
article will help you decide which one is best for the job.**

## Introduction

There are already [many articles out there][rpi-v-arduino-v-bbb-1]
comparing [Arduino, Raspberry Pi, and BeagleBone
Black][rpi-v-arduino-v-bbb-2]; this is not one of those articles.

I believe it is clear that Arduino is in a different league than the
Raspberry Pi or BeagleBone Black, and serves an entirely different
purpose. What I was looking for and couldn’t find was a comprehensive
article that would summarize all of the pros and cons of the Raspberry
Pi and the BeagleBone Black, and what each platform is best suited for.

I begin by giving a short introduction to each platform and then we will
take an in-depth look at the two platforms side-by-side to determine
which one is best for each category. The categories covered will be:

* Raw Comparison
* Unboxing
* Ease of Setup
* Total Cost
* Connections
* Processor Showdown
* Graphical Showdown
* Audio Showdown
* Power Consumption
* Expandability
* Hardware Accessibility
* Community

Let’s get started!

## About the Raspberry Pi

{% comment %}
Just keeping this in HTML for now because that's easier to migrate.
{% endcomment %}

<a href="http://arduino.cc/">Arduino</a> is the true trailblazer in the <strong>microcontroller</strong> area and the device that started the whole "maker" revolution; the <a title="Raspberry Pi Homepage" href="http://www.raspberrypi.org/">Raspberry Pi</a> on the other hand is an amazing device that really started the <strong>microprocessor </strong>revolution.

{% 
	include image
	name="raspberry-pi-front.png"
	caption="Top view of the Raspberry Pi"
%}

The Raspberry Pi was the first cheap (read: $35) single-board computer available to the general public. The project to develop the Pi was born out of a realization that young students were not proficient in the technical details of computing that their older peers had learned out of necessity. Due to their less technical backgrounds these students we not able to perform at the level expected of them.

To attack this issue the Raspberry Pi creators developed the low-cost and relatively high performance miniature computer that would allow a new generation of students to interface with their computers in a way that they had never thought was possible.

If you would like to learn more about the Raspberry Pi, I recommend you to the official "<a href="http://www.raspberrypi.org/about">About</a>" page or the "<a href="http://www.raspberrypi.org/faqs">FAQ</a>" page. The story of the Raspberry Pi's creation is inspiring and is worth a read.

## About the BeagleBone Black

The BeagleBone Black is a relative newcomer to the world of easy to use microprocessor breakouts, however, what it missed out on in time-to-market, the BeagleBone Black has more than made up for in capability. The BeagleBone Black has evolved out of the long lineage of <a href="http://beagleboard.org/Products">BeagleBoard products</a> into the current version; a small form-factor, very powerful, and extremely expandable product that allows builders, makers, artists, and engineers the ability to create truly innovative projects.

The BeagleBoard family was originally designed to provide a relatively low-cost development platform for hobbyists to try out the powerful new system-on-a-chip (SOC) devices that were essentially capable of performing all the duties of a computer on a single chip. The original BeagleBoard is currently priced at $125 while its successor, the BeagleBoard-xM, is priced at $145. So even though these systems were very powerful, they were just not at the right price point to compel people to buy them in mass.

After the BeagleBoard-xM, the BeagleBoard team created the original BeagleBone. It is essentially a smaller, stripped down version of the BeagleBoard. While the BeagleBone was a good start, it still wasn't as capable as it could have been, and at a price point of $89 it was still a bit too pricey for the hobbyist market.

In late 2012 the BeagleBoard team finally released the newest version of the BeagleBone, called the BeagleBone Black. I think one look at the picture will tell you why they chose this name.

{% 
	include image
	name="beaglebone-black-front.jpg"
	caption="Top view of the BeagleBone Black"
%}

This version has maintained the same form-factor as the BeagleBone but added quite a bit of useful functions and is generally an all around better device; to top it all off, the BeagleBone Black is priced at a very affordable $45.

If you would like to learn a little bit more about the BeagleBone or BeagleBoard devices, you can visit the <a href="http://beagleboard.org/">official community page </a>or the <a href="http://circuitco.com/support/index.php?title=Main_Page">manufacturer community page</a>. This is the best way to learn the intricate details of these platforms, and will let you more fully evaluate if the BeagleBone Black is right for you.

## So Raspberry Pi or BeagleBone Black?

Now that we know a little bit about each device, let's compare them side-by-side and see which one is best for what you want to do. I will do my best to cover all of the topics that are important and to be unbiased in my conclusions.

### Raw Comparison

To start this comparison I have made a summary table where we can take a look at the raw specifications from each device. This is a good way to get a quick overview of each platform's capabilities but does not always tell the whole story. For full disclosure, I am comparing the BeagleBone Black Rev. A5B to the Raspberry Pi Rev. B. The summary table below compares the two boards as they are shipped, but the in depth comparisons below consider the entire ecosystem supporting each board.

<table><caption><strong>Comparing Raspberry Pi and BeagleBone Black</strong></caption>
<tbody>
<tr>
<td></td>
<td><strong>BeagleBone Black</strong></td>
<td><strong>Raspberry Pi</strong></td>
</tr>
<tr>
<td><strong>Base Price</strong></td>
<td>45</td>
<td>35</td>
</tr>
<tr>
<td><strong>Processor</strong></td>
<td>1GHz TI Sitara AM3359 ARM Cortex A8</td>
<td>700 MHz ARM1176JZFS</td>
</tr>
<tr>
<td><strong>RAM</strong></td>
<td>512 MB DDR3L @ 400 MHz</td>
<td>512 MB SDRAM @ 400 MHz</td>
</tr>
<tr>
<td><strong>Storage</strong></td>
<td>2 GB on-board eMMC, MicroSD</td>
<td>SD</td>
</tr>
<tr>
<td><strong>Video Connections</strong></td>
<td>1 Mini-HDMI</td>
<td>1 HDMI, 1 Composite</td>
</tr>
<tr>
<td><strong>Supported Resolutions</strong></td>
<td>1280x1024 (5:4), 1024x768 (4:3), 1280x720 (16:9), 1440x900 (16:10) all at 16 bit</td>
<td>Extensive from 640x350 up to 1920x1200, this includes 1080p</td>
</tr>
<tr>
<td><strong>Audio</strong></td>
<td>Stereo over HDMI</td>
<td>Stereo over HDMI, Stereo from 3.5 mm jack</td>
</tr>
<tr>
<td><strong>Operating Systems</strong></td>
<td>Angstrom (Default), Ubuntu, Android, ArchLinux, Gentoo, Minix, RISC OS, others…</td>
<td>Raspbian (Recommended), Android, ArchLinux, FreeBSD, Fedora, RISC OS, others…</td>
</tr>
<tr>
<td><strong>Power Draw</strong></td>
<td>210-460 mA @ 5V under varying conditions</td>
<td>150-350 mA @ 5V under varying conditions</td>
</tr>
<tr>
<td><strong>GPIO Capability</strong></td>
<td>65 Pins</td>
<td>8 Pins</td>
</tr>
<tr>
<td><strong>Peripherals</strong></td>
<td>1 USB Host, 1 Mini-USB Client, 1 10/100 Mbps Ethernet</td>
<td>2 USB Hosts, 1 Micro-USB Power, 1 10/100 Mbps Ethernet, RPi camera connector</td>
</tr>
</tbody>
</table>

### Unboxing

These are hobbyist boards and aren't exactly expected to adhere to the same high standards as a fully commercialized product. With that in mind, I still believe that the packaging and first opening of the boards constitutes an important part of the first impression a buyer will get.

{% 
	include image
	name="unboxing.jpg"
	caption="Unboxing the BeagleBone Black (Left) and Raspberry Pi (Right), not really though; I had already unboxed both and used them quite a bit..."
%}

When I bought my Raspberry Pi, it was packaged in a plain white cardboard box with no markings or included accessories. I noticed that they have since begun shipping in nicely packaged boxes with professional looking markings, so I won't hold my experience against the Raspberry Pi.

The BeagleBone Black was given to me for free as a participant in the <a href="http://ti.com/design2013">2013 TI Intern Design Competition</a>. It was packaged in an equally professional box and included a mini-USB cable and a tiny introduction card.

<strong>Winner: </strong>Tie

### Ease of Setup

<a href="http://lifehacker.com/5976912/a-beginners-guide-to-diying-with-the-raspberry-pi">Setting up the Raspberry Pi</a> is quite frankly a bit laborious. Since the board does not come with an included micro-USB cable to supply power, you must obtain one on your own. Additionally, the Raspberry Pi does not come with a pre-installed operating system or on-board storage. You will need to obtain an SD card to boot the Raspberry Pi. Once you have an SD card you will need to download and install the operating system on the card. After you have taken care of these prerequisites, the Raspberry Pi should be ready for use.

<a href="http://beagleboard.org/Getting%20Started">Setting up the BeagleBone Black</a> on the other hand is quite possibly as simple as it gets. Using the included Mini-USB cable, you can attach the BeagleBone Black to your computer to supply power. The BeagleBone Black will boot from the on-board storage without requiring any more work on your end. If you would like to be able to interact with the BeagleBone Black from your computer you may need to install some included drivers, but this is relatively painless.

<strong>Winner: </strong>BeagleBone Black by a long-shot

### Total Cost

This is really kind of a subjective category since the requirements are different for everybody. If you already have an SD card, micro-USB cable, HDMI cable, and a keyboard to use with the Raspberry Pi, then there won't be any extra cost.

For the BeagleBone Black, it is quite possible that you won't need any extra parts to end up with a usable board. If you want to extend functionality beyond just the basics, it is likely you will need to buy a MicroSD card and a mini-HDMI cable.

In addition, the two USB ports on the Raspberry Pi mean that you may be able to get by without a USB hub. Since the BeagleBone Black only has one USB port, unless you have something like a <a href="http://www.logitech.com/en-us/product/wireless-combo-mk520?crid=27">Logitech Unifying Receiver</a>, you will need a USB hub to use a mouse and keyboard.

In my case, the BeagleBone Black was slightly cheaper overall but since there are so many factors to consider here, I will leave this one up to you.

<strong>Winner:</strong> Tie

### Connections

If there is one thing that Business types and Engineers can agree on it's that everything comes down to the connections you make, and oh boy the BeagleBone Black can make some connections.

With two 46 pin headers, the BeagleBone Black has a total of 92 possible connection points. Some of these connections are reserved, but almost all of them can be reconfigured to be used if needed. Taking a look at the <a href="https://github.com/CircuitCo/BeagleBone-Black-RevA5B/blob/master/BBB_SRM.pdf?raw=true">reference manual</a> shows the following (non-exhaustive) list of possibilities:

* 3 I2C buses
* CAN bus
* SPI bus
* 4 timers
* 5 serial ports
* 65 GPIO pins
* 8 PWM outputs
* 7 analog inputs (1.8V max 12 bit A/D converters)

With such an impressive list of interfaces, the BeagleBone Black is a real powerhouse in this category. I'm not aware of any other platforms at this size and price point that provide so many interface options, a characteristic that is a real blessing for many applications.

Looking at the Raspberry Pi, we have a 26 pin header for making connections with the following possible interfaces:

* 8 GPIO pins
* 1 UART interface
* 1 SPI bus
* 1 I2C bus

This is a much smaller list but would be perfectly adequate for an I2C, SPI, or UART based project, as well as any project which doesn't require external interfacing. The Raspberry Pi's true power is in a different category which we will take a look at soon.

<strong>Winner: </strong>BeagleBone Black, no contest

### Processor Showdown

The processor is perhaps the single most important factor in determining how fast your system will perform. The stock configurations give us a 1 GHz processor on the BeagleBone Black and a 700 MHz processor on the Raspberry Pi. In an effort to put the two on a more level playing field, let's assume that you have <a href="http://www.raspberrypi.org/archives/2008">overclocked the Raspberry Pi</a> to perform at the same clock speed as the AM3359.

The next defining feature we want to look at is the <a title="Wikipedia Article for Microarchitecture" href="http://en.wikipedia.org/wiki/Microarchitecture" target="_blank">processor architecture</a>. The Raspberry Pi uses the slightly older ARMv6 instruction set while the BeagleBone Black uses the ARMv7 instruction set, which is currently the most common architecture among embedded systems.

The newer architecture of the BeagleBone Black lends itself to more than just bragging rights though. One advantage of using the more modern instruction set is that the processor on the BeagleBone Black is more widely supported by software developers. Notably, some operating systems are no longer designed to be run on the ARMv6 instruction set, including Ubuntu which <a href="http://www.raspberrypi.org/phpBB3/viewtopic.php?t=5150">dropped support in late April</a>.

Another advantage the ARMv7 instruction set enjoys over the ARMv6 goes beyond support, and includes actual performance enhancements. While the list of improvements between v6 and v7 is a long one, some of the more impressive improvements like implementing a <a href="http://en.wikipedia.org/wiki/Superscalar">superscalar architecture</a>, including instructions for <a href="http://en.wikipedia.org/wiki/SIMD">SIMD</a> operations, and an improved <a href="http://en.wikipedia.org/wiki/Branch_predictor">branch prediction algorithm</a> lead to some pretty amazing performance increases.

Specifically, even when running at the same clock speed, the processor on the BeagleBone Black is nearly <strong>TWICE AS FAST</strong> as the processor on the Raspberry Pi. (<a href="http://www.arm.com/products/processors/cortex-a/index.php?tab=Compare+Processors">Source 1</a>: ARM A8 runs 2000 MIPS/MHz, <a href="http://www.anandtech.com/show/4991/arms-cortex-a7-bringing-cheaper-dualcore-more-power-efficient-highend-devices">Source 2</a>: ARM11 runs 1250 MIPS/MHz)

<strong>Winner:</strong> BeagleBone Black

### Graphical Showdown

This is one category in which the Raspberry Pi really shines. With the integrated Videocore graphics processor, the Raspberry Pi is capable of <a href="http://hackaday.com/2012/01/24/raspberry-pi-runs-xbmc-reliably-decodes-1080p/">decoding 1080p video streams</a>, <a href="http://www.raspberrypi.org/archives/3455">rendering OpenGL</a>, and even <a href="http://pi.minecraft.net/">running Minecraft</a> (sorry it can't quite handle Crysis).

{%
	include youtube
	link="https://www.youtube.com/embed/lmfUJfJH2wE"
%}

In addition to the impressive graphics processing, the Raspberry Pi also offers a full sized HDMI connector and a composite video output for lower quality connections.

All of this combines to put the BeagleBone Black on the defensive. The BeagleBone Black does have built in graphics support, but is just not quite as powerful and does not support 1080p. To compound the lower graphics processing power, the BeagleBone Black only offers a mini-HDMI video connection for interfacing with your monitor or TV. While there are add-on capes which increase your connectivity options, there is no substitution for the graphics computation power of the Videocore system on the Raspberry Pi.

<strong>Winner:</strong> Raspberry Pi by a solid margin

### Audio Showdown

This one really isn't much of a showdown. With the BeagleBone Black allowing you to output audio over mini-HDMI only and the Raspberry Pi supporting audio over HDMI or through a 3.5 mm audio jack, the Raspberry Pi has more capability out of the box.

Looking at the broader perspective, there is an add-on board for the BeagleBone Black which gives adds a 3.5 mm audio out as well as a 3.5 mm audio in and some extra audio processing capability. Since this is an add-on and not the default configuration, I will still give this category to the Raspberry Pi. If you already have a BeagleBone or are looking for some more capable audio processing then the audio add-on cape may be a good choice.

<strong>Winner:</strong> Raspberry Pi

### Power Consumption

It is quite frankly pretty difficult to find any reliable data on this category. The <a href="https://github.com/CircuitCo/BeagleBone-Black-RevA5B/blob/master/BBB_SRM.pdf?raw=true">BeagleBone Black reference manual</a> provides a range of current draws so there isn't any guesswork there. The Raspberry Pi, on the other hand, has many different user reported measurements that vary so widely I'm not even sure what is reasonable anymore. The reports which seem most reputable show a slightly lower current draw from the Raspberry Pi.

<strong>Winner:</strong> Raspberry Pi by a small margin based on unreliable data

### Expandability

I have to admit, when I first set out writing this article I expected the BeagleBone Black to handedly dominate this category. Since I have been working on an add-on cape of my own for the BeagleBone Black (<a title="SensorCape for BeagleBone Black – Project Page" href="http://www.michaelhleonard.com/projects/sensorcape/">the SensorCape</a>), I was already fully aware of the robust <a href="http://beagleboard.org/cape">add-on ecosystem</a> that existed for the BeagleBone.

What I was not aware of though, was the add-ons for the Raspberry Pi. Just to clarify, "add-ons" do not refer to cases, cables, or other non-functional accessories; what I am interested in are the additional boards that make your BeagleBone or Raspberry Pi more capable.

We'll take a look at the BeagleBone first. Browsing through the <a href="http://circuitco.com/support/index.php?title=BeagleBone_Capes">official CircuitCo capes page</a>, the following add-on boards really stand out to me.

* **Breadboard, prototype, and breakout capes** - These three capes allow you to easily test new additions to your BeagleBone
* **DVI cape** - Allows you to connect to a DVI monitor
* **VGA cape** - Allows you to connect to a VGA monitor
* **HDMI cape** - Allows you to connect to an HDMI connection, this was originally developed for the BeagleBone but could be used for the Black if you just really hate mini-HDMI
* **LCD capes** - There are a few versions of LCD capes in the store that can be used to easily add an LCD screen on top of your BeagleBone
* **Camera cape** - Adds a 3.1 MP camera on top of the BBB, also nicely configured to work with the LCD capes so you could make your own handheld camera
* **Audio cape** - Includes two 3.5 mm audio jacks and allows you to configure audio in and out
* **Motor cape** - Adds a TI motor drive that can drive up to 8 DC motors at 500 mA per motor
* **Battery cape** - For when you want to take your project on the go

Of course this list is not exhaustive, so I don't want to lead anyone to believe that this is all that is available. These are just the capes that stood out to me as being widely useful.

There are many other more specialized capes in production that I chose not to include. These include the <a href="http://circuitco.com/support/index.php?title=BeagleBone_ROV">BeagleBone ROV cape</a>, featured in the <a href="http://openrov.com/">OpenROV</a> project and is used to control an underwater robot that streams live video; or the <a href="http://circuitco.com/support/index.php?title=BeagleBone_Ninja">Ninja cape</a> that was commercialized into <a href="http://ninjablocks.com/">Ninja Blocks</a>, an amazing platform allowing you to automate almost anything.

With such capable extensions for the BeagleBone, you may be wondering how the Raspberry Pi could even compete. I know I was. Truth be told, the Raspberry Pi add-ons are pretty scarce, and since there is no central repository for them, it is difficult to find a good list. The majority of add-ons I have been able to find are simply "breakout" boards or prototyping boards which allow you to easily interface with a breadboard or to solder directly on the board. These types of boards, while useful, are not a killer feature and are not unique to the Raspberry Pi.

{% 
	include image
	name="adafruit-prototyping-plate.jpg"
	caption="Adafruit Prototyping Pi Plate"
%}

Something that is unique would be <a href="http://www.cooking-hacks.com/index.php/shop/raspberry-pi/raspberry-pi-to-arduino-shield-connection-bridge.html" target="_blank">this add-on from cooking hacks</a>. This board allows you to easily connect Arduino compatible shields and components directly to the the Raspberry Pi. That may not seem like a big deal at first, but if you recall the beginning of this article I mentioned that Arduino is really in a league of its own. This is in no small part thanks to the incredible amount of add-on "shields" that are available for Arduino. According to the <a href="http://shieldlist.org" target="_blank">Arduino Shield List</a>, there are just short of 300 shields available for the Arduino and nearly all of these are now compatible with the Raspberry Pi.

Outside of this Arduino compatibility though, the support for add-on boards is still fairly low in the Raspberry Pi environment . Unless the functionality you want to implement is covered by an Arduino shield, you may be out of luck.

<strong>Winner:</strong> Raspberry Pi by a hair thanks to Arduino add-on compatibility, I am still very optimistic on the future of the BeagleBone in this category though. And really, if you are planning on buying a Raspberry Pi and then using Arduino capes, you should probably just buy an Arduino.

### Hardware Accessibility

This category may not be important to the majority of readers, but I think it is critical to technical users or anyone who may want to produce a minimal version of a project they made with their chosen platform. Both the Raspberry Pi and the BeagleBone Black rely heavily on the open-source community, so let's see how open they are in return.

The Raspberry Pi is unfortunately based off of a proprietary processor platform which means you cannot view a full datasheet for the processor without going through some significant hoops such as:

* Signing a non-disclosure agreement with Broadcom
* Providing Broadcom with a business plan
* Committing to buy these processors in mass

It is possible to get more information on the <a href="http://www.raspberrypi.org/wp-content/uploads/2012/02/BCM2835-ARM-Peripherals.pdf">internal structure of the BCM2835</a> for register access, but as far as I know there is no documentation for the processor pinouts. In contrast, the full datasheet and user guide for the processor on the BeagleBone Black can be accessed at the <a href="http://www.ti.com/product/am3359">Texas Instruments product page</a>, and does not have a minimum purchase requirement.

In addition to the proprietary processor, the Raspberry Pi Foundation also entered into an exclusive manufacturing agreement with <a href="http://uk.rs-online.com/web/">RS</a> and <a href="http://www.farnell.com/">Farnell</a>, meaning that the board layout must be kept secret for now. If you are trying to make your own derivative of the Raspberry Pi or need to know how the components are connected together, Eben has provided <a href="http://www.raspberrypi.org/archives/2233">the schematics for the Rev. B Raspberry Pi</a>. You will still have to commit to buying the Broadcom chip in mass if you want to make your own, but at least you have a starting point.

The entire documentation, including layout files, schematics, and reference documents, for the BeagleBone Black are hosted at their <a href="http://circuitco.com/support/index.php?title=BeagleBoneBlack#LATEST_PRODUCTION_FILES_.28A5A.29">wiki page</a>, and includes everything you could want to make your own BeagleBone.

<strong>Winner:</strong> BeagleBone Black

### Community

Despite my best efforts, I can't seem to find any reliable data on the size of each platform's respective community. Seeing as how (as of April 2013) the Raspberry Pi has shipped more than one-million units,I think it is safe to assume that the Raspberry Pi has developed a larger following. On top of this the Raspberry Pi gets much better media coverage and overall exposure.

These considerations are all important if you are unfamiliar with Linux systems or electronics in general, as well as if you are planning on undertaking a large project which you may decide you need help with.

<strong>Winner:</strong> Raspberry Pi by a long-shot

## Summary

Now that we have looked at each category in detail, it is a simple matter to draw some conclusions about which circumstances should lead you to choose one board over the other.

### When the BeagleBone Black is the Right Choice

<strong>Projects that need to interface with many external sensors</strong> - The incredible number of pins on the BeagleBone Black and the many bus options allow you to easily interface with pretty much any device out there.

<strong>Anything requiring small form factor but high speed processing</strong> - For example this super cool <a href="http://makezine.com/2013/06/05/33-rpi-beowulf-cluster/">33 node Raspberry Pi computing cluster</a> would have been much better off using the BeagleBone Black, both from a price and performance standpoint.

<strong>Projects that you may wish to commercialize</strong> - Since the Raspberry Pi is such a closed-source environment, it is impossible to make your own minimal versions. The open nature of the BeagleBone would allow you to just take the most important features and directly port that into your own design.

<strong>As an embedded system learning platform</strong> - The Raspberry pi has its roots in education, but the fact that the BeagleBone Black works out of the box leads me to believe it is a better solution for learning about embedded systems.

<strong>For when you want it to "just work"</strong> - The fact that the BeagleBone Black works right out of the box is a huge bonus and allows you to get up and going in a few minutes rather than an hour or more.
<h3>When the Raspberry Pi is the Right Choice</h3>
<strong>Multimedia based projects</strong> - With the significantly more powerful graphics processing and larger number of connection options, the Raspberry Pi is a no-brainer for multimedia interfaces.

<strong>Community driven ideas</strong> - If you have a project that will in some way rely on the community for proper operation, you should choose the very active community of the Raspberry Pi. If you just think you will need support though, the BeagleBone community is very helpful and many Raspberry Pi projects will easily port to the BeagleBone Black.

<strong>As a graphical learning platform</strong> - Since the BeagleBone Black does not have quite the video capability of the Raspberry Pi, I would recommend the Raspberry Pi for learning about Linux in a graphical environment. Though to be fair you could do the same thing in a Virtual Machine, it just isn't quite as much fun.

### When Either One Works

<strong>Internet connected projects</strong> - If you want your project to send updates to a server, or maybe even act as a server, then either board should work just fine for you.

<strong>You just want to nerd out</strong> - Maybe you just want to get your nerd on. That's okay, in fact it's even <a href="http://usatoday30.usatoday.com/tech/news/story/2012-04-10/techie-geeks-cool/54160750/1">becoming the cool thing</a> to do. If that is your goal then either platform will serve you well.

<strong>I hope you found this guide helpful and that you will use it in making your next purchase. If you still can't decide which one is right for you and you have some money to burn I really recommend just buying both of these systems. Each board has different strengths and they both offer something different. Happy hacking!</strong>

[rpi-v-arduino-v-bbb-1]: http://developmentboards.blogspot.com/2013/04/raspberry-pi-vs-arduino-vs-beagleboard.html
[rpi-v-arduino-v-bbb-2]: http://lifehacker.com/how-to-pick-the-right-electronics-board-for-your-diy-pr-742869540

