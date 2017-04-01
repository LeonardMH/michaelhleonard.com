---
layout: post
title:  "PCB Layout Best Practices"
date:   2013-07-24 15:00:00 -0600
categories: hardware
---

### **To Autoroute or Not?**

Should you use the wonderful autorouting features of your CAD package or
not? For those who don't know what an autorouter does, it automatically
connects the traces in your board in a pattern that the software deems
is most efficient. Some CAD packages also include an "Autoplacer" which
will automatically place your components for you before routing.

**In general you are probably better off avoiding both of these tools**
for simple hobby work or even moderately complex designs. Honestly, if
you have a thorough understanding of your circuit, and you should by
now, then you will be able to do a better job of placing and routing
components.

There are of course a few exceptions to this guideline. If the design
you are working on is complex and it would take you weeks or months to
perform a proper layout by hand, then you should try to get access to
an advanced CAD package to make use of the significant research these
companies have put in to autorouting algorithms.

In addition, if you are just dreading the idea of sitting at a computer
ensuring that your design is perfect, then you may just wish to place
your necessary components, lock them into place, route the critical
connections, and then run the autorouter. **This is the recommended way
to use the autorouter if you choose to do so.**

### Drawing the Board Outline

The first step is to draw the outline of your board. This layer tells
your fab house where to cut to give you the right sized PCB.

{% 
    include image
    name="board-outline.png"
    caption="BeagleBone Black cape, board outline layer"
%}

To draw the board edge you will begin by switching to the layer that is
designated for cutouts. Depending on your CAD package, this could be
"Edges", "Board", "Cutout", or something else along those lines.

After selecting the board edge layer make good use of your drawing grid
to ensure that you have straight lines of a well-defined length. If
your board needs to be a specific size then make sure you are using the
correct measurement units for your grid. If you draw your board in mm
instead of inches, you will get a little surprise when you try to place
your parts and can't fit them all on the board.

A few tips for drawing your board edges:

- **Set your drawing grid at a reasonable spacing.** This will depend on
what kind of resolution you need and make sure your cursor is set to
**snap to the grid.**

- If you are using EAGLE or another program that supports it, **make use
of the keyboard commands for defining lengths of segments**.

- **Consider using alternate axes.** Most CAD software
supports some method of setting an alternative origin point, this will
allow you to draw lines of specific length without needing to subtract
coordinates in your head. If your CAD package supports #2 then you may
not need to use this feature, but I have found it helpful in KiCad.

- **Ensure that all the edges line up exactly**. If you have a spot on
the board where two edges meet but don't quite touch, then you should
fix that now. Trying to send your board to the fab house like this will
result in them responding to you with a solid "No thanks." Fix this
issue before it becomes a headache to fix.

> **Alternative Method:** If your board doesn't need to be any specific
size or shape then you may want to wait until the end to draw your board
edge. But if you have any predetermined requirements for the board, you
will want to start with this step.

### Placing Components

Next up, you will want to place all of your components inside the board
outline. **You should start with components that have a set physical
location** such as connectors or sensors that can't be blocked.

After that, you will want to begin placing your ICs. **Start with the
largest ICs first and then place the smaller ICs as you go**. ICs with
more pins will require more room around them for routing traces and
placing auxiliary components. **Try to leave extra room around devices
that have many pins.**

Another thing to consider when placing devices is to **try to keep all
your ICs oriented in the same direction on the board.** This is not a
strict rule, but it can sure make assembly much simpler and is generally
not a bad rule to follow. If it just isn't possible then don't worry
about it.

**Once all of your physical components and your ICs are in place you
can place the supporting devices.** Things like resistors, capacitors,
diodes, etc. This is a good time to refer back to your design notes
and make sure that any components which need to be physically close to
an IC are in a good position. If you have components that have these
requirements then I would recommend locking them in position after
placement.

One final thing, you will want to consider **leaving space for
annotations and markings on the board**. I'll discuss these things in
more detail in a bit, but you'll want to make sure there is enough space
around your components to leave some lettering near anything that may
need it. For more info on this, jump down to the "Adding Some Style"
section.

### Making Connections

So, everything is in position and the board is starting to look like it
will come together. The next step is to make it all work! You could just
start by connecting pins all willy-nilly as you see fit, but taking some
time to do it right will pay off in the end, which is coming sooner than
you think.

There are two recommended ways of starting out laying your traces.
You can begin by routing your power traces first and then focus on
everything else, or if your design has high frequency signals you
can begin by routing those first. Other than that, the rest of the
connections are up to you.

While there isn't any single "right" way to lay-out the rest of your PCB
traces, there are some methods that are "more right" than others. You
can see my recommendations below, and I hope to see a few more additions
come from the community.

- **Make use of thick power supply traces.** The power supply rail will
most likely be the most active trace on your PCB and since it will
be supplying the more current than any other trace it also deserves
some special attention when determining how wide it should be. As a
general guide I like to use 20 mil power traces. For low power circuits
this is probably overkill and you could get away with less, for higher
power circuits this may not always be enough. If you are designing
circuitry that is going to draw current in the Ampère range as opposed
to milliAmpère then I suggest taking a closer look at your trace width.
[This handy calculator](http://circuitcalculator.com/wordpress/?p=25/)
will help you calculate the correct width to use for your traces.

- **Avoid routing two (or more) high frequency signal traces in parallel
with each other.** According to Ampère's law (with Maxwell's correction)
we know that a changing current induces a magnetic field around the
wire, we also know that a changing magnetic field induces a current
perpendicular to the direction of the magnetic field. This effect can
cause two parallel wires to couple together so that a change on one
wire can induce a change on the other. You can avoid this by keeping
high frequency traces separate and only crossing them in perpendicular
alignment.

- **Try to group similar signals together.** If you have a bunch of
wires coming from a single device that all perform a similar function
then you should try to keep them neatly grouped until it is absolutely
necessary to split them up. This will allow you to more easily follow
the signal path and will help you end up with a cleaner looking board
after fabrication.

- **Minimize your use of vias**, but not at the cost of dramatically
increasing signal paths. This recommendation may just come as a result
of my fascination with aesthetic design, but there is
also a practical reason to use fewer vias. The simple point is that vias
are a manufacturing risk. While it isn't likely that your board house
will mess up and drill a hole too large or break the conduction ring,
it is completely possible. Having fewer vias on the board reduces this
risk. Another benefit of reducing vias is that it results in a shorter
signal path (even if only a tiny reduction). This type of caveat is
really only important in RF designs, but if there is a way to improve a
circuit, I'm always looking for it.

- On the other hand you could, **use two inline vias at every signal
pin.** I know this may make me look like a hypocrite or an otherwise
very confused person but there are also situations in which more vias
could help. If you are working on a prototype circuit, extra vias allow
you to easily create test points, and to simply cut and reconfigure
traces. This recommendation comes courtesy of a reader, James Edwards I
believe, but I couldn't find the original comment.

There are probably some more useful pointers that I'm just not thinking
of, but nothing comes to mind right now. I will add more as I think of
them.

### Adding Some Style

You're almost there, the last major step before moving on to manufacture
is to add the finishing touches to the board. This may seem like it's
just aesthetics, but there are several practical reasons to include some
extra markings on your board.

The first decision you need to make is whether or not you should include
component reference numbers or values. As an example, do you want your
final design to indicate that "this" resistor is R11 and has a value of
4.7k or do you want to just mark it as R11? Maybe you don't want to mark
it at all?

This is really up to you. My thought is that you will be one of the
few people who actually looks at the board components and if you are
looking at the board you will be able to easily pull up a schematic for
reference. For that reason, **I do not include reference numbers or
component values on my final designs.**

Having said that, there are some components that can benefit from a
bit of labeling. **Generally you will want to label any LEDs, buttons,
switches, connectors, or otherwise important devices.** I guess the
argument could be made that ALL the components are important, but I am
specifically referring to parts that would be good to know when using
the device.

SparkFun gives some good advice on labeling in [their PCB
guide](https://www.sparkfun.com/tutorials/115). I am particularly fond
of the example shown below.

{% 
    include image
    name="sparkfun-labeling.jpg"
    caption="Proper labeling of an accelerometer breakout board"
%}

After all of the functionally important components have been labeled,
you may have a bit of room left over for more labeling. Don't
overcrowd the board, but you may want to include your name or
some sort of branding. Perhaps a logo? You can do this easily in
[EAGLE][eagle-graphics] or KiCad using the built in tool or this
[online tool from Wayne & Layne](http://img2mod.wayneandlayne.com/).

[eagle-graphics]: http://www.instructables.com/id/Adding-Custom-Graphics-to-EAGLE-PCB-Layouts/
