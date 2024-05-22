# Job Tracker

As a fun project, I'll try to make a job tracker with stats and eventually moving towards being able to track details.

## Milestones

### Milestone 1: Statistics

I don't know when I'll get a job, but I have already made a page of statistics on the Svelte side of the website. The
app should be able to read a CSV of the original job tracker I made in Google Sheets, and it should present the
following details:

1. The accumulated job applications (application rate)
2. The timeline for job interviews
3. The same stats I have in my Google Sheets
    1. Number of applications
    2. Interviewed
    3. Active applications
    4. Applied and waiting
    5. Applied and rejected
    6. Queued
    7. Scouted
    8. Total job postings
    9. Oldest no reply application
    10. Days since oldest reply

### Milestone 2: Making the data interactive

Now, that we have the data in our CSV visualized, let's make the experience using the app better than our current Google
Sheets. Here are our user requirements:

1. I should be able to login as admin to show hidden details.
2. I should be able to have the CSV data and the database data.
3. I should be able to add a new job entry.
4. Non-admin users should not be able to see the names or other sensitive data of the job postings.
5. I should be able to assign a label, and make sure it records the date the label was applied.
6. The stats should consider both CSV data and the database data.
7. When the features are satisfactory, migrate completely off the CSV data and into the database data.
8. When modeling the data, I should consider about the possibility of having multiple "job sessions". Job sessions is a separate period of job hunting, such that there are employment period in between.
9. When we close a job session, we should change how we analyze the data.
