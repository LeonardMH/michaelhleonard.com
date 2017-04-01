---
layout: post
title:  "Design the Perfect PCB"
date:   2013-07-24 16:00:00 -0600
categories: hardware
---

Breadboards are amazing for prototyping and are an invaluable tool to
any electronics tinkerer, but when you really want to get serious you
will need to learn how to create your own PCB.

Making a PCB is no simple task, however, with the right commitment, a
little bit of time, and this guide you will be able to make a working
PCB the first time around. If you are persistent it will even look good!

## Anatomy of a PCB

When you are on your computer, everything is at kind of an abstract
level and it can be easy to forget that you are working with a physical
medium. Before you just start throwing together a design, I think it is
useful to know what you are actually doing.

In order to better understand your physical medium of choice [see my
article on the anatomy of a PCB](/anatomy-of-a-pcb). If you are already
familiar with PCBs then feel free to skip on to the next section.

## Designing Your Circuit

Before you can consider any physical designs or schematic connections
**you must have a clear idea of what you want your design to do**.
This means taking some time to sit down and define what you want to
accomplish, consider the challenges, and pick the right components for
the job.

### Determining Your Goals

**The first step in designing the perfect PCB is to have a well-defined
set of goals** that you would like your design to accomplish. To steal
a little bit from the business world, you should always set SMART goals
for your project, this means:

- Specific
- Measurable
- Attainable
- Realistic
- Time Bound

As a personal example, I have started working on another side project
for my own use. The bathroom in my apartment is too dark in the evening
for me to get around in, but when I turn the light on it is way too
bright and wakes me up.

To fix this little issue I thought I would just go buy a small lamp.
Unfortunately, I am a little bit too picky and couldn't find a lamp that
I liked. That is when I had the idea to design one of my own. Of course,
I'm not talking about just any lamp. I wanted a multi-color, adjustable
brightness, wirelessly controlled lamp.

Sounds cool right? Of course it does! So before the idea was able to
leave my head I jotted it down in my notebook and began planning.

At this point, my goals were pretty broad, let's take a look at what I
had:

- Multi-color lamp
- Adjustable brightness
- Wireless control

Unfortunately none of these goals are very specific at all:

- What do I mean by multi-color? Is that two colors, three, or any
variable color?

- What is adjustable brightness? I mean technically on and off would be
two different brightness settings right?

- Wireless control? Do I want to use Wi-Fi, Bluetooth, infrared, RF,
Zigbee, sound? Any of these options would be possible.

Revising the project goals to be SMART led me to the following list of
goals:

- A continuously adjustable high-brightness RGB LED filtered through a
fogged acrylic cover for even light dispersal.

- Continuously variable brightness control that will allow me to choose
any brightness setting between completely off and fully on.

- Bluetooth low energy 4.0 wireless specification interface,
controllable from an iOS or Android devices as well as an optional
dedicated controller.

> 2016 Michael here, I never completed this project and just ended
up buying a bunch of Philips Hue bulbs instead, but it's still a good
example.

With the exception of "time bound" these goals meet all of the criteria
of a SMART design and allow me to proceed forward with a clear vision of
what I want to accomplish.

**By doing your research first and setting SMART goals for your project
you place yourself on the right track to create that perfect design.**

### Visualizing Your Design

Now that you have a clear idea of what you want, it is time to start
designing it. Before you start scouring the internet for parts or
drawing crazy schematics in your notebook, I would advise you to **take
some time to develop a clear picture of how you want your final design
to function**.

Try to determine how your parts will work together to achieve the goals
you set. **This is a good time to be thinking about your design from a
system level.**

{% 
    include image
    name="system-design.png"
    caption="System level design for bluetooth LED lamp"
%}

You may not know specifics like what supply voltages you will need or
what connections need to be made, but you will be able to consider how
each component will rely on the others and what additional components
they will add to your design.

**This is also a good time to consider the aesthetic aspect of your
design.** Are you trying to fit a certain form factor? Do you need
to consider ergonomics (for example if you are designing a game
controller)? Will you be able to pick up your design a year from now and
understand exactly how it works? These are the types of details that,
while seemingly insignificant, can be the difference between a good
design and a great design.

I know all this talk of visualization may sound cheesy and like it
won't really get you anywhere, but I assure you it is worthwhile. If
you don't want to believe me, consider this quote from Nikola Tesla's
autobiography where he describes his creative process:

> My method is different. I do not rush into actual work. When
I get an idea I start at once building it up in my imagination. I change
the construction, make improvements and operate the device in my mind.
It is absolutely immaterial to me whether I run my turbine in thought
or test it in my shop. I even note if it is out of balance. There is no
difference whatever, the results are the same.

Of course the vast majority of us aren't at the level of crazed genius
that is Tesla, but the idea behind this method is all the same.
**By visualizing your design beforehand you save time, money, and
frustration**.

{% 
    include image
    name="tesla-nightlight.jpg"
    caption="Tesla turns on a Nightlight"
%}

### Choosing Parts

This is perhaps the most tedious step in the design process, but is
crucial to a successful design. **Choosing the right part for your
design could be the difference between finishing your project and giving
up in frustration**.

See my [article on choosing electronics
components](/choosing-electronics-components) for my suggestions.

### Sketching Your Connections

The final step before we switch over to software is to get a "first
draft" of your design onto paper. Nikola Tesla would not approve, but
he's not around to stop you so don't worry. This is a good way to get
the specifics of your project organized in a coherent manner. I like to
separate each system level block on a new page.

I also think it is useful to make a note here of what each important pin
on the component does. It probably wouldn't hurt to get started on your
bill of materials as well, this may change as your design evolves, but
it at least serves as a good starting point.

In addition to the basic information, you may also want to include some
more detailed info about the part that you think may be important. For
example, it may become tedious to refer back to the datasheet for I2C
address information or possible pin configurations, these are good
details to include in your notebook.

<p>
For sketching my designs, both electrical and mechanical, I like to use this <a href="http://www.amazon.com/gp/product/0596519419/ref=as_li_ss_tl?ie=UTF8&amp;camp=1789&amp;creative=390957&amp;creativeASIN=0596519419&amp;linkCode=as2&amp;tag=michaelhleona-20" target="_blank">excellent Maker's Notebook from MAKE.</a><img style="border: none !important; margin: 0px !important;" alt="Amazon Link" src="http://ir-na.amazon-adsystem.com/e/ir?t=michaelhleona-20&amp;l=as2&amp;o=1&amp;a=0596519419" width="1" height="1" border="0" />
</p>

{% 
    include image
    name="makers-notebook.jpg"
    caption="My Maker's Notebook"
%}

With a well-defined grid, a page marker, the included organization
features, and the extra pointers they include in the back, this isn't
your average notebook. The Maker's Notebook is specially designed by
makers, for makers, and I love mine.

> 2016 Michael here, while I still appreciate the Maker's
notebook, my current preference is the [Baron Fig Dot Grid
Confidant](https://www.baronfig.com/pages/confidant).

After you have finished sketching your design, you have completed all of
the pre-layout checks and are ready to move on to the physical design of
your PCB.

## Putting the Design into Software

> When I set out to design my first PCB I was told "**Well, it's
your first PCB so it probably won't work anyways, but that sounds
interesting.**" Even though this was discouraging to hear, I didn't let
it stop me and I ended up with a working design. I now want to take my
experiences as well as the experiences of others and make it as simple
as possible for you to design your own PCB.

Now that you have an idea of how you want the project to turn out, it's
time to start moving the design onto your computer

### Choosing a CAD Package

The first step is to choose what CAD package you will be using in order
to design your PCB. If you don't already have a preference then [see my
suggestions here](/choosing-eda-software).

During the remainder of this article I will be using KiCad for
explaining concepts of PCB design. I will do my best to cover the topics
at a high level so you can easily transfer these ideas into the CAD
package of your choosing, but if you are undecided **I wholeheartedly
encourage you to try KiCad for your next design**.

### Best Practices for Electrical Schematics

The difference between a good schematic and a bad schematic is a matter
of how easy it is to understand. See [this article for my thoughts on
schematic design best practices](/electrical-schematic-best-practices).

## Final Preparations for PCB Layout

Now that you have your schematic entered into the computer and all the
connections have been validated, you can move on to physical layout of
your PCB. This is the most complex part of the design process and there
are far too many different possibilities for any single guide to provide
a full list of guidelines in a sensible manner. That being said, I will
do my best to provide general guidelines for producing a manufacturable
and electrically sound PCB.

### Choosing a Manufacturer

I'm sure it may seem like a strange suggestion to choose your
manufacturer before you begin board layout, but I assure you there is a
good reason for this, which will become clear in the upcoming sections.

No two PCB manufacturers are the same and each one has different
limitations. See [this article for my thoughts on choosing a PCB
manufacturer](/choosing-a-pcb-manufacturer).

### Defining your Design Rules

After choosing a manufacturer you should make note of their
manufacturing constraints. As an example, at the time of writing the
minimum specifications for OSH Park were:

- 6 mil copper traces
- 6 mil spacing between traces
- 13 mil drill diameter
- 7 mil annular rings [Defined as (diameter of the pad - diameter of the hole) / 2]

This means that these should be the smallest features you use under any
circumstances. **Using smaller features will likely result in broken
traces, overlap of traces and copper fills, or busted vias.**

Once you determine these rules, you should head into your CAD software
and define them. This will enable some design for manufacture (DFM)
checks to take place as you design so your program will not allow you
to perform operations that will cause you to have non-manufacturable
boards.

This is one step of the process where EAGLE generally has a distinct
advantage over KiCad, most board houses provide a design rules file
that can be imported directly into EAGLE. This saves a few steps in
defining design rules, and reduces the chances that you will end up with
incorrectly defined rules.

> **Note:** Just because your fabrication house can do a 6 mil trace
doesn't mean you should use exclusively 6 mil traces. You should use the
largest traces possible that will still allow you to fit your design in
the required space. Using larger traces improves reliability, decreases
parasitic resistance, and as a whole results in a better circuit.

### Do I Need a Ground Plane?

One of the more debatable topics in designing a PCB is deciding
**whether to include a ground plane or not**. While it is nearly
standard practice to include a ground plane in your design, this
is not always required and can in some cases actually result in
worse performance. But how can you know when you should and when you
shouldn't?

First, it helps to know what a ground plane is. Simply put, **a ground
plane is a copper layer on your PCB that acts as a common ground to many
devices**. It is called a ground plane because it often occupies an
entire layer, which creates a planar surface to conduct charge.

{% 
    include image
    name="pcb-trace-geometry.png"
    caption="Illustration showing the difference between a trace, the PCB, and the copper plane"
%}

**What are the benefits of a ground plane?** There are several benefits
to using a ground plane in your design, the most common are to provide
electromagnetic shielding, lower the resistance of the path to ground,
and to assist with heat dissipation across the board. These benefits
are excellent for the vast majority of designs, but there are also some
drawbacks to using a ground plane in your design.

**What are the drawbacks of a ground plane?** Perhaps the largest
drawback of using a ground plane is the increase in parasitic
capacitance. Parasitic capacitance is an undesirable effect that will
essentially cause your circuit to be less "responsive" than intended.
For most applications this is just fine, but for exceptionally quick
response circuits it may be worth removing the ground plane.

Ultimately, it is up to you to decide whether you need a ground plane or
not. Here are a few guidelines to help you make the decision:

- If your design is not particularly high performance, **it's your
call.**

- If your design includes RF range signals, you should **always use a
ground plane.**

- If you have components that rely on fast changing input signals you
may choose to **not use a ground plane at all** or to **remove part of
the ground plane around those inputs**.

- If you're just not sure, **use a ground plane**. The chances are in
your favor that the circuit will behave as expected with a ground plane,
even if that is not required. The opposite is not quite true.

### Special Considerations

In addition to considering the ground plane and adhering to design rules
there are some other special cases in which you may need to consider
other effects.

- **Designing for RF** - If your design will be operating in the radio
frequency range or using similar high frequency components, there are
many special design factors to consider. This topic is too in depth to
cover right here, right now, but this [post from EEWeb][1] outlines some
good notes to get you started.

- **Mixed-signal designs** - If your PCB carries both analog and digital
signals then you will want to make certain that you have fully separated
these signal paths. The fast changing voltages used in digital circuitry
can cause your analog circuitry to behave erratically. Mixed-signal
design is a whole field of study on its own (as-is RF) so if you are
working with these designs it is probably best to seek the help of an
experienced designer.

- **High voltage work** - High voltage circuits require extra care
when designing and testing so as to avoid exciting outcomes like
heart-stopping electrocutions, electrical fire starting mishaps, or
other disasters. If you are designing for high voltage applications
then stop reading and seek the assistance of a grizzled old electrical
engineer experienced in high-voltage designs.

Once you're absolutely certain that you should be capable of designing
the circuit yourself, you can move on to the next step.

## Get to Work!

Finally, what we've been working towards the whole time. Now that you
are a few hours (or days, or weeks) into the design process, you can
finally start working on what you have been planning so carefully for.

At this point, you want to start converting your design from the
schematic connections into a manufacturable board. See [my article
on PCB layout best practices](/pcb-layout-best-practices) for my
suggestions on how to make this process as smooth as possible.

### Final Design Checklist

Before moving on to the manufacturing phase I recommend that you run
through my [PCB Final Design Checklist](/pcb-final-design-checklist) to
verify the design. This will take roughly an hour but can save you a lot
of heartache later.

## Manufacturing The Board

Since you should have chosen a manufacturer by now, this part of the
process is going to be relatively easy.

The first step in preparing your design for manufacture is of course
to perform the final design checklist. Since we covered that in the
last section, it's okay to go ahead with the rest of the manufacturing
process.

### Run a Design Rules Check

Before going any further, you will want to run one final DRC. This
generally checks that your PCB layout matches the schematic and that
your layout follows all of the design rules that you defined. If the DRC
catches errors, you should review each one individually and either fix
the problem or mark it as a false warning.

Another thing to check is that all of your connections have been made.
Sometimes the DRC tool does not check connections, or your ratsnest may
be too small to notice. You want to be extra certain that all of the
board connections are complete before moving on.

### Generate the Bill-of-Materials (BOM)

A bill-of-materials (BOM) is used by the assembly house, or for your own
use. Either way, it is important to have a good list of your parts. Here
are the important details to include in a BOM:

- Component reference designator
- Component package
- Quantity required for one PCB
- Description
- Manufacturer
- Manufacturer reference number
- Supplier
- Supplier reference number
- Cost per unit
- Alternative parts allowed, if applicable
- Comments

Most CAD software can export a BOM automatically, but you will generally
want to format it and make sure that everything is correct.

One reason to make a good BOM, even if you are not using assembly
services, is because many parts suppliers will allow you to upload this
file directly to their website and automatically purchase components. I
know Mouser and Digi-Key support this, others may as well. **This method
will save you hours of time searching for components and adding them to
your order.**

### Export the Board Files

Each fabrication house will have different requirements for how you
should submit your design but nearly all of them accept one common file
format called "Gerbers." Some will even accept your CAD files directly,
but this isn't universal and you shouldn't rely on it.

Each software has a different process to follow in order to get Gerber
files out, here are some tutorials that show you how to export Gerber
files from EAGLE or KiCad.

- [Prepare EAGLE files for manufacture][2] from Hack-a-Day
- [KiCad Tutorial: Gerber file generation][3] from Wayne & Layne

### Final Manufacturing Checklist

As one final check before sending your design for manufacture I
recommend verifying that you use the [PCB Final Manufacturing
Checklist](/pcb-final-manufacturing-checklist) before submitting your
design.

### Send it to Your Manufacturer

That's it! Depending on the service you chose for manufacturing, the
instructions will vary, but from here on out the process is relatively
straightforward. Upload your files, cross your fingers, and hit submit.

## The End

That brings us to the conclusion of this guide, I know you've been hit
with a lot of information. If you read this entire article and the
suggested supporting articles then you soaked up over 11,000 words of
PCB designing goodies. That's more information than a silverback gorilla
retains in its whole life<sup>1</sup>!

I hope you've found at least parts of this guide to be helpful and that
you will make use of it in your future designs. I attempted to make
it general enough to be useful for any CAD package at any point in
time. When searching how to do stuff like this it is incredibly easy to
stumble across information that just isn't relevant anymore, so I hope
this will help.

I worked on this post off-and-on for about two weeks, even though I
reviewed it several times before posting, **I don't make any claim that
it's perfect**. If you see issues in my writing or think my advice is
bad then feel free to let me know.

1. Maybe, I have no idea.

[1]: http://www.eeweb.com/blog/circuit_projects/basic-concepts-of-designing-an-rf-pcb-board
[2]: http://hackaday.com/2009/01/15/how-to-prepare-your-eagle-designs-for-manufacture/
[3]: http://www.wayneandlayne.com/blog/2013/02/27/kicad-tutorial-gerber-file-generation/
