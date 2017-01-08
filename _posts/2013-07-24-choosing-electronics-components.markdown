---
layout: post
title:  "Choosing Electronics Components"
date:   2013-07-24 15:00:00 -0600
categories: hardware
---

This is perhaps the most tedious step in the design process, but is
crucial to a successful design. **Choosing the right part for your
design could be the difference between finishing your project and giving
up in frustration**.

All integrated circuit manufacturers work hard to make their designs
robust and perform their function at the lowest price they can, but not
all companies are equal. This is especially true when it comes to making
their parts easy to use.

Since there are hundreds of thousands (millions?) of different
components on the market, it isn't possible for me to give a complete
rundown, but what I can do is provide some general guidance on how to
select the best component for your purpose.

- **Check availability.** The last thing you want to do is put weeks or
months into a design only to find out when you go to buy your parts that
a crucial component is out of stock and will not be available for a few
more months. Choose a part that shows a large inventory and optimally is
available from multiple distributors.

- **Consider where the component is in the product life-cycle.** You
generally don't want to get a component that is no longer in active
production, but if your project is just a one-off build then this may
not be a big deal.

- **Make good use of the parts filters.** Most distributors or part
finding tools offer some way to narrow your search criteria. Make use of
this not only to reduce the amount of parts you have to look at but also
as suggestions for alternative components. As a simple example let's
assume you have decided you want an LED with a millicandela rating of at
least 80 mcd. Instead of filtering for components that have a rating of
exactly 80 mcd, filter for any component with at least 80 mcd then sort
by price, forward voltage drop, or current draw. This method may save
you money while also getting you a better performing component.

- **Be aware of minimum quantities.** Some components are only sold in
large lots, be aware of this when choosing your components so that you
aren't forced to do a redesign.

- **Know what package you are getting.** All components are delivered
in some type of package that allows you to attach them to your board.
Some components are offered in multiple package styles that are usually
incompatible. If you are planning on making your PCB at home you should
try to avoid the very small packages such as no-lead packages or
chip-scale packages. These can be difficult to solder without proper
equipment.

- **Understand the part!** This is the final and most important
guideline that I have. You should always fully understand the part
before deciding to use it in your project. Some components can require a
microcontroller or microprocessor, an external clock, or a special PCB
design. Being aware of these requirements beforehand will help you avoid
headaches in the future.

When it comes to actually finding parts, I like to use the search
capabilities provided by my favorite vendors, this way I know the
product will be available and I can choose components based on the
actual cost to me and available inventory.

Another way to search for parts would be to go to a particular company's
website and browse their parts catalog for a solution. For example, if
I know I need an ADC for a project, I may start with a company that is
well-known for their ADC products such as TI. This has the advantage of
often leading to a highly usable solution.

My four personal favorite avenues for finding parts are:

1. [Mouser.com](http://www.mouser.com) - Mouser is a popular worldwide
component distributor that has a wide range of products. Their selection
is (in my experience) not quite as large as Digi-Key's, but I prefer
their website design, the better filtering system, and the more logical
component organization.

2. [DigiKey.com](http://www.digikey.com) - Digi-Key is another popular
worldwide component distributor. They probably have the largest
component selection of any distributor, have great customer service, and
are fast to ship. Overall I would put Mouser and Digi-Key about even,
and certainly at the top of the list.

3. [Octopart.com](http://www.octopart.com) - This is a relatively new
service that is like Google for electronics. Octopart searches through
many different distributor channels for the part you want. There are
many things I like about this service. They always put the datasheet
in an easy to find spot, they provide a useful product summary, and
show you price comparisons from different distributors. But there are
drawbacks, Octopart still seems a bit unrefined and I don't think it is
worthwhile to compare prices from different distributors unless you are
only buying a single part or are buying a massive quantity of components
and shipping costs are negligible. In a few years Octopart may become
the standard for finding your parts, but for now it still has some room
to grow.

4. [datasheets360.com](http://www.datasheets360.com/) - They have a
database of over 70 million electronic components, each with a PDF
datasheet and is working on scaling the site up to 350 million parts (up
to about 180 million in November 2013). In addition to datasheets they
also provide inventory and pricing information from some of the major
suppliers. This is a great resource.

> 2016 Michael here, I love Octopart, use that.
