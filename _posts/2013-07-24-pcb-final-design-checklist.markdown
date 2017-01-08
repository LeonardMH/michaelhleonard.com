---
layout: post
title:  "PCB Final Design Checklist"
date:   2013-07-24 15:00:00 -0600
categories: hardware
---

1. All unused inputs terminated
2. All outside world I/O lines filtered for RFI and protected against static discharge
3. Bypass cap for each IC power supply
4. Voltage ratings of components checked – **This is important**
5. File name on each sheet
6. Dot on each connection
7. Minimum number of characters in values, within reason
8. Consistent character size for readability
9. Schematics printed at a readable scale
10. All components have reference designators and values
11. Special PCB or parts list information entered for each component, if required
12. All polarized components checked for reverse voltages
13. Title block completed for each sheet
14. Pull-up resistors on all open collector or open drain outputs
15. Sufficient power rails sizes
16. Consider signal rate-of-rise and fall for noise radiation
17. Separate analog signals from noisy or digital signals
18. Sufficient capacitance on low dropout voltage regulators
19. Check the data sheet fine print and app notes for strange IC behaviors
20. Automotive powered devices must withstand 60 to 100 volt surges
21. Check maximum power dissipation at worst-case operating temperatures
22. Check time delays and slew rates of OpAmps used as comparators
23. Check failure modes and effects of failed power semiconductors
24. Estimate total worst case power supply current
25. Check pin numbers of all custom-generated parts
26. For buses, ensure bus order matches device order
27. Ensure resistors are operating within their specified power range
28. Resistor power ratings derated for elevated ambient temperatures
29. Use of baud rate friendly clock source for devices that have serial ports
30. ROHS compliance requirement review if you are planning to sell your product
31. Review parts to make sure they aren’t obsolete
32. All no-connect pins on IC's should be labeled NC
33. Text should not overlap wire or symbol graphics on schematics
34. Page title present and consistent on all pages if not in title block
35. Off board connectors identify all signals even if not used on this design
36. Unpopulated parts annotated and enclosed by dashed-line box on schematics
37. Wires exist between all connected pins/ports (no direct pin/pin connections)
38. Pin names and attributes on symbols with multi-function pins should match actual design usage
39. Connect DIP switches and other grouped I/O to ports in a logical way, LSB to LSB, MSB to MSB
40. Use preferred component reference designators