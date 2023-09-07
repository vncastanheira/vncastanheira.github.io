---
title: winget has become a favorite tool
date: 2023-09-07 01:24:45
tags: 
    - winget
    - scoop
    - chocolatey
    - windows
---
I have a bad habit: messing too much with my computer. Or maybe some may say it's a good one, curiosity is a virtue. But that's not the point.

The consequence here is that more often than not is that things break in my computer and I have to reinstall everything again and again. Like as of late where Windows 11 decided to stop booting and I said enough and installed Linux Mint to do some experiment, since Microsoft don't seem to be taking their OS into a direction I feel comfortable using.

But my first foray with Linux was way back in 2010 at college, influenced by teachers who were passionate about the OS and it was when I learned about `apt-get` and this idea of installing things through the command console. It was a neat idea that I never gave much thought until it became a burden to do the usual Windows thing of going to every website for each tool you needed to search for installation files, saving them on a Download folder, that old process that I have been doing since Windows 98 more or less. I wanted to automate things.

My first experience like that in Windows was with [Chocolatey](https://chocolatey.org). It's a package manager that I quickly grew frustrated with because of the verbosity with Powershell during the installation and I remember having problems with finding packages, random errors and whatnot. Pardon me if something is incorrect here, there must be a reason why I switch to this next contender.

After that it came [Scoop](https://scoop.sh). I think the best thing about Scoop really is the premise of installing portable apps, althought it has some drabacks I will get into later. But although it took me a while to rely solely on it after using Chocolatey less and less, it was easy to get used to something that didn't leave much garbage on the system, as Windows programs often do. Packages often had the most recent version and a lot of open-source software I really like to use for basic things like image viewing (nomacs), Media Player Classic, VLC and some others.
Recently I found a problem with it though, specially for browsers, and I think it's a problem with Windows actually.
You see, Scoop has this clever way of keeping track of your software version of your packages by having a shortcut file called `current` that points to the folder of the most recent version. The problem is if you open the software and pin it into the taskbar, the taskbar will point not to the `current` path but rather to the folder of the current version you are using. This is a major issue for stuff like my main browser because I like to have it pinned at the taskbar. For other stuff I have the habit of quicky hitting Super and typing the name of the app to search it, so it was something that went unnoticed for quite a while. But things changed.

Microsoft has released a few years back `winget`, a tool that many still don't know (and have some controversy behind it's original creator) and pretty much makes Windows a way more comfortable OS for power users. The list of repositories includes many popular open source projects, alongside the ones from Microsoft Store. The last is specially good for installing stuff like Visual Studio Code. It's very simple to use and although the packages are sadly verbose (VS Code name is Microsoft.VisualStudioCode) which are more annyoing than typing `scoop install vscode`, you can have apps actually installed instead of portable ones to cover these cases I mentioned above. There's a high chance it could take over `scoop` completely on my workflow. My new fresh install of Windows 10 LTSC only has `winget` and so far I'm satisfied with it because it keeps tracks of the apps updates. It's a tool that integrates well with the way Windows works with installations, unlike `scoop` that just have a few links on your personal folder. That's not a criticism on `scoop` though, it's by design and the way I liked it, I just wish there was some way around the issue of pinning shortcuts on the taskbar. It's partially my fault for not looking deeper in that issue either.

Anyway, any of these three options completely improved my Windows experience and it's something I recommend anyone experimenting with.