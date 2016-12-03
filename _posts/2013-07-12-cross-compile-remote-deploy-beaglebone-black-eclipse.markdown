---
layout: post
title:  "Cross-Compile and Remote Deploy for BeagleBone Black using Eclipse"
date:   2013-07-12 9:0:00 -0600
categories: beaglebone programming howto
---

**This article explains in detail how to cross-compile for BeagleBone
Black then easily run your program from within Eclipse.**

> Note: This article is fairly old at this point, Linux and Eclipse
have had a few updates in that time, this article has not. Perhaps the
instructions below will be of assistance to you but if not, check the
comments.

Since I began developing the SensorCape for BeagleBone Black I have
been doing more and more work in the BeagleBone environment. One of
the first things I learned is that it is possible to develop and build
your applications directly on the BBB, but it is certainly not an
efficient use of time.

As your projects grow larger you will find yourself wanting to move
away from the command line and be able to use an IDE. Additionally, the
processor on the BBB will eventually begin to act as a limit on how
quickly you can compile.

{% include image name="beaglebone-black-front.jpg" %}

To fix this problem, we would like to be able to develop and build
our projects on another machine and then easily transfer to the
BeagleBone Black. This doesn’t sound so difficult, after-all why can’t
we just build on our local machine and then transfer the binary to the
BeagleBone Black?

The reason we can’t do this is because your development platform most
likely has a different processor architecture than the BeagleBone Black.

Most modern computers use the Intel x86 instruction set, but many
embedded systems use an ARM architecture. This essentially means that
at the lowest level the two computers don’t speak the same language. To
get your processors speaking the same language we need to cross-compile
for BeagleBone Black by using a compiler that is targeted at the ARM
architecture. So let’s get started!

## Install a Virtual Machine on Non-Linux Systems

When I first started writing this article I wanted to be able to cover
all operating systems, since it is generally a PITA to install a VM
if you don’t have to. Then I realized it was much worse trying to
hack together a toolchain for other operating systems. In addition to
this, after I started getting deeper into development I realized that
it wouldn’t even be practical to develop for the BeagleBone Black on
a non-Linux system since it would be so difficult to obtain certain
libraries and other useful programs.

> **EDIT (5/19/2015)**: If you’d like to give it a shot on a Windows machine
without installing a VM try [this tutorial][windows-instructions].

So to sum it up, I know it’s non-optimal but just trust me, you don’t
want to deal with the headache of developing on a different platform
than you deploy for. Linux distros are all basically the same under the
hood, so if you develop from a Linux platform, it should be able to run
on any embedded Linux system.

There are quite a few virtualization options for both Windows and Mac
but by far the two most popular are VirtualBox and VMWare Player. These
two programs are the leader of the pack for good reasons. First they are
free! Second, they both offer all of the features necessary for a casual
user to fully emulate whatever environment they need.

For some unknown reason, I have always used VMWare Player on my Windows
machines and VirtualBox for my Mac machines. I can’t say I have a
particular preference for either one really, my Windows box is much
better at virtualization, but that is because it is about 2.5x the
computer my MacBook Air is. In the interest of covering all the bases I
will show you how to install a Linux VM using VMWare Player on Windows
and I will show you how to install a Linux VM using VirtualBox on a Mac.

If you are already running a Linux system then you don’t need to
worry about a VM and can skip to the “For Linux” section. However, my
instructions are for a Debian based system, so while you will definitely
still be able to get this to work on other systems it will be easiest if
you too are on a Debian system, that is up to you.

### Choosing a Linux Distribution

There are a seemingly endless amount of Linux distributions (distros)
which you could choose from. For our purposes you will want to choose
a Debian distribution such as Ubuntu or Linux Mint. Ubuntu is easily
the most popular distro but I think that they have gone too far in
simplifying things and have made it more difficult for developers to
use. Linux Mint, on the other hand, is based off of Ubuntu but does not
attempt to hide the gritty technical details either.

For these reasons, I will be using Linux Mint during this tutorial but
you can easily use Ubuntu without changing anything. You can download
these distros from the following locations:

* [Ubuntu](https://www.ubuntu.com/download/desktop)
* [Mint](http://www.linuxmint.com/download.php)

When choosing a download, you do not want any special installers. After
your download finishes and you have uncompressed the download you
should end up with a .iso or similar disk image file once this has been
verified you are ready to move on to installing your virtual machine.

|Windows VM Installation|Mac VM Installation|
|-----------------------|-------------------|
|On Windows I recommend using VMWare and following this [“Getting Started”][vm-install-windows] guide.|On macOS I recommend using VirtualBox and following this very well written [general guide from Lifehacker][vm-install-mac] on installing a VM using VirtualBox.|

## For Linux

### Install Eclipse, C/C++ Tools, and Remote Tools (Debian)

Open up the Terminal and enter:

{% highlight bash %}
sudo apt-get install eclipse eclipse-cdt g++ gcc
{% endhighlight %}

This command installs the main Eclipse package, the Eclipse C/C++
development tools (CDT), the GNU C++ Compiler/Linker (G++), and the GNU
Compiler Collection (GCC). You most likely already have G++ and GCC
installed, and they aren’t even really necessary for this example, but
it never hurts to verify.

After this installation finishes you need to open up Eclipse and install
the “Remote System Explorer” (RSE) plugin. It is possible that RSE is
included in the default Eclipse installation. To check this, go to:

	Window -> Open Perspective -> Other… 

and choose “Remote System Explorer” from the Open Perspective dialog to
open the RSE perspective. If it is not installed, navigate to:

	Help -> Install New Software…

Where the label says “Work with:” click on the down arrow to show a
dropdown box. Select the update site for your version of Eclipse. For
example my version of Eclipse is Indigo, so I chose the Indigo Update
Site.

{% include image name="indigo-update.png" caption="Selecting the Indigo Update Site" %}

Then move your cursor to the search box below and enter “remote”. After
a short wait you will be presented with a list of packages, one of which
will be the “Remote System Explorer End-User Runtime” select this box.

You will also want to scroll a bit further down under the “Mobile and
Device Development” section and select the “C/C++ Remote Launch” plugin.
After you have selected these packages, proceed with the wizard to
finish the install. So again, be sure to install:

* Remote System Explorer End-User Runtime
* C/C++ Remote Launch


{% 
	include
	image
	name="remote-system-explorer.png"
	caption="Installing Remote System Explorer"
%}

Now that your basic Eclipse environment is set-up, we can move on to
installing the BeagleBone Specific functionality.

### Install Toolchain for BeagleBone Black

Plug your BeagleBone Black into your computer using the provided
Mini-USB cable. If you are developing from a virtual machine make sure
that the BeagleBone Black is mounted on your virtual machine and not on
your host machine.

After the BeagleBone Black is mounted it should appear on your desktop
as a removable drive. Navigate to this drive and double-click on
"START.htm". This will run the install scripts and verify that the
BeagleBone Black is operating as expected. After a few seconds you
should see the boxes for Step 1 and Step 2 turn green and earn a
check-mark. This means that you are ready to move on to installation.

To install the proper toolchain for the BeagleBone Black we will pull
the gcc-arm-linux-gnueabi package from the apt repository. This is
included in the default Debian repositories so you can simply type…

	sudo apt-get install gcc-arm-linux-gnueabi

After a short wait the ARM toolchain should install successfully and
you are well on your way to being able to cross-compile for BeagleBone
Black. The next step is to set up your Eclipse environment to make this
process as automated as possible.

> **Note (5/11/2015)**: It looks like some newer versions of Linux have
separated the GCC and G++ toolchains and you will likely need both.
Install G++ with:

	sudo apt-get install g++-arm-linux-gnueabi

### Create and Configure a Project to Build Using this Toolchain

This is where the magic happens, once we complete this section you
should be able to create your own project that will compile on your
local computer and then run on your BeagleBone Black with the push of
a single button. Let’s begin with something simple, a classic “Hello,
World” application.

#### Creating a C++ Project

Navigate your cursor to the “Project Explorer” view. This is usually the
left side-panel but if it isn’t there then you can go to:

	Window -> Show View -> Project Explorer.

With your cursor positioned inside this view,
right click and select:

	New -> C++ Project.

A window will appear asking you to name your project and choose some
project settings. You can name your project whatever you like, I will be
naming mine “Test”.

Then select `Executable -> Hello World C++ Project`. If you have multiple
Toolchain options just choose one, it doesn’t matter since we will be
changing this later.

At the next screen you will be asked to set up some of the template
options, you can leave them as-is or change them to your liking. I will
be changing the Hello World message to Hello BeagleBone. After you are
done with this screen you can go to the next and skip that one, then
select the “Finish” button.

After a moment Eclipse will finish preparing the project and you will
be presented with the familiar “Hello World” program. Just to make
sure there are no weird errors, go ahead and click the build button in
the toolbar (it looks like a hammer). In your console at the bottom
you should see a few compiler commands and it should end with a build
summary.

If you get errors at this point then there is most likely something
wrong with your Eclipse installation, I recommend doing a few Google
searches for help, then re-installing Eclipse if you can’t find a
solution. If all went well then you can move on to the next step.

#### Configure the ARM Toolchain

If you took a good look through your last build log you will notice that
Eclipse used GCC and G++ to compile your program. This is normally fine,
but in our case we want to deploy to an ARM architecture so we need
to reconfigure our project to build using the toolchain we downloaded
earlier.

To do this you can right click on your project name in the “Project
Explorer” and select “Properties” from the menu. This will bring up a
new window where you can modify the build settings of your project.

On the left sidebar of the properties window expand the “C/C++ Build”
category and select “Settings”. This is where you can change your
compilers, linker, and assembler, otherwise known as your toolchain.
Make sure your active tab is “Tool Settings”, we will begin by changing
your GCC Compiler. For my current set-up I change my compiler to:

    arm-linux-gnueabi-gcc-4.7

But this could be different for you, I recommend opening up a terminal
window and typing arm-linux then hitting tab a few times to get a list
of suggestions. This will show you what options you have available. To
avoid messing up, I would just copy and paste from this list. This is
what it looks like on my system.

{%
    include
    image
    name="cli-listing-arm.png"
    caption="Showing available ARM compilers"
%}

You will now go through all four options and change them to their
appropriate ARM equivalents. My GCC compiler command looks like this
after changing it:

{%
    include
    image
    name="arm-gcc-compiler-command.png"
    caption="ARM GCC Compiler Command"
%}

Now you will need to go ahead and update the commands for the G++
compiler, G++ linker, and the GCC assembler. Since this is fairly
repetitive I won’t show each step, but note that (at the time of
writing) the assembler is the only command that does not have a 4.7
after it.

After you have updated your toolchain commands press “OK” and you will
return to the main Eclipse view. To verify that everything worked as
you hoped go ahead and build your project again. If it compiles without
errors then congratulations, the hardest part is over and you have a
binary that can run on your BeagleBone Black.

This next step is just to make everything a bit easier. When we
are done, you will be able to hit the run button and Eclipse will
*automagically* compile your program, transfer it to the BeagleBone
Black, and run it on the BeagleBone Black.

#### Set Up Remote Deployment

Now that we have a project set up and know that it compiles, let’s set
it up to run on the BeagleBone Black. You will start by clicking on the
down facing arrow next to the run button, as shown below.

{%
    include
    image
    name="run-button.png"
%}

When you click on this arrow you will be presented with a dropdown menu,
choose the “Run configurations…” option and you will see a new window
that looks something like this.

{%
    include
    image
    name="run-configurations.png"
%}

You can see in the left sidebar that there is an option for “C/C++
Remote Application” if you do not see this on your system then you did
not install all of the necessary plugins. Specifically, you forgot the
C/C++ Remote Launch” plugin, return to the Eclipse marketplace and
install this plugin. If you do see this option, then you are ready to
move on to setting up your connection.

To create a new run configuration just double-click on the “C/C++ Remote
Application” item, after a moment Eclipse will have created a new run
configuration and you should see a window that looks something like
this.

{%
    include
    image
    name="run-configurations-setup.png"
%}

You now have the skeleton of a remote run configuration but need to
inform Eclipse of which device you would like to deploy to. In order to
do this you can click on the “New…” button to create a new connection
which will present you with the new connection window.

You will first be asked to define the remote system type, for the
BeagleBone Black you will choose “Linux” but as you can see there are
many other methods of connected to devices.

On the next screen you will tell Eclipse what IP address to connect
to as well as what SSH profile to use. Setting up the SSH profile is
outside of the scope of this tutorial, but Eclipse should be able to
handle that for you.

For my BeagleBone Black (and I believe all of them) connected by USB the
IP address is `192.168.7.2`. Enter this number in the “Host Name” section.
If you BeagleBone Black has a different IP you will want to use that
instead.

Finally, you can give the connection an easy to remember name and
description, or you can leave these fields blank, that’s up to you. My
completed connection information is as follows.

{%
	include
	image
	name="remote-connection.png"
%}

Click the next button and proceed to defining your connection protocols.
These next four prompts allow you to define what protocols eclipse
should use to communicate with your BeagleBone Black’s subsystem. You
will choose the following options:

1. ssh.files
2. processes.shell.linux
3. ssh.shells
4. ssh.terminals

To verify that your connection settings are correct, go to the Remote
System Explorer view and right click on your new connection. In the
dropdown menu and select “Connect…” after this you will be prompted for
a user name and password.

This should be the user name and password for the account you want
to log-in to the BeagleBone Black with. If you haven’t set up any
non-default accounts or know that you will need root access you should
just log in with the default root account by using the following
credentials.

{% include image name="password.png" %}

Hit OK and you now have a working connection to the BeagleBone Black
through Eclipse, you can even use Eclipse as a remote terminal now,
but we won’t get in to that right now.

The next and final step is to configure your remote paths and to give
your program execute permissions. If you don’t understand what that
means, don’t worry, I am about to walk you through it.

Return to the “Run Configurations” window you need to begin by setting
the remote path of your executable. Since you haven’t yet uploaded an
executable to the BBB you need to define this as the program name in
your root directory. So for example, in my case the program is called
“Test” and my root directory is `/home/root/` this means that my remote
path will be:

	/home/root/Test

In general you will define this as:

	/home/root/{ProjectName}

Finally, you will need to grant your program execute permissions. This
is essentially just a flag that tells the BeagleBone Black that it’s
okay to run the file through the processor. You can do this by using the
chmod command with the +x flag. For my project it looks like this:

	chmod +x /home/root/Test

The final run configuration is:

{% include image name="final-run-configuration.png" %}

Apply your configuration using the “Apply” button, then run your project
and check your console, you should see an output that looks something
like this…

{% highlight bash %}
root@beaglebone:~# echo $PWD'>'
/home/root>
root@beaglebone:~# chmod +x /home/root/Test;/home/root/Test;exit
Hello BeagleBone
logout
{% endhighlight %}

This shows the commands Eclipse used to run the application and shows a
successful “Hello BeagleBone” message.

## References

This was a complex article and took quite a bit of research. I came
across several other articles that would cover a part of the process but
not the whole flow, so I decided to combine all these articles as well
as my own personal experiences into a unified place.

Hopefully this article has been useful, but if not feel free to tweet at
me or check out these articles I read along the way.

* [fortune datko - Cross-compiling applications for the BeagleBone][fortune-datko]
* [Jan Axelson - Using Eclipse to Cross-Compile Applications for Embedded Systems][jan-axelson]
* [Derek Malloy - BeagleBone: C/C++ Programming Introduction for ARM Embedded Linux Development using Eclipse CDT][derek-malloy]

[windows-instructions]: http://tuanphong.net/cross-compile-and-remote-deploy-from-windows-for-beaglebone-using-eclipse-and-a-linaro-gcc-toolchain/
[vm-install-windows]: http://www.vmware.com/pdf/vmware_player40.pdf 
[vm-install-mac]: http://lifehacker.com/5204434/the-beginners-guide-to-creating-virtual-machines-with-virtualbox
[fortune-datko]: http://datko.net/2013/05/06/cross-compiling-applications-for-the-beaglebone/
[jan-axelson]: http://janaxelson.com/eclipse1.htm
[derek-malloy]: https://www.youtube.com/watch?v=vFv_-ykLppo

