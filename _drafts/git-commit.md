---
layout: post
title: Git commit -m
---

Commit messages are very important. They tell anyone, especially your future
self what you did at any given point in time in any project you work on.

## 1. Subject

The first line of a commit message is like the subject line on an email. If I 
can't tell what the commit is about from looking at the subject line, it's 
poorly written. It should be no longer than 50 characters, including tags,

* Tags

    A tag is added to the start of each commit subject line in order to provide
    context to the purpose of the commit. These also allow contributors to filter
    logs to specific types of commits. They are all caps and encased in square 
    brackets, followed by a space. 
    
    Only a single tag should be used at a time. If multiple tags are necessary, 
    the commit is doing too much and should be broken up - add the code for a 
    new feature in a single commit with the  `[FEAT]` tag, and the tests in a 
    subsequent commit with the `[TEST]` tag.
    
    Choose from the below list of acceptable tags:

    * `[FEAT]` Add a new feature to the project
    * `[BFIX]` Fix a bug
    * `[DOCS]` Add or update documentation
    * `[CONF]` Add or update configuration, including build/repo management/new dependancies, etc
    * `[TEST]` Add or update a test
    * `[STLE]` Update coding style to match styleguide
    * `[RFCT]` Refactor existing code that neither fixes a bug, nor adds new features

* Content

    The content of a commit message subject line should be used to convey the 
    *why* of the commit. There is no need to mention specific details about the
    change, just why it is being done. It should be:

    * Sentence cased
    * Not end in a full stop
    * Use the imperitive, present tense ('Add', not 'Added' or 'Adds')

## 2. Body

When the subject line of a commit is not able to provide enough context about
why a given commit is being made, a body can be added to the commit.

It should be preceded by a blank line, and focus on providing addiional context
as to *why* the change is being made. It should not concern itself about the
specific changes being made, as this can be determined by a git diff.

A commit body should wrap each line no later than 72 characters, and would
ideally consist of at most a single sentence