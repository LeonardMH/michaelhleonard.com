---
layout: post
title:  "CNC Milled PCBs"
date:   2013-08-30 08:30:00 -0600
categories: hardware
---

> This is a guest post from [Thomas Amely](https://plus.google.com/+ThomasAmely)
> on how to make your own CNC milled PCBs. Have fun making and enjoy the
> post!

Within the maker community there exists a sub-community of makers who
have access to or have built their own CNC mills; I am one of those
makers. Never being one to own a single purpose device I set out to mill
circuits of my own design with my desktop CNC machine.

While many of my designs have reached a level of complexity which is
well beyond the capabilities of this workflow, I still regularly create
prototype circuits following this process. This is my workflow.

## Hardware for Milled PCBs

### The Machine

There are numerous sources on CNC mills of various sizes and
capabilities but given the nature of milled circuits an important factor
is going to be resolution in inches per step (or mm/step). My particular
machine travels roughly .000833 inches per full step, this is a good
resolution for through-hole circuits but circuits utilizing surface
mount devices (SMDs) may require a finer resolution. Better resolution
can be attained through different lead screws or microstepping. A word
of caution, increasing resolution through microstepping _WILL_ sacrifice
accuracy. How much accuracy is sacrificed varies from one setup to the
next.

### The Working Fixture

The work surface of your CNC mill should be as level as possible since a
deviation of as little as .001" could be the difference between properly
engraving a board and barely scratching it. The spindle or router that
will be used to mill your boards should be used to level the work
surface with an appropriate end mill. Additionally the fixture should
have a means of holding down the workpiece.

{% 
    include image
    name="IMG_5291.jpg"
    caption="CNC Milled PCB Workpiece Hold-down"
%}

### Tooling

Three kinds of bits should be considered when stocking up as they are
not commonly found in local hardware stores: drill bits, engraver bits
and end mills (optional for cutting the circuit out.)

For drill bits a good variety in common PCB through-hole sizes is a must
but the definition of common sizes varies based on what you are doing.
My go-to drill bits are .025", .033" and .055" although you want to have
a good range and doubles of each as you **will** snap bits.

The engraver bits are a little more complicated as different users will
have different experiences depending on their machines. Myself, I use
.2mm 45° engraving bits, they can be had cheaply on ebay. Experiment
with cheap bits of various sizes and angles before you spend much
money on good bits as you will break many. Also, fight the urge to buy
engraving bits with 10° angles as they are great for producing violent
shrapnel.

I list the end mills as optional for cutting the circuits out of the
rest of the board, but in reality if you have have a CNC machine, a
few end mills is a must. Expect to find the drill bits and engravers
primarily in a 1/8" or 3mm shank (note: 1/8" ≠ 3mm).

{% 
    include image
    name="IMG_5282.jpg"
    caption="Assorted PCB Drill Bits"
%}

{% 
    include image
    name="IMG_5283.jpg"
    caption="Assorted Drill and End Mill Bits"
%}

{% 
    include image
    name="IMG_5284.jpg"
    caption="Engraver Bit"
%}

### Copper Clad

While you could get your copper clad from your local electronics store
you might put a nice dent in your budget before you produce your first
good circuit. Instead of paying for 2-3 USD for each single sided board
find a source for boards online. One excellent source is [eBay seller
"abcfab"](http://www.ebay.com/sch/abcfab/m.html).

> Try to avoid paying more than 0.50 USD per 4"x5" board. Keep in mind
that copper clad comes in many different board and copper thicknesses.

{% 
    include image
    name="IMG_5293.jpg"
    caption="Copper Clad"
%}

## Software for Milled PCBs

### PCB Software

For the creation of my circuits I use the EAGLE free version.
The main limitation of the free version is the max size of the
board, the max board size is limited to 100mm x 80mm (roughly
3.95" x 3.15".) There are some other limitations but they are
not of much consequence for single sided boards of this size.
This size limitation might be worth keeping in mind when ordering
copper clad.

EAGLE can be downloaded from the [Cadsoft
website](http://www.cadsoftusa.com/download-eagle/?language=en).

### GCode Generator

To generate the GCode (the machine numerical control program language)
I use the EAGLE open source plugin _PCB-GCode_. The plugin can be
downloaded from the [PCB-GCode forum](http://pcbgcode.org/list.php?12).

Installation and use are very well documented in the file within the
plugin zip folder under `/pcb-gcode-3.X.X.X/docs/pcbgcode.pdf`.

### CNC Machine Control Software

In this category there are really only two mainstream options: Mach 3
and LinuxCNC. There are a few alternatives but I'm not sure many people
use them. At any rate once you produce the GCode, what you run it on is
really of no consequence so long as it does what it is supposed to do.

## Design

### Get It Down On Paper

As with any project the first step should be a well thought out circuit
with a purpose. Try and work out all the details on paper (or digitally
if you prefer).

When I start I list at the top of my page what I want the circuit to do,
how it will do it and any additional notes that I should keep in mind
during the process. This is especially useful if you have to order parts
for your project and will spend a few days away from it. It's a good
idea in general to always have a notebook to jot down your ideas and
thoughts.

For this example project I've decided to create an Arduino shield that
allows me to control a high power RGB LED strip utilizing 3 IRF540 Power
MOSFETs. While these MOSFETs are certainly overkill, they are components
I had laying around from a previous project. I've also made notes on
what pins I will use and the possibility of supplying the Arduino with
power from the LED power supply.

{% 
    include image
    name="IMG_5294.jpg"
    caption="Always keep notes for sanity's sake"
%}

### Schematic on Paper

Before creating a schematic digitally I always begin by drawing one by
hand. It doesn't have to be pretty but it should make sense.


{% 
    include image
    name="IMG_5295.jpg"
    caption="Extremely informal schematic"
%}

### Breadboard It

Before milling anything I always test the circuit on a breadboard. There
is no sense building a circuit that you hope will work when it takes
only a few minutes to try it out. This is a simple check that will spare
you a lot of frustration.

{% 
    include image
    name="IMG_5297.jpg"
    caption="The circuit prototyp on a breadboard"
%}

### EAGLE Schematic

At this point I create my new project in EAGLE with a new schematic.
EAGLE is very intuitive and similar to other schematic editors but there
are many tutorials available to familiarize yourself with it if needed.
I always start by adding a frame with key information and bringing in
all the components I think I will need before connecting anything.

In this case I have an Arduino shield component, 3 N-channel MOSFETs 6
resistors and 5 wire-pad connections. **Always verify that the pinouts
of the components you are using are correct.** Before connecting any
wires, give the components descriptive names and values for easier
reading and deciphering later on.

{% 
    include image
    name="basic-components1.png"
    caption="Necessary Components"
%}

Once all of the components are on the schematic I try to wire them in
the most orderly fashion possible. This is normally a painless process
if you took the time to draw your schematic by hand.

> Michael here, see [my article on electronics schematic best
practices](/electrical-schematic-best-practices)
for some more guidelines.

{% 
    include image
    name="basic-components-connected.png"
    caption="Components Connected"
%}

From this schematic I create a board and begin laying out components.
Every person I know who uses a layout editor takes a different approach
to laying out components. My main rule is to not fall in love with any
layout. Working on a single sided PCB greatly limits routing options and
the first layout I use is hardly ever the final layout. Here is a rough
initial layout.


{% 
    include image
    name="basic-components-connected1.png"
    caption="Initial Layout"
%}

It is wishful thinking that I might be satisfied with the auto-route
feature, but without having configured any of the optimization options,
the auto-route is almost never useful for single sided boards. In this
case the auto-route solution might have been suitable but I opted to
modify the layout slightly and use wider traces for the high current
sections.

{% 
    include image
    name="auto-route.png"
    caption="Auto-Route Solution"
%}

{% 
    include image
    name="myRoute.png"
    caption="My Routing Solution"
%}

Now that we have a design to mill we will run the PCB-GCODE plugin.
Every single machine will have a different configuration based on the
stepper drivers, the computer specs, the engraving bit and overall
setup. Unfortunately there is no good setup that will work for every
machine.

Make use of the configuration instructions provided with the plugin and
have lots of patience. Additionally, make use of the drill files to
ensure the plugin uses only drills you have on hand.

{% 
    include image
    name="plugin.png"
    caption="PCB-GCODE Plugin"
%}

This job is run as a single pass but it can be configured to remove
all material outside of traces. In the preview window I search for
discontinuities and any other visible errors. Keep in mind that this
preview is of the bottom of the board and therefore will appear
backwards in the axis you have configured.

{% 
    include image
    name="plugin2.png"
    caption="Mill Preview"
%}

The plugin creates two files (or more depending on the configuration)
a `.drill` file and a `.etch` file. Some machines can interpret these
files or they can be simply renamed to have a `.ngc` or any other file
extension.

LinuxCNC users want to make sure to specify G61 or G64 in their `.etch`
files to avoid rounding corners due to trajectory control. I specify
G64P.005 within the etch file, this keeps the mill within .005" of the
GCode. For more information see the [LinuxCNC wiki entry on trajectory
control](http://wiki.linuxcnc.org/cgi-bin/wiki.pl?TrajectoryControl).

## Milling

The last part of my milled pcb prototyping process is the actual
milling. Once you have your machine set-up is fairly painless, however
the process of setting up your machine can be very time consuming and
frustrating. I often begin with drilling followed by etching but the
order is of no real consequence and either can be chosen since they are
separate files.

{% 
    include image
    name="IMG_5315.jpg"
    caption="Drilling a CNC milled PCB"
%}

{% 
    include image
    name="IMG_5317.jpg"
    caption="Etching a CNC milled PCB"
%}

The finished board should then be inspected for shorts using a
multimeter or similar device. On this particular board I found a short
where a tiny bit of copper has not been removed. This is an easy fix but
could have caused some serious problems later on.

{% 
    include image
    name="IMG_5323.jpg"
    caption="Drilled and Etched"
%}

{% 
    include image
    name="IMG_5323_2.jpg"
    caption="A Shorted Connection"
%}

While the copper-clad is still in the work fixture I evaluate if there
are any additional changes I would like to make. I have opted to remove
the bottom half of the board which has no connections.

{% 
    include image
    name="IMG_5326.jpg"
    caption="Additional Changes"
%}

Upon removing the board I sand the surface and corners as well as clean
the trace gaps with a pick. Before soldering I perform one last thorough
inspection with a magnifying device. My magnifying device of choice is a
thread counter magnifier.

{% 
    include image
    name="IMG_5332.jpg"
    caption="Closer examination of CNC milled PCB"
%}

Now that the board is complete I notice a significant flaw in my board.
I have no connection for 12V to go to the LED strip. I have the option
to create another board or simply splice a wire to the 12V input. I
chose the simpler option but have since updated my notes. This clearly
demonstrates the iterative nature of prototyping.

{% 
    include image
    name="IMG_5336.jpg"
    caption="Board front"
%}

{% 
    include image
    name="IMG_5337.jpg"
    caption="Board rear"
%}

{% 
    include image
    name="IMG_5352.jpg"
    caption="Completed project"
%}

## Final Notes

As with any prototype build, I have taken notes along the way of what
changes need to be applied to the next iteration.

For this prototype the next iteration will include a barrel jack,
terminal binding posts to connect the led strip, and heat sinks if
needed. This particular prototype will be used as part of a sunrise
alarm clock for a few weeks before refining the design.

> This process is one of many possible workflows, I hope it has given a
> good idea of what is possible.
>
> Keep in mind that while this setup is designed to produce single sided
> circuits there are plenty of makers out there who design double sided
> circuits on their CNC mills. A similar process can be implemented with
> various software, machines and tooling. In designing your own work
> flow be patient, stay flexible and be willing to fail.
