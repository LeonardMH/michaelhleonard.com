---
layout: post
title:  "Electrical Schematic Best Practices"
date:   2013-07-24 15:00:00 -0600
categories: hardware
---

As far as I know, there are no standard guidelines for drawing schematics. Most of us learn by trial-and-error, pick up the habits of our teachers, or just never learn. I think it's time that these guidelines found a home.

The purpose of an electronics schematic is simple, to describe how components are electrically connected. A schematic does not necessarily indicate the physical relationship between components, though a good schematic will make this obvious when necessary.

<strong>The difference between a good schematic and a bad schematic is a matter of how easy it is to understand.</strong> If another person is able to look at the schematic and simply understand it, you have made a <em>good</em> schematic, if another person has to look at your schematic and decipher it, you have made a <em>bad</em> schematic. Here are my suggestions for making a <em>good</em> schematic.

<h4>Labels and Comments</h4>

Labels and comments on your schematic come at no cost to you so you might as well use them. <strong>You should <span style="text-decoration: underline;">always</span> label your components.</strong> Most schematic editors will do this automatically for you, but if yours doesn't then you <strong>must</strong> do this. There are some generally standard designators in use today, the most common are:

<ul>
    <li><strong>R, C, L, and D</strong> - These are the default designators for your most common passive components. R is for resistor, C is for capacitor, L is for inductor, and D is for diode (including LED). These are standard designators and you should not use any other designator for these components. The only exception to diode marking is if you are using a Zener diode, in that case refer to it as Z.</li>
    <li><strong>M and Q - </strong>Standard designators for transistors. MOSFETs are referred by M while BJTs are referred by Q. M can also stand for Motor, if you are using a motor in your design then refer to all transistors as Q.</li>
    <li><strong>T or XFMR</strong> - Transformer</li>
    <li><strong>S or SW</strong> - Switch, this includes pretty much any type of switch, even push-buttons. You can use either designator, but you should only use one. Consistency is key, I recommend SW.</li>
    <li><strong>X or XTAL</strong> - Generally refers to crystal oscillators, X can also be used to designate subcircuits. I recommend XTAL.</li>
    <li><strong>U or IC</strong> - Designates an integrated circuit, U is the most common designator but IC is just as clear and well understood.</li>
    <li><strong>TP</strong> - Test point, these are handy and you should make generous use of test points in your circuit while it is in the prototype stage.</li>
    <li><strong>JP</strong> - Jumpers</li>
    <li><strong>J or P</strong> - These designate jacks or plugs, respectively. Jacks are generally female while plugs are generally male.</li>
    <li><strong>F</strong> - Fuse</li>
    <li><strong>FD</strong> - Fiducial, these are used in the manufacturing phase and help the automated placing machine know exactly where to place parts on your board.</li>
    <li><strong>BT or BAT</strong> - Designates a battery or battery connector.</li>
    <li><strong>X</strong> - Parts not covered by the above rules. You should leave a label near these parts to note their function.</li>
</ul>

These rules are extremely helpful when sharing your designs with others, or when you need to come back to your design in the future. However, having correctly referenced parts is not necessarily enough to make a good schematic. It is also good practice to <strong>comment on non-standard parts or on important performance details</strong>.

For example, if you have a component that requires a very large power trace or special shielding then you should note this on the schematic. For more advanced circuits, such as RF designs, you would also want to note required trace lengths or impedances.

There are too many examples to list all of the situations in which you should make use of comments, but a good guideline is to<strong> ask yourself "If I were to look at this circuit in one year, would I still know what it is doing and how to take it to layout?"</strong> If it passes this test then you are on your way to creating a successful design.

Another recommendation for making your schematics clear is to be mindful of where your labels and comments are placed. If a label is placed over another label or over a component outline then you might as well not have it there at all because it won't be readable. <strong>Take the few extra seconds to move your labels into a logical position near the component while not overlapping other components or labels.</strong>

The final guideline for proper labeling is to <strong>remember to label your most important nets</strong>. Don't go overboard with this, but a few net names to remind you of functionality is an incredibly simple way to ensure that you are making an understandable schematic. Additionally, <strong>keep the names as short as is reasonable, use all caps, and separate words with underscores</strong>.

This means that instead of "Pin going to output" as a label you would want to do something like "TO_OUT" or even better, just "OUT." This will ensure that you have readable schematics with signal names that are obvious and intuitive.

<p style="text-align: center;"><a href="http://www.michaelhleonard.com/wp-content/uploads/2013/07/1.png"><img class="aligncenter" src="http://www.michaelhleonard.com/wp-content/uploads/2013/07/1-1024x454.png" alt="Good labeling practices vs poor labeling" width="819" height="363" /></a></p>

<p style="text-align: center;">An example of good labeling against poor use of labels.</p>

<h4>The Logical Schematic</h4>

I'm not certain where the convention came from, but it is always customary that <strong>inputs come from the left</strong>, <strong>outputs go to the right</strong>, <strong>power comes from the top</strong>, and <strong>ground or negative voltages go to the bottom</strong>. I recommend following this convention whenever it is possible and reasonable to do so.

Of course you can't always do it, but at the very least try to <strong>separate your power pins from your I/O pins</strong>. If you have multiple voltage rails, the more positive voltages are generally higher on the schematic, though this is not a do-or-die rule.

<p style="text-align: center;"><a href="http://www.michaelhleonard.com/wp-content/uploads/2013/07/2.png"><img class="aligncenter  wp-image-928" src="http://www.michaelhleonard.com/wp-content/uploads/2013/07/2-1024x687.png" alt="A completely illogical circuit vs the standard common emitter" width="717" height="481" /></a></p>

<p style="text-align: center;">The standard common emitter vs. a completely illogical implementation of the same circuit. It was actually difficult to draw the circuit on the right.</p>

Dot your i's and cross your t's. Well, something like that, this is a convention that comes from the days when low resolution photocopying was common. It is universally accepted that you should <strong>make a very clear dot where two wires form an intersection</strong>, your CAD package will usually handle this for you but it is good to keep in mind.

Related to crossing connections, you should also try to <strong>avoid 4-way connection points</strong>. This is another recommendation from the days of photocopying circuits, but it never hurts to design for longevity.

<p style="text-align: center;"><a href="http://www.michaelhleonard.com/wp-content/uploads/2013/07/3.png"><img class="aligncenter  wp-image-927" src="http://www.michaelhleonard.com/wp-content/uploads/2013/07/3-1024x394.png" alt="Crossing connections" width="717" height="276" /></a></p>

<p style="text-align: center;">The proper way to connect three wires.</p>

<h4>Using Hierarchy the Right Way</h4>

The final pointer in ensuring that your schematic makes sense is to utilize hierarchy effectively. This means that you <strong>separate logically different parts into a new sheet</strong>. By all means, if you can fit your entire design into a single sheet without cramping it together and still following the other rules, you should do that. Otherwise you might as well separate functionally different parts of the design into separate sheets.

There are different ways to do this in each CAD package, but the basic idea is the same. <strong>By keeping related components near each other and avoiding the clutter of other components you will be able to more easily verify and debug your design</strong>.

If your schematic doesn't necessarily require multiple sheets then you should still do your best to attempt to introduce a bit of order into the chaos that is an electrical schematic. My preferred method is to draw a box around a functional unit and then place a label inside the box to indicate what that design does.

<p style="text-align: center;"><a href="http://www.michaelhleonard.com/wp-content/uploads/2013/07/4.png" target="_blank"><img class="aligncenter  wp-image-924" src="http://www.michaelhleonard.com/wp-content/uploads/2013/07/4-1024x555.png" alt="Demonstration of Functionally Separate Blocks" width="819" height="444" /></a></p>

<p style="text-align: center;">While this schematic may not follow all of the rules in this guide, it does a good job of demonstrating functional separation. (Click to see full image)</p>

<h4>Other Tips</h4>

In addition to the general guidelines above, I have managed to compile some other tips that will lead to a successful design. If you have some of your own, feel free to submit them in the comments below (along with an explanation) and I will add them to the list.

<ul>
    <li><strong>Show decoupling capacitors near the device they are protecting.</strong> This is one of the few devices where it is important to indicate physical presence of a component. Decoupling capacitors are used to smooth out the ripples at the power supply of a component, in order to effectively do this, they need to be placed physically close to the component. This proximity should be made clear in the schematic.</li>
    <li><strong>Design for easily printable schematics.</strong> While most schematics today are handled electronically, it is not at all uncommon to want to print the design out, either to share it in a meeting, or to review it with a pen in hand. For these reasons, you should always make sure your schematics are designed to be easily read and analyzed at whatever paper size is common in your area. For the U.S. this is 8.5" x 11" for Europe, the most common size is A4 which comes out to about 8.3"x11.7" or 210mm x 297mm.</li>
    <li><strong>Make your schematics understandable even if they are printed in black and white.</strong> Many office printers are not capable of printing in color. I also often find that I prefer the look of monochrome schematics when they are printed. If you design your schematic to be readable and understandable without color then it will make it easier to analyze your design later.</li>
    <li><strong>Air wires.</strong> Use them when you have to, avoid them when it's practical. The point is to make your schematic as easy to understand as possible, so if it makes sense to put a label on a wire and connect it to others by using that label then feel free to do so. Just keep in mind that air wires can make it difficult to debug your circuit later since you must manually search for all of the connections.</li>
    <li><strong>Consider revision control.</strong> Undoubtedly, you will end up making several versions of your original design. It is best to plan ahead for this and to manage your different versions intelligently. I like to use a combination of <a href="http://git-scm.com/">git</a> with <a href="http://bitbucket.org">bitbucket</a> to track my designs, but there are other methods such as manually saving version numbers or date codes into the project name.</li>
</ul>

Like I said, these are just a few tips I have picked up from my experience, if you have your own then submit them in the comments and I will add them to the article. Now that you know the best practices for getting your design into the computer, get to work! The next step is to start with the physical layout, this is where it starts to get interesting and you will want to have a solid schematic under your belt before you move on.