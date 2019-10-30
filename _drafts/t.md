---
layout: post
title: t Is For Todo
---

For the last few weeks, the last thing I do at the end of every day is quickly
jot down a few key tasks that I need to get done the next day. I've been doing
this is my text editor, and leaving the file open all the time. The process has
been really working really well at incresing my focus, my productivity and my
overall performance at work.

What hasn't been working well is leaving the file open. I like to keep only 
things that I'm actively working on open in my editor, and close windows when
I'm done with a project.

With that in mind, I decided to build myself a tool to do this on the command
line. There are plenty of tools out there, but none of them quite hit the spot
for me, and this was an excuse to build something for myself - something I don't
tend to do very often these days.

At first I started to build it in JavaScript with Node.js but after thinking a
little bit about it, I decided I wanted a compiled binary, and ended up deciding
that now was a good time to learn something new and went with [Go][golang].

It took about three days to write from scratch, has zero unit tests, is
extremely limited in the scope of what it can do, but it works for me, and it
*may* work for you.

## Introducing "t"

[t][t] is, as the tagline says, a "minimalist command line todo
manager" that offers you the ability to add, delete, and list todo items that
are stored in a todo.txt file in a `.t` directory in your `$HOME` directory.

[Check it out on Github][t]

I've currently only compiled it for MacOS, but for the next release there should
be a Windows and Linux version.

The code is likely not well structured as a Go app, and I've got no idea how
idiomatic it is, so I'm more than open to feedback and pull requests to make it
more correct.

### Features

There's not many. You can add a task to a list, but you can't add the same task
twice. You can delete a task, but you it fails gracefully if you try to delete
one that doesn't exist. You can list tasks, and if there are none, you'll get a 
nice friendly message. It also colourises some outputs, just because I could.

### Missing/Potential features

#### Complete Items

It might be worthwhile having a command to mark a task as completed. Some 
thought would need to be given to this, though, as I like the idea of the 
todo.txt file consisting solely of incomplete tasks. Perhaps marking a task as
complete could move it to a `completed.txt` file with a datetime marker to know
when it was done.

#### Configuration

I really like the idea of consuming a configuration file of some sort and
managing configuration of things like the path to the text file(s) in that file.
I've got a branch going with some initial work, but I'm running into a few
issues that I'm not sure how to solve.

#### Projects

I'm not sure about this one. Part of me thinks it would be handy to mark a task
as belonging to a specific project, but again, some serious consideration would
be needed to avoid polluting the todo.txt file. Perhaps a separate file per
project, with projects being managed in the config file?

#### Others

I'm not sure what else I would want. I don't really subscribe to any particular
productivity methodology, just having a task list with things to do and working
my way through it.

[golang]: https://golang.org
[t]: https://github.com/deanacus/t