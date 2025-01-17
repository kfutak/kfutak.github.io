# kfutak.github.io
My personal website.
## Activity Log
**01/08/2025** Today I created a new GitHub account to host my personal website repository. I used [this tutorial](https://pittcs.wiki/skills/personal-website/) to make a basic HTML welcome page. I also used [this tutorial](https://docs.github.com/en/pages/quickstart) as an intro to using GitHub Pages.

**01/09/2025** Today I cloned my repository in Visual Studio using [this tutorial](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git). I also had to switch my GitHub account in VS Code (initially committed through my first account). Today I mainly worked on the header and navigation part of the website. 
Below are some colors I might use on my website (courtesy of [coolors.co](https://coolors.co/fe5d26-c1dbb3-7ebc89)):
- Giants orange: fe5d26
- Tea green: c1dbb3
- Emerald: 7ebc89

The koi image is from [Unsplash](https://unsplash.com/photos/a-group-of-koi-fish-swimming-in-a-pond-A9oltO66FY8).

**01/10/2025** I did not do very much work today. I mainly added basic information to my About Me. Tomorrow I plan to add sections about my interests and adjust the links in the footer to be attached to logos.

**01/14/2025** I worked on the section of the website describing my interests. 
- [Track picture](https://unsplash.com/photos/low-angle-photography-of-track-field-TEYrLTKKMSg)
- [Books picture](https://unsplash.com/photos/assorted-title-of-books-piled-in-the-shelves-NIJuEQw0RKg)
- [Math picture](https://unsplash.com/photos/a-close-up-of-a-piece-of-paper-with-writing-on-it-dvMJR9-Drbs)

I also added icons for the footer links. The icons are from a [fontawesome.com](https://fontawesome.com/) kit.

**01/15/2025** I completed the resume page. In the future I plan to use Vue.js and add more comments to my code. After I complete a CSS/HTML course, I plan to review the code in my project to try to improve it.

**01/16/2025** Today I installed **[Chocolatey](https://chocolatey.org/)** to facilitate installations. Steps:

Open the Windows PowerShell in admin mode.

Check the session execution policy: Get-ExecutionPolicy

Change the session execution from Restricted: Set-ExecutionPolicy Bypass -Scope Process -Force

Install Chocolatey:
- Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12; Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

Verify installation: choco --version

Next I used Chocolatey to install **Node.js**. Steps:

Install Node.js: choco install nodejs

Add Node.js to the PATH Environment Variable: 
- Search for edit the system variables.
- Click environment variables.
- Under System variables, find Path and click Edit.
- Click New and add the path to node.exe: C:\ProgramData\chocolatey\bin 
- Click OK to save/close all windows.

Restart the PowerShell in admin mode.

Check the session execution policy: Get-ExecutionPolicy

Change the session execution from Restricted: Set-ExecutionPolicy Bypass -Scope Process -Force

Verify Node.js installation: node -v
Verify npm (Node Package Manager) installation: npm -v

Finally, I followed this [tutorial](https://vuejs.org/guide/quick-start.html) to install **Vue.js**.

Tomorrow I plan to integrate my old files into the Vue project.

## What I Used to Make the Project
- GitHub, Visual Studio Code
- Chocolatey, Node.js (+npm), Vue.js
- HTML, CSS