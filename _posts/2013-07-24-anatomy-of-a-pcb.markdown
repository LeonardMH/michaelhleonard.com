---
layout: post
title:  "Anatomy of a PCB"
date:   2013-07-24 15:00:00 -0600
categories: hardware
---

{% 
	include image
	name="pcb-cutaway.jpg"
	caption="A PCB cut-away to reveal the inner layers"
%}

### Board Materials

First we should understand what materials go into a PCB. At the most
basic level, the base of the PCB is formed out of some sort of solid,
non-conductive, material. This material is then laminated with a copper
(or other metal) sheet, this creates the conductive surface.

The base material is usually a type of glass-reinforced epoxy known as
FR-4. This is the most common material because it is flame resistant,
cheap, and of course has a low conductivity.

For higher performance circuits (RF), there are other types
of materials to consider such as ceramic or PTFE bases with
various fillers. Since this article is more focused on general
PCB design I will not go into details about designing for RF.
Fortunately the EDN Network has posted a useful article on
[choosing PCB materials for high-frequency circuits](1)

Really these two materials are about all that goes into a bare PCB. When
you send your design for manufacture (or do it yourself) the electrical
connections are usually created by removing select copper portions of
the bare PCB.

### Layers

The **cheapest PCBs are single sided boards**. This means
that they are just made of the base material, with a single sheet of
metal over the top.

Single sided boards are incredibly easy to work with, if you are making
your own PCB at home you will most likely be designing for a single
sided board.

While the single sided boards are simple to manufacture and understand,
they can also be a pain when laying out your PCB. Since you only have
one layer of metal to work with, you cannot cross electrical connections
without the help of some external jumper.

As a result of this complication the majority of simple commercial and
hobbyist boards are created on double sided PCBs. On a double sided PCB
it is a simple matter to cross electrical connections and this fact
allows for more complex yet elegant designs.

For all but the simplest of designs **I recommend designing for
a double sided PCB**. This is generally the most cost effective
method that will leave you with the least headache possible.

As designs become even more complex, it may even become necessary to
add additional layers to your design. This can be useful if your board
has incredibly complex signal paths or if you are aiming for a compact
design.

**For the majority of users I do not recommend using more than two
layers**, if you do this and do not need to you will end up with
an unnecessarily complex design that will cost more to produce.

### Copper Traces

The copper traces on your PCB are easily the most important part of the
design so it is important to understand what they're doing and what
limitations you should consider.

As I mentioned earlier, copper traces are created by removing copper
from the solid sheet that sits on top of the base material.

This means that the traces on your board are in fact just thin layers of
copper. I don't know about you, but when I discovered that it came as a
bit of a surprise (relax I didn't just find this out). For the longest
time I assumed that PCBs were manufactured by pouring copper into a
mold, letting it cool, and then somehow melting an insulator around the
copper.

The thin sheet nature of these traces mean that there are some
constraints to consider when routing your traces, most importantly, size
considerations.

### Vias

The final "main component" of a PCB would be the ever useful via. Vias
are used in multi-layer boards to electrically connect one layer to
another.

There are essentially three types of vias, only one of which is common
in the hobbyist world. These via types are:

- **Through hole** - Most common type of via, a hole is drilled through
the whole board and then electroplated so that it is conductive.

- **Blind** - A blind via is used in designs with more than two layers
to connect a surface layer to an internal layer without going all the
way through.

- **Buried** - Buried vias are similar to blind vias but are only used
to connect internal layers.

### Other Things

After discussing PCB materials, possible layering options, copper
traces, and vias we have pretty much covered the basics for what makes
a PCB what it is. Understanding these things certainly gives you enough
information to make your own working design, but there are still some
other concepts to consider.

Some other PCB concepts to explore:

- **Soldermask** - If I had to guess what you think of when I say "PCB"
I would bet that it is probably something green. Did you know that PCB's
are not this color as a result of what material is used? This is in fact
another layer that is applied to the board after manufacturing. The
purpose is to keep solder paste from spreading where it shouldn't be,
but it also has the effect of giving the board a definite style.

- **Fiducials** - These are special markings on your board that allow a
pick-and-place automated assembly machine to calibrate itself. Fiducials
are usually just a circle where the soldermask has not been applied
with copper circle in the middle. This makes the point appear fairly
reflective.

- **Silkscreen** - This is also another layer of the PCB added
after fabrication. Silkscreen is used to provide visual cues to
the user, document board information, identify proper component
placement, or for branding. There are conflicting suggestions on proper
usage of silkscreen which I address in [Design the Perfect
PCB](/design-the-perfect-pcb).

- **Copper fill** - Deciding whether to use a ground/power plane in your
design will be an important decision to make during the design stage.
The most common reasons for using a copper fill are to suppress noise on
the ground circuitry, dissipate heat from a particularly active device,
or because someone told you that was the way to do it.

[1]: http://www.edn.com/design/components-and-packaging/4390174/Selecting-PCB-materials-for-high-frequency-applications