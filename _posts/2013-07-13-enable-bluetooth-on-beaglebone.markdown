---
layout: post
title:  "Enable Bluetooth on BeagleBone Black"
date:   2013-07-13 17:35:00 -0600
categories: beaglebone howto
---
Have you bought a Bluetooth adapter for your BeagleBone Black but can’t
get it to work? If so, this article is for you.

If you are having trouble getting your computer or other device to pair
with the Bluetooth dongle you have attached to your BeagleBone Black,
the fix may be as simple as this two step procedure. By default, the
Bluetooth drivers are not fully enabled; I will show you how to fix
this.

## Quick Version

If you don’t care about learning what is going on, just copy and paste
this command into your BeagleBone Black. I don’t really recommend doing
this in general, if you get into the habit of just copying and pasting
code from random websites on the internet, you could easily give someone
fairly unrestricted access to your system. But if you can look at the
commands below and understand what is going on, go for it.

{% highlight bash %}
echo –e “\n[Bluetooth]\nEnable=true” >> /var/lib/connman/settings && \ 
systemctl enable bluetooth.service && \
systemctl start bluetooth.service
{% endhighlight %}

If you would like to learn a little bit more about what you are doing
and why, continue reading.

## Step 1: Enable Bluetooth Capability

The first step in enabling Bluetooth is to inform your BeagleBone Black
that you would like to be able to use this feature. To do this you will
just need to make a quick edit to a configuration file.

If you perform:

{% highlight bash %}
cat /var/lib/connman/settings
{% endhighlight %}

You should see something like:

    [global]
    OfflineMode=false

    [Wired]
    Enable=true

    [WiFi]
    Enable=true

What this file is essentially telling you is that the BeagleBone Black
connection manager is only aware of Wired Ethernet connections, or WiFi
connections enabled through a USB module.

What you want to do is add the Bluetooth module. To add this just type
the following command:

{% highlight bash %}
echo –e “\n[Bluetooth]\nEnable=true” >> /var/lib/connman/settings
{% endhighlight %}

Now if you look at your configuration file again by using

{% highlight bash %}
cat /var/lib/connman/settings
{% endhighlight %}

You should see something like this:

	[global]
	OfflineMode=false

	[Wired]
	Enable=true

	[WiFi]
	Enable=true

	[Bluetooth]
	Enable=true

## Step 2: Enable the Bluetooth System Service

Your next and final step is to enable and start the system service that
monitors Bluetooth. This allows you to pair with the BeagleBone Black,
as well as some other core functionality. To enable the service type:

	systemctl enable bluetooth.service

You may see a few messages but should not get any errors, if that is
the case then this step worked as expected and your BeagleBone Black
is almost ready to use Bluetooth. All you need to do now is start this
service using the following command.

	systemctl start bluetooth.service

Congratulations! You should now have a working Bluetooth dongle.
