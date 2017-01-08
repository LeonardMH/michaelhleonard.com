---
layout: post
title:  "PCB Final Manufacturing Checklist"
date:   2013-07-24 15:00:00 -0600
categories: hardware
---

1. Hole diameter on drawing are finished sizes, after plating. Finished hole sizes are >=10 mils larger than lead Silkscreen legend text weight >=10 mils
2. Pads >=15 mils larger than finished hole sizes
3. Place through-hole components on 50 mil grid
4. No silkscreen legend text over vias (if vias not soldermasked) or holes
5. All legend text reads in one or two directions
6. Components labeled left-right, top-bottom
7. Company logo in silkscreen legend, company logo in foil, copyright notice on PCB, date code on PCB, PCB part number
8. Assembly part number on PCB, for assembled boards
9. Components >=0.2" from edge of PCB
10. Ground planes where possible
11. Test pad or test via on every net to allow in circuit test
12. Test pads 200 mils from edge of board
13. All polarized components checked
14. No acute inside angles in foil
15. Traces >= 20 mils from edge of PCB
16. PCB revision on silkscreen legend
17. Mounting holes matched 1:1 with mating parts
18. Automated netlist check
19. Manual netlist check
20. Check netlist for nodes with only one connection
21. CAD design rule check
22. Tools on drill plot and NC drill file cross checked
23. Soldermask over bare copper noted if needed
24. PCB thickness, material, copper weight noted
25. Trace width sufficient for current carried
26. Minimum component body spacing
27. SMD pad shapes checked
28. Visual references for automated assembly
29. Tooling holes for automated assembly
30. Sufficient clearance for high voltage traces
31. Component and trace keepout areas observed
32. High frequency circuitry precautions observed
33. Thermal relief pads for internal power layers
34. Blind and buried vias only allowed on multilayer PCB
35. Sufficient clearance for socketed ICs
36. SMD component orientation arbitrary or consistent
37. Ensure pin 1 interpretation and orientation consistent among all connectors of a given type on the board
38. Standoffs on power resistors or other hot components
39. Digital and analog signal commons joined at only one point
40. EMI and RFI filtering as close as possible to exit and entry points in shielded areas
41. Layout PCB so that any rework or repair of a component does not require removal of other components
42. Extra connector and IC pins accessible on prototype boards, just in case
43. Check all power and ground connections to ICs
44. Provide ground test points, accessible and sized for scope ground clip
45. Potentiometers should increase controlled quantity clockwise
46. Bypass capacitors located close to IC power pins
47. All silkscreen text located to be readable when the board is populated
48. All ICs have pin one clearly marked, visible even when chip is installed
49. High pin count ICs and connectors have corner pins numbered for ease of location
50. Silk screen tick marks for every 5th or 10th pin on high pin count ICs and connectors
51. Check for traces running under noisy or sensitive components
52. Check IC pin count on layout vs. schematic
53. No vias under metal-film resistors and similar poorly insulated parts
54. Check for traces which may be susceptible to solder bridging due to low clearances Maximize distances between features where possible
55. Check for dead-end traces
56. Check for power not shorted to ground
57. Provide multiple vias for high current and/or low impedance traces

