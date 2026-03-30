---
title: Java Dates
subtitle: Java has a calendar function that can be used for preforming calculations on the Date.
date: 11/29/2021
tags: [computer-science, school, high-school, java]
---

# Java Dates
Java has a calendar function that can be used for preforming calculations on the Date.
## The Package
There are 2 packages that come in java.util that work with dates. There is java.util.Date and java.util.Calendar. You should use java.util.Calendar because java.util.Date is depreciated.
## Getting The Instance
Calendar is static meaning "new Calendar()" won't work. Instead you should use "Calendar.getInstance()" to get a static instance of the Calendar.
## This code:
    Calendar calendar = Calendar.getInstance();
    String todaysDate = String.format("%tc", calendar);
    System.out.println(todaysDate);
    String todaysTime = String.format("%tr", calendar);
    System.out.println(todaysTime);
    String dayOfTheWeek = String.format("%tA", calendar);
    System.out.println(dayOfTheWeek);
    String month = String.format("%tB", calendar);
    System.out.println(month);
    String day = String.format("%tD", calendar);
    System.out.println(day);
    String weekMonthDay = String.format("%tA, %<tB %<td", calendar);
    System.out.println(weekMonthDay);
## Gives this output:
    Mon Nov 29 09:00:22 EST 2021
    09:00:22 AM
    Monday
    November
    11/29/21
    Monday, November 29
