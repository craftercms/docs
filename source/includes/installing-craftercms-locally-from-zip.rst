:orphan:

---------------------------------------
Installing Crafter Locally via Zip File
---------------------------------------
1. Download Crafter CMS
2. Place the zip file where you want your install
3. Unzip Crafter CMS
4. Open Console / Command line
5. Change directory to the install directory
6. Change directory to crafter/bin inside the install directory
7. Execute the startup file
   - startup.sh for linux and MacOSX
   - startup.bat for Window
8. Verify two Java processes are running
   - Tomcat
   - Crafter Deployer

9. Open a browser and navigate to localhost:8080/studio
10 Sign in with admin/admin
11. Create a new site

	Name: Pluton
	Blueprint: Pluton
  
.. raw:: html

       <iframe id="vzvd-7312945" name="vzvd-7312945" title="vzaar video player" class="vzaar-video-player" type="text/html" width="768" height="432" frameborder="0" allowFullScreen allowTransparency="true" mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/7312945/player"></iframe>

----------------------------------
Restarting install at a later date
----------------------------------
1. Open Console / Command line
2. Change directory to the install directory
3. Change directory to crafter/bin inside the install directory
4. Execute the startup file
   - startup.sh for linux and MacOSX
   - startup.bat for Window
5. Verify two Java processes are running
   - Tomcat
   - Crafter Deployer
6. Open a browser and navigate to localhost:8080/studio
7. Sign in with admin/admin

-------------
Common Issues
-------------
================================================
Something is already running on configure ports.
================================================
Crafter's install is setup to run TOMCAT on port 8080 and the deployer on 9191.  If other servers are running on those ports Crafter CMS will not start properly.

===============
Java on Windows
===============
Often times JAVA_HOME is not properly configured on Windows. Make sure Java is in your PATH system environment variable configuration and that JAVA_HOME is properly defined as a system environment variable as well.
