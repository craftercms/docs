=========================
Crafter Engine Benchmarks
=========================

The most performance critical component of any CMS is typically the dynamic content generation and delivery capabilities.  This document details the performance for Crafter Engine, the dynamic content delivery engine for Crafter CMS. 

------------------------------
Testing Platform Specification
------------------------------

^^^^^^^^
Hardware
^^^^^^^^
	* DELL PowerEdge R710 Single Socket Intel Xeon E5645 2.4GHz
	* Processors: 1
	* 12Gb DELL RAM 

	Note that the hardware used for this test is extremely low end, commodity hardware.  Today's production hardware will significantly outperform the results / findings contained in this document.
	
^^^^^^^^^^^^^^^
Load Generation
^^^^^^^^^^^^^^^
	* Use JMeter 2.6
	* Agents performing simulation: 1

^^^^^^^^
Scenario
^^^^^^^^
	* Random full page load of highly dynamic, personalized pages and content as a service calls
	* Exercise search page with moderate query complexity (typical search includes full text across various fields, facets, pagination etc)

^^^^^^^
Results
^^^^^^^

	* Example Run
		* Samples: 76,296
		* Average Response Time: 49ms
		* Median Response Time: 17ms 
		* Throughput: 133 pages / second
 
^^^^^^^^
Findings
^^^^^^^^

	* A single CPU of Crafter Engine will reliably serve over 1 million fully dynamic page views per hour
	* Number of user sessions depends on storage approach for profile (use of session / memory etc) 
 
