---
title: Github Responds to Request to Take Down 'youtube-dl' Library
date: 2020-11-16
tags:
  - Tech
  - Hunter
authors: ["max"]
---

Github [reinstated][github] on Monday the `youtube-dl` repository, a popular Python library used to download youtube videos and audio. 

Github is a web platform that hosts code repositories. Github was purchased by Microsoft in 2018 for [$7.5 billion][microsoft]. Some of the code hosted on Github is free for anyone to download, run, or modify. This is the case with `youtube-dl`, whose source code is in the [public domain][license].

On October 23, 2020, the Recording Industry Association of America (RIAA) filed a DMCA notice with Github. They argued in [their letter][riaa] that `youtube-dl` was being used in ways that violated copyright law. They asked Github to take down the repository and all its forks (alternative versions) because they "circumvent the technological protection measures" of video sharing websites to "reproduce and distribute music videos and sound recordings... without authorization." Basically, piracy.

Github responded by removing the `youtube-dl` repository. This had limited effect, since users could still download the code from package managers (Pip, Homebrew, Ubuntu, Winget) as well as the [project's official website][youtubeDL]. However, this move curtailed development. More importantly, it frightened many other developers who feared this would set a detrimental precedent for similar software projects. They feared Microsoft might pressure Github to take down other repositories for its own anti-open-source interests.

The grounds for this claim were very limited. The RIAA cited unit tests (code that is used to test the software) which contained links to copyrighted Taylor Swift music videos. These unit tests, buried in an obscure file that most people will never run, much less look at, were enough to get the whole repository taken down.

# What is DMCA?

DMCA (Digital Millennium Copyright Act) is a United States law from the late 1990s that [protects content creators][dmca]. It recognizes two treaties from the World Intellectual Property Organization (WIPO). The RIAA was one of the groups who lobbied lawmakers to recognize these treaties to ensure the vitality of the music industry in the face of the growing popularity of peer-to-peer file sharing. The law criminalizes two things:
1. the dissemination of copyrighted works
2. circumventing access control (cracking passwords to access copyrighted material, reverse-engineering video or audio encryption, etc)

Under DMCA, content owners can send a letter to website owners asking them to take down their stolen material. The webmaster must take it down, or respond with a counterclaim. Github regularly processes claims for the first reason, such as when someone steals restrictively licensed code and uploads it to Github. However, [they very rarely process claims for the second reason][github], known as Section 1201.

# The Internet Reacts

Github's decision to take down the repository was [met with anger][zdnet]. Hundreds of users reuploaded the code to github, prompting Github to warn users that "they risk having their accounts banned by [Github's] automated systems if they continue re-uploading the code on the site." One hacker even [appended the library's source code to the RIAA's letter to Github][tweet].

Several prominent organizations took action. The Freedom of the Press Foundation published an [editorial][freedomPress] arguing that `youtube-dl` was an essential tool for journalists, archivists, developers, and human rights activists. They interviewed journalists who used the tool to preserve witness accounts of human rights abuses in countries that take down such videos. They also spoke with a Hunter alum who used the tool to slow down and enhance raw footage that is not possible with YouTube's web interface:

> In other cases, local copies are necessary to conduct more rigorous analysis than is possible online, and journalists turn to youtube-dl for the highest quality copy of the video available. John Bolger, a software developer and systems administrator who does freelance and data journalism, recounted the experience of reporting [an award-winning investigation][envoy] as the News Editor of the college paper the Hunter Envoy in 2012. In that story, the Envoy used video evidence to contradict official reports denying a police presence at an on-campus Occupy Wall Street protest.

# Github Reverses Course

On November 15, 2020, the Electronic Freedom Foundation (EFF) sent a [letter][effletter] to Github asking that `youtube-dl` be put back up. They listed two reasons:
Youtube doesn't have any security in place that prevents downloading videos
The software could be used to download non-copyrighted works, and there was no implication in the instructions that it should be used to do anything illegal

Github obliged the next day. But it was not enough to reverse their decision; they had to repair their relationship with the developer community.

"At GitHub, our priority is supporting open source and the developer community. And so we share developers' frustration with this takedown," they wrote on their [blog][github]. This pro-developer language is unusual for a Microsoft-owned company.

They implemented significant policy reforms:
Every single section 1201 claim will be reviewed by technical and legal experts to ensure that the offending code really does violate the DMCA
The offending repository owner will be given a chance to remove the offending code before their whole repository is taken down
The Trust and Safety team will treat DMCA tickets as a top priority and help owners get their repositories back online even after they have been taken down
Github is establishing a $1 million **Developer Defense Fund** to cover legal and personal liability costs for developers facing section 1201 claims.

The new Developer Defense Fund is the most impactful change in the open source community. It means a major company, Github, is providing "critical legal support to developers who would otherwise be on their own, facing off against giant corporations or consortia." This million dollar commitment will help organizations like the Software Freedom Law Center and the Electronic Frontier Foundation (EFF) reach less financially well-off developers.

[github]: https://github.blog/2020-11-16-standing-up-for-developers-youtube-dl-is-back/
[microsoft]: https://news.microsoft.com/2018/06/04/microsoft-to-acquire-github-for-7-5-billion/
[license]: https://github.com/ytdl-org/youtube-dl/blob/master/LICENSE
[riaa]: https://github.com/github/dmca/blob/master/2020/10/2020-10-23-RIAA.md
[youtubeDL]: https://youtube-dl.org/
[dmca]: https://www.whoishostingthis.com/resources/dmca/
[zdnet]: https://www.zdnet.com/article/github-reinstates-youtube-dl-library-after-eff-intervention/
[tweet]: https://twitter.com/lrvick/status/1320246266270519297
[effletter]: https://github.com/github/dmca/blob/master/2020/11/2020-11-16-RIAA-reversal-effletter.pdf
[freedomPress]: https://freedom.press/news/riaa-github-youtube-dl-journalist-tool/
[envoy]: https://hunterenvoy.net/articles/nypd-baruch
