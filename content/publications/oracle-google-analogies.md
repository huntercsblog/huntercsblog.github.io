---
title: 7 Ways To Explain APIs to Supreme Court Justices
date: 2020-10-15
tags: ["Tech"]
authors: ["max"]
---

Suppose you are a lawyer arguing a technical case to the Supreme Court. You are standing in an 85 year-old neo-classical building. The nine justices you are speaking to aren't much younger. Before the death of Justice Ruth Bader Ginsburg in September 2020, the average age on the court was *70* (it is now 63 and a half).

While these esteemed members of the nation's highest court are all respected scholars of the law, a computer science degree is not a requirement for the job. For half of them, the last time they were in college, the only languages to learn were COBOL and Fortran. Only a third of them would have been able to take a course in C, the predecessor to C++. When dealing with a subject that they're not familiar with, the Court invites an amicus curiae brief, which is someone not involved with the case but with expert knowledge of the subject.

Still, the lawyers involved with Oracle v. Google had trouble explaining what exactly constitutes a modern programming language like Java. Oracle and Google are software giants who have been squaring off in court for the last ten years over the copyright-ability of 11,500 lines of Java code. Oracle, who owns the official Java distribution, sued Google for [$8 billion](https://businesslawtoday.org/2020/10/reactions-mixed-metaphors-decoding-google-v-oracles-impact/) because the Android API was too similar to the "structure and organization" of the Java API. Copyright law is already complicated, but adding technical implementation details makes it all the more complex. To make their case, the lawyers used analogies to explain to the septuagenarians what an API (Application Programming Interface) is.

Before we dive into the analogies presented to the Court on October 7, let's look at an analogy for programmers. If you come from the C/C++ world, the Java API is like a header file, a bunch of declarations without the actual code. The Java and Android APIs are classes and methods (functions) that perform operations like printing to the console, opening a file, or making a list. (You can [hear Justice Stephen Breyer read aloud a line of Java code](https://www.c-span.org/video/?469263-1/google-v-oracle-america-oral-argument) at 12:26). Google didn't copy the code, just the organization and names of these APIs. So did they violate copyright? We've ranked seven analogies to help you decide.

# (7) The Juke Box Analogy
You can read the full thing [here](https://www.supremecourt.gov/DocketPDF/18/18-956/89422/20190225113504834_37659%20pdf%20Menell.pdf). Three esteemed scholars weighed in on the side of Google, likening Google's Java implementation to a Jukebox. If Java code is a series of musical notes, then when you put the notes together you get an album or, in Java terms, a method. A person can go up to any jukebox and ask it to play that song. Finding and playing a song is like invoking a "method". You're not stealing anything, you're just identifying a well-known song.

# (6) The Car Controls Analogy
This analogy has been [less successful in software cases](https://www.masslawblog.com/copyright/oracle-v-google-will-the-best-analogy-win/) says Lee Gesmer, a Boston lawyer specializing in intellectual property and business litigation, but you can read it [here](https://www.supremecourt.gov/DocketPDF/18/18-956/128391/20200113145027664_18-956%20Google%20v%20Oracle%20Computer%20Scientists%20Merits%20Amicus%20FOR%20FILING.pdf). Eighty-three computer scientists weighed in on the side of Google, likening the Java API to the driver's seat.

> A steering wheel and gas and brake pedals have been standard in cars for over a century. . . . Treating software interfaces as copyrightable would be like requiring car manufacturers to invent a substitute for the steering wheel. Startups would not risk manufacturing such a car, and even if they did, consumers likely would not purchase it.

# (5) The New York City Map Analogy
IBM and Red Hat wrote this one, accessible [here](https://www.supremecourt.gov/DocketPDF/18/18-956/128452/20200113165654112_18-956%20tsac%20International%20Business%20Machines%20Corp%20and%20Red%20Hat%20Inc.pdf). They cited a Supreme Court case from 1879, Perris v. Hexamer, which decided that copyright did not extend to maps. The Java API, they say, is like a map because it is a system of organizing signs and information. Google's lawyers did not cite this case for some reason.

# (4) The Book Title Analogy
The Software and Systems Developers and Engineers for U.S. Government Agencies wrote this one [here](https://www.supremecourt.gov/DocketPDF/18/18-956/128455/20200113171350826_2020%2001%2013%20Final%20brief%20for%20filing%20--%20Software%20and%20System%20Developers%20and%20Engineers.pdf). They liken Java's classes and methods to book titles. You can talk about a book or even its main ideas without violating copyright. Since Google only copied the names of Java API methods, and not their code, they only copied the "titles" and not the contents of the "books."

# (3) The E-Commerce Checkout Analogy
This analogy was written by Mozilla, Shopify, Etsy, the Wikimedia Foundation and others ([read here](https://www.supremecourt.gov/DocketPDF/18/18-956/128321/20200113120624750_18-956%20Amici%20Curiae.pdf)). This one is similar to the car controls analogy, in that the organization and structure of online shopping websites is so ubiquitous that requiring everyone to come up with their own system would be ridiculous. As such, Google shouldn't have to reinvent the Java API. 

This analogy is better than car controls because it's more relevant to software design practices. It is better to build off the shoulders of giants like Amazon, than to reinvent the wheel.

# (2) The *Harry Potter* Analogy
Oracle's lawyers came up with this one. They compared themselves to J. K. Rowling, author of the *Harry Potter* series, which makes Java programmers *Potter* fans. They argued that Google effectively ripped the most popular parts of the book series and [adapted them into a film](https://www.project-disco.org/intellectual-property/121117-false-analogies-in-the-oracle-v-google-oral-argument/). The basis of this argument is that writing code, like writing fiction, is a creative endeavour and thus enjoys strong copyright protections. Even though Google wrote their own code, they copied all the names and chapter titles of the Java API, still part of Oracle's "creative" work.

# (1) The QWERTY Analogy
Justice Stephen Breyer [really liked this analogy](https://www.cnbc.com/2020/10/07/supreme-court-hears-google-v-oracle-software-copyright-case.html). He likened the Java API to the QWERTY keyboard layout. Sure, keyboard manufacturers can choose to lay out the keys differently, but everyone is so used to QWERTY that it wouldn't make sense to give anyone copyright ownership over the original design and accuse everyone else of stealing. Similarly, Google could have renamed and reorganized all the Java APIs back in 2010, but programmers have gotten so used to them that it would be ridiculous to force them to change it now. 

Justice Sonia Sotomayor argued the opposite, pointing out that Apple spent billions to develop a new language for the iPhone and Google could have done the same. However, even Apple settled on a language similar to the one used on its Macs to attract that crowd of developers. A key element of software development is using a standard interface to make it easier for programmers to build new things without learning an entirely new system.